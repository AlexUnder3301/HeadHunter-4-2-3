import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from "../shared/store/vacanciesSlice";
import { vi } from "vitest";

// Mock для matchMedia если еще не определен
if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

interface TestProvidersProps {
  children: ReactNode;
  preloadedState?: any;
}

export const TestProviders = ({
  children,
  preloadedState = {},
}: TestProvidersProps) => {
  // Полный initialState по умолчанию
  const defaultState = {
    params: {
      industry: 7,
      professional_role: 96,
      per_page: 10,
      area: 113,
      text: "Frontend OR TypeScript OR Redux OR React",
      page: 0,
    },
    vacancies: [], // ← гарантируем что это массив
    totalPages: 1,
    page: 0,
    isLoading: false,
    error: null,
    skills: ["TypeScript", "React", "Redux"],
    search: "Frontend",
  };

  // Безопасное объединение состояний
  const safePreloadedState = {
    vacancies: {
      ...defaultState,
      ...preloadedState.vacancies,
      // Гарантируем что vacancies всегда массив
      vacancies: Array.isArray(preloadedState.vacancies?.vacancies)
        ? preloadedState.vacancies.vacancies
        : defaultState.vacancies,
      // Гарантируем что params всегда объект
      params: preloadedState.vacancies?.params || defaultState.params,
    },
  };

  const store = configureStore({
    reducer: {
      vacancies: vacanciesReducer,
    },
    preloadedState: safePreloadedState,
  });

  return (
    <MantineProvider>
      <Provider store={store}>{children}</Provider>
    </MantineProvider>
  );
};
