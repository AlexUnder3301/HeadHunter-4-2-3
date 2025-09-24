import styles from "./style.module.scss";
import Logo from "../../shared/assets/logo.svg?react";
import ProfileLogo from "../../shared/assets/profile-logo.svg?react";

const PageHeader = () => {
  return (
    <header className={styles["page-header"]}>
      <div className={styles["logo-container"]}>
        <Logo className={styles["logo-img"]} />
        <span className={styles["logo-text"]}>.FrontEnd</span>
      </div>
      <div className={styles["vacancies"]}>
        <span className={styles["vacancies-text"]}>Вакансии FE</span>
        <div className={styles["vacancies-dot"]}></div>
      </div>
      <div className={styles["profile"]}>
        <ProfileLogo className={styles["profile-logo"]} />
        <span className={styles["profile-text"]}>Обо мне</span>
      </div>
    </header>
  );
};

export default PageHeader;
