import React from "react";
import { useParams } from "react-router-dom";

const Album = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Album -= {name}</h1>
    </div>
  );
};

export default Album;
