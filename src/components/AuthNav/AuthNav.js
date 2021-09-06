import React from "react";
import { NavLink } from "react-router-dom";
import S from "./AuthNav.module.css";

const styles = {
  activeLink: {
    color: "#ffffff",
    backgroundColor: "rgb(69, 103, 131)",
    borderColor: "rgb(52, 78, 99)",
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="./register"
        exact
        className={S.link}
        activeStyle={styles.activeLink}
      >
        Sing up
      </NavLink>

      <NavLink
        to="./login"
        exact
        className={S.link}
        activeStyle={styles.activeLink}
      >
        Sing in
      </NavLink>
    </div>
  );
}
