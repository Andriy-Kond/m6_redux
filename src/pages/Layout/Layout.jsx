import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <main className={css.container}>
      <h2>Layout</h2>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Layout</Link>
        <Link to="tasks">Tasks</Link>
        <Link to="tests">Tests</Link>
      </nav>
      <Outlet />
    </main>
  );
};
