import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fetchalbums() {
  const [data, setResponse] = useState();
  useEffect(
    () => {
    fetch("http://localhost:8000/albums?page=1")
    .then((response) => response.json())
    .then((data) => setResponse(data))
  }, []);
  return (
    <div>
      
    {data && data.map((album) => 
    <Link key={album.id} to={`/albums/${album.id}`}>
    <img style={{"margin": "5px"}} width={"200px"} height={"200px"} src={album.cover} alt="album"></img>
    </Link>)}
    </div>
    )
}

export default Fetchalbums;
