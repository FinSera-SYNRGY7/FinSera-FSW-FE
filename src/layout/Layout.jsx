import Header from "./Header";
import style from "../assets/css/AccountMutation.module.css";
import createActivityDetector from 'activity-detector';
import Footer from "./Footer";

export default function Layout({ children, type, className }) {
  const activityDetector = createActivityDetector()
  
  const mainClass =
    className === "haveStyle"
      ? `${style.containerMutation} ${type === "necktie" ? `mt-0` : ""}`
      : "";
  
  return (
    <div className="App">
      <Header type={type} />
      <main className={mainClass} style={{minHeight: "100vh"}}>{children}</main>
      <div className="card footer-card">
        <Footer />
      </div>
    </div>
  );
}
