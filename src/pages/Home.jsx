import React, { useContext } from "react";
import { AuthContextData } from "../context/AuthContext";

const Home = () => {
  const data = useContext(AuthContextData);
  console.log(data);

  return <div>HOme</div>;
};

export default Home;
