interface Props {
  name?: string;
}

const Greet: React.FC<Props> = ({ name = "Guest User" }) => {
  return (
    <div>
      <h1>
        Hello {name} ,have a great React learning curve.
      </h1>
    </div>
  );
};

export default Greet;
