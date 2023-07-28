import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <section className="container-app border">
        <Header></Header>
        <Profile></Profile>
        <Image></Image>
      </section>
    </>
  );
}

export default App;
