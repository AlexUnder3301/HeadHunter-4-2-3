import styles from "./style.module.scss";
import { setParams } from "../../shared/store/vacanciesSlice";
import { useTypedDispatch } from "../../shared/hooks/redux";
import LocationIcon from "../../shared/assets/location-icon.svg?react";

const CitySelect = () => {
  const dispatch = useTypedDispatch();

  return (
    <div className={styles["select-container"]}>
      <LocationIcon className={styles["location-icon"]} />
      <select
        name="Выбор города"
        id=""
        onChange={(e) => {
          dispatch(setParams({ area: e.target.value, page: 0 }));
        }}
        className={styles["custom-select"]}
      >
        <option value="113">Все города</option>
        <option value="1">Москва</option>
        <option value="2">Санкт-Петербург</option>
      </select>
    </div>
  );
};

export default CitySelect;
