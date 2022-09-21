import React from "react";
import styles from "./app.module.css";
import { Header } from "../header/header";

// const clever: string = require("../../images/flower.png").default;

function App() {
  return (
    <div>
      <Header />
      <main>
      <img
          src={require("../../images/flower.png")}
          alt="clever"
          className={styles.clever}
        />
        
        {/* <div className={styles.clever}></div> */}
      </main>
    </div>
  );
}

export default App;
