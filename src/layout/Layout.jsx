import React, { Children } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import Back from "./Back";
import SumberRekening from "@/components/sumberrekening/SumberRekening";
import style from "../assets/css/AccountMutation.module.css";
import Footer from "./Footer";

export default function Layout({ children, type, className }) {
  const mainClass =
    className === "haveStyle"
      ? `${style.containerMutation} ${type === "necktie" ? `mt-0` : ""}`
      : "";

  return (
    <div className="App">
      <Header type={type} />
      <main className={mainClass}>{children}</main>
      <div className="card footer-card">
        <Footer />
      </div>
    </div>
  );
}
