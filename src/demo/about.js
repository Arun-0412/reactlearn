import React from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [goToCareer, setGoToCareer] = React.useState(false);

  if (goToCareer) {
    return <Navigate to="/career" />;
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => { setGoToCareer(true); }} >Go to the career page</button>
    </div>
  );
}

export default About;