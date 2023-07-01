import React, { useState,useEffect } from "react";
import { SkillProps } from "./Skills.types";
const Skills:React.FC<SkillProps> = (props) => {
    const {skills,status}=props
    const [isLoggedIn,setIsLoggedin]=useState<boolean>(status || false)


    // this is to perform asynchronois task to check this will get mounted in DOM after some time
    useEffect(() => {
      setTimeout(() => {
        setIsLoggedin(true)
      }, 1001); 
    }, [])
    
  return <>
  <p>All Fields Are mandatory to fill</p>
  <ul>
    {skills.map((skill:any)=>{
        return <li>{skill}</li>
    })}
  </ul>
  {isLoggedIn ?
   <button>Start Learning</button> : 
   <button onClick={()=>setIsLoggedin(true)}>Log in</button>
   }
  </>;
};

export default Skills;
