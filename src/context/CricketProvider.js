import React,{useState} from "react";
import CricketContext from "./CricketContext";

const CricketerProvider = (props) => {
  // to make name global variable
  // let name = "Virat Kohli"; static variable
  // making a dynamic variable global 
  const[crickter,setCrickter]=useState({
    name:"Virat Kohli",
    age:36,
    retired:false
  })

  return (
    // this is to pass single static variable and making it global
    // <cricketContext.Provider value={name}>
    //   {props.children}
    // </cricketContext.Provider>
    // -------------------------------------
    // Making the object global which contains multiple variable
    <CricketContext.Provider
      value={{
        crickter: crickter,
        setCrickter: setCrickter,
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketerProvider;
