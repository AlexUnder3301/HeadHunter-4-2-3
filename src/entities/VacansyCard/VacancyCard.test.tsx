import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import VacancyCard from "./VacancyCard";
import { TestProviders } from "../../test/test-provider";

const mockVacancy = {
  id: "Test id",
  employerName: "Test Company",
  name: "Frontend Developer",
  experience: "between1And3",
  salary: { from: 100000, to: 200000 },
  workFormat: "REMOTE",
  area: "Moscow",
  requirement: "Test requirement",
  responsibility: "Test responsibility",
};

describe("VacancyCard", () => {
  it("рендерит информацию о вакансии", () => {
    render(
      <TestProviders>
        <VacancyCard vacancy={mockVacancy} />
      </TestProviders>
    );

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("100000 - 200000 ₽")).toBeInTheDocument();
    expect(screen.getByText("Опыт 1 - 3 года")).toBeInTheDocument();
    expect(screen.getByText("Можно удаленно")).toBeInTheDocument();
    expect(screen.getByText("Moscow")).toBeInTheDocument();
  });

  it('показывает зарплату "от" когда нет верхней границы', () => {
    const vacancyWithoutTo = {
      ...mockVacancy,
      salary: { from: 100000, to: null },
    };

    render(
      <TestProviders>
        <VacancyCard vacancy={vacancyWithoutTo} />
      </TestProviders>
    );

    expect(screen.getByText("От 100000 ₽")).toBeInTheDocument();
  });

  it('показывает "Зарплата не указана" когда зарплата не указана', () => {
    const vacancyWithoutSalary = {
      ...mockVacancy,
      salary: { from: null, to: null },
    };

    render(
      <TestProviders>
        <VacancyCard vacancy={vacancyWithoutSalary} />
      </TestProviders>
    );

    expect(screen.getByText("Зарплата не указана")).toBeInTheDocument();
  });

  it("показывает состояние загрузки", () => {
    render(
      <TestProviders>
        <VacancyCard vacancy={mockVacancy} isLoading={true} />
      </TestProviders>
    );

    const card = screen.getByTestId("vacancy-card");
    expect(card).toBeInTheDocument();
  });
});
