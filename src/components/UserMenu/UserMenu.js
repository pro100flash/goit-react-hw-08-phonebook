import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import S from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={S.container}>
      <span className> Hello, {name}!</span>
      <button
        className={S.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sing out
      </button>
    </div>
  );
}
