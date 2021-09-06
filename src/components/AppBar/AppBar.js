import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { authSelectors } from "redux/auth";
import S from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={S.header_bar}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}