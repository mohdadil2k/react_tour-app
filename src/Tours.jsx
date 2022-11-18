import React from "react";
import Tour from './Tour.jsx'
import './index.css'
const Tours = ({ tours , removeElement}) => {
  return <>
  {
  tours.map((tour)=>{
    return <Tour key={tour.id} {...tour} removeElement={removeElement}/>
  })
  }
  </>;
};

export default Tours;
