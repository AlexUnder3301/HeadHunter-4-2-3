import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { TestProviders } from "../test/test-provider";

vi.mock("ky", () => ({
  get: vi.fn(() => ({
    json: vi.fn(() =>
      Promise.resolve({
        items: [],
        page: 1,
        pages: 1,
      })
    ),
  })),
}));

Object.defineProperty(window, "scrollTo", {
  value: vi.fn(),
  writable: true,
});

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("рендерится", () => {
    render(
      <TestProviders>
        <App />
      </TestProviders>
    );

    expect(screen.getByText("Список вакансий")).toBeInTheDocument();
    expect(
      screen.getByText("по профессии Frontend-разработчик")
    ).toBeInTheDocument();
  });

  it("рендерит все основные компоненты", () => {
    render(
      <TestProviders>
        <App />
      </TestProviders>
    );

    expect(screen.getByText("Список вакансий")).toBeInTheDocument();
    expect(screen.getByText("Ключевые навыки")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Должность или название компании")
    ).toBeInTheDocument();
    expect(screen.getByText("Все города")).toBeInTheDocument();
  });

  it("показывает сообщение об ошибке когда есть ошибка", async () => {
    await act(async () => {
      render(
        <TestProviders
          preloadedState={{
            vacancies: {
              error: "Network error",
              vacancies: [],
              isLoading: false,
            },
          }}
        >
          <App />
        </TestProviders>
      );
    });

    expect(
      screen.getByText(
        /Возникла ошибка во время получения данных, перезагрузите страницу/
      )
    ).toBeInTheDocument();
  });
});
