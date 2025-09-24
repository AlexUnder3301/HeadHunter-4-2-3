import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { TestProviders } from "../../test/test-provider";

describe("Search", () => {
  it("рендерит компонент с заголовком и описанием", () => {
    render(
      <TestProviders>
        <Search />
      </TestProviders>
    );

    expect(screen.getByText("Список вакансий")).toBeInTheDocument();
    expect(
      screen.getByText("по профессии Frontend-разработчик")
    ).toBeInTheDocument();
  });

  it("отображает все элементы формы поиска", () => {
    render(
      <TestProviders>
        <Search />
      </TestProviders>
    );

    expect(
      screen.getByPlaceholderText("Должность или название компании")
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Найти" })).toBeInTheDocument();
  });

  it("обновляет значение input при вводе текста", () => {
    render(
      <TestProviders>
        <Search />
      </TestProviders>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "React developer" } });

    expect(input).toHaveValue("React developer");
  });
});
