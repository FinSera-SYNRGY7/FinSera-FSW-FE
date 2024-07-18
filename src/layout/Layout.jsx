import React, { Children } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import Back from "./Back";
import SumberRekening from "../components/SumberRekening";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="App">
      <Header />
      <main className="mx-5 my-5">{children}</main>
      <div className="card footer-card">
        <Footer />
      </div>
    </div>
  );
}
