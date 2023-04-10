import React from "react";
import {  useNavigate } from "react-router-dom";

function Career() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Career</h1>
      <button onClick={() => navigate("/Contact") } >Go to the Contact page</button>
    </div>
  );
}

export default Career;