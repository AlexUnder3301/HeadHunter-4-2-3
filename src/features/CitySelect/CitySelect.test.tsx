import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CitySelect from "./CitySelect";
import { TestProviders } from "../../test/test-provider";

describe("CitySelect", () => {
  it("рендерит компонент", () => {
    render(
      <TestProviders>
        <CitySelect />
      </TestProviders>
    );

    expect(screen.getByText("Все города")).toBeInTheDocument();
  });

  it("отображает все опции городов", () => {
    render(
      <TestProviders>
        <CitySelect />
      </TestProviders>
    );

    expect(screen.getByText("Все города")).toBeInTheDocument();
    expect(screen.getByText("Москва")).toBeInTheDocument();
    expect(screen.getByText("Санкт-Петербург")).toBeInTheDocument();
  });

  it("меняет город", () => {
    render(
      <TestProviders>
        <CitySelect />
      </TestProviders>
    );

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "1" } });

    expect(select).toHaveValue("1");
  });
});
