import React from "react";
import Routes from "./routes";

export const App = () => {
  //   console.log(process.env.API);
  return (
    <>
      <nav className="logo">Logo</nav>
      <div className="container">
        <Routes />
      </div>
    </>
  );
};
export default App;
