import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import S from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={S.link}
        activeStyle={{ color: "#dc143c" }}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={S.link}
          activeStyle={{ color: "#dc143c" }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
