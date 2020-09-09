import React from "react";
import Products from "./Products";
import "./styles.css";

const formatName = (user) => {
  return user.firtsName + " " + user.lastName;
};

export default function App() {
  const user = {
    firtsName: "Senocax",
    lastName: "dev",
    imgURL: "https://smartcouponspro.com/img/upload/buyer-persona-image2.png"
  };

  return (
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
      <img width="200" height="200" src={user.imgURL} />
      <Products />
    </div>
  );
}
