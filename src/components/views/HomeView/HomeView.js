import S from "./HomeView.module.css";

export default function HomeView() {
  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>
        Welcome to the best app for storing your contacts!
      </h1>
    </div>
  );
}
