import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("рендерит хедер с логотипом и навигацией", () => {
    render(<PageHeader />);

    expect(screen.getByText(".FrontEnd")).toBeInTheDocument();
    expect(screen.getByText("Вакансии FE")).toBeInTheDocument();
    expect(screen.getByText("Обо мне")).toBeInTheDocument();
  });

  it("содержит логотип", () => {
    render(<PageHeader />);

    const logo = document.querySelector("svg");
    expect(logo).toBeInTheDocument();
  });
});
