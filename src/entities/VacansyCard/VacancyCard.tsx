import classNames from "classnames";
import styles from "./style.module.scss";
import { Button } from "@mantine/core";
import type { VacancyType } from "../../shared/types";

interface VacancyCardType {
  vacancy: VacancyType;
  isLoading?: boolean;
}

const VacancyCard = ({
  vacancy: { employerName, name, experience, workFormat, area, salary },
  isLoading,
}: VacancyCardType) => {
  const experienceMap: Record<string, string> = {
    noExperience: "Без опыта",
    between1And3: "Опыт 1 - 3 года",
    between3And6: "Опыт 3 - 6 лет",
    moreThan6: "Опыт более 6 лет",
  };

  const workFormatMap: Record<string, string> = {
    ON_SITE: "Офис",
    REMOTE: "Можно удаленно",
    HYBRID: "Гибрид",
  };

  if (isLoading) {
    return (
      <div
        className={classNames(styles["vacancy-card"], styles["loading"])}
      ></div>
    );
  }

  return (
    <div className={styles["vacancy-card"]}>
      <h3 className={styles["vacancy-card-heading"]}>{name}</h3>
      <div className={styles["salary-container"]}>
        {salary.from ? (
          salary.to ? (
            <span className={styles["salary"]}>
              {`${salary.from} - ${salary.to} ₽`}
            </span>
          ) : (
            <span className={styles["salary"]}>{`От ${salary.from} ₽`}</span>
          )
        ) : (
          <span className={styles["salary"]}>Зарплата не указана</span>
        )}
        <span className={styles["experience"]}>
          {experienceMap[experience] || "Не указано"}
        </span>
      </div>
      <div className={styles["employer-name"]}>{employerName}</div>
      <div className={classNames(styles["work-format"], styles[workFormat])}>
        {workFormatMap[workFormat] || "Не указано"}
      </div>
      <span className={styles["city"]}>{area}</span>
      <div className={styles["buttons-container"]}>
        <Button className={styles["vacancy-button"]}>Смотреть вакансию</Button>
        <Button className={styles["response-button"]}>Откликнуться</Button>
      </div>
    </div>
  );
};

export default VacancyCard;
