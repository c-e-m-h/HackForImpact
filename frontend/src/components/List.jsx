import React from "react";
import AnimalCard from "./AnimalCard";

export default function List({ cats }) {
  console.log(cats);
  const style = {
    display:"flex",
    flexWrap: "wrap"
    
  }
  return (
    <ul className="list" style={style}>
      {
        cats && 
        cats.map((element) => 
          <li key={element.id}>
            <AnimalCard cat={element} />
          </li>
        )}
    </ul>
  );
}
