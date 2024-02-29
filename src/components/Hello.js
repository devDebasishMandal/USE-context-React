import React, { useContext } from "react";
import CricketContext from "../context/CricketContext";

const Hello = () => {
  // use context is giving us an object 
  // ---------const obj = useContext(CricketContext);
  // so to acess the values 
  // console.log(obj);
  // and if there is multiple values in the object we can destructure it  

const {crickter,setCrickter} = useContext(CricketContext);
function handleAge(){
  setCrickter({ ...crickter, age: crickter.age + 1 });
}




  return (
    <div>
      <h1>HI this is dev</h1>
      <h2>Name :{crickter.name}</h2>
      <h3>Age :{crickter.age}</h3>
      <h4>Retired:{crickter.retired?"True":"False"}</h4>
      <button onClick={handleAge}>Update</button>
    </div>
  );
};

export default Hello;
