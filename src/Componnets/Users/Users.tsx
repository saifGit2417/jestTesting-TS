import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setData(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("error occured"));
  }, []);

  console.log("saif");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map((data: any) => {
          return <li key={data}>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
