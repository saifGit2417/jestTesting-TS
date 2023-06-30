import React, { useState,useEffect } from "react";
import { SkillProps } from "./Skills.types";
const Skills:React.FC<SkillProps> = (props) => {
    const {skills,status}=props
    const [isLogegin,setIsLoggedin]=useState<boolean>(status || false)

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
  {isLogegin ?
   <button>Start Learning</button> : 
   <button onClick={()=>setIsLoggedin(true)}>Log in</button>
   }
  </>;
};

export default Skills;
