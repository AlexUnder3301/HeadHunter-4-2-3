import "./App.css";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../shared/hooks/redux";
import { setParams, fetchVacancies } from "../shared/store/vacanciesSlice";
import VacancyCard from "../entities/VacansyCard/VacancyCard";
import { Pagination } from "@mantine/core";
import PageHeader from "../widgets/PageHeader/PageHeader";
import Search from "../features/Search/Search";
import CitySelect from "../features/CitySelect/CitySelect";
import SkillSet from "../features/SkillSet/SkillSet";
import mockData from "../shared/mockData";

function App() {
  const dispatch = useTypedDispatch();
  const { vacancies, isLoading, error, params, totalPages, page } =
    useTypedSelector((state) => state.vacancies);

  const handlePageChange = (newPage: number) => {
    const apiPage = newPage - 1;
    const newParams = { ...params, page: apiPage };

    if (newPage !== page + 1) {
      dispatch(setParams(newParams));
      dispatch(fetchVacancies(newParams));
    }
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    dispatch(fetchVacancies(params));
  }, [dispatch, params]);

  if (error) {
    return (
      <div>
        Возникла ошибка во время получения данных, перезагрузите страницу
      </div>
    );
  }

  return (
    <div>
      <PageHeader />
      <div className="body-container">
        <Search />
        <div className="content-container">
          <div className="filters-container">
            <SkillSet />
            <CitySelect />
          </div>
          <div className="vacancies-container">
            {isLoading
              ? mockData.map((item) => {
                  return <VacancyCard key={item.id} vacancy={item} isLoading />;
                })
              : vacancies.map((item) => {
                  return <VacancyCard key={item.id} vacancy={item} />;
                })}
            <Pagination
              value={page + 1}
              onChange={handlePageChange}
              total={totalPages}
              className="custom-pagination"
              withEdges
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
