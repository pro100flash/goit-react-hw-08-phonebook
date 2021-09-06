import React from "react";
import S from "./Container.module.css";

const Container = ({ children }) => (
  <div className={S.container}>{children}</div>
);

export default Container;
