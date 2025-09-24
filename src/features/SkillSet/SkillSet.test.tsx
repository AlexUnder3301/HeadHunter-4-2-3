import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import SkillSet from "./SkillSet";
import { TestProviders } from "../../test/test-provider";

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => vi.fn(),
  };
});

describe("SkillSet", () => {
  it("рендерит компонент навыков", () => {
    render(
      <TestProviders>
        <SkillSet />
      </TestProviders>
    );

    expect(screen.getByText("Ключевые навыки")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Навык")).toBeInTheDocument();
  });

  it("отображает существующие навыки", () => {
    render(
      <TestProviders
        preloadedState={{
          vacancies: {
            skills: ["React", "TypeScript"],
          },
        }}
      >
        <SkillSet />
      </TestProviders>
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("добавляет новый навык", async () => {
    await act(async () => {
      render(
        <TestProviders>
          <SkillSet />
        </TestProviders>
      );
    });

    const input = screen.getByPlaceholderText("Навык");

    await act(async () => {
      fireEvent.change(input, { target: { value: "Jest" } });
      fireEvent.keyUp(input, { key: "Enter", code: "Enter" });
    });
  });

  it("удаляет навык при клике на X", async () => {
    await act(async () => {
      render(
        <TestProviders
          preloadedState={{
            vacancies: {
              skills: ["React"],
            },
          }}
        >
          <SkillSet />
        </TestProviders>
      );
    });

    const removeButton = screen.getByText("X");

    await act(async () => {
      fireEvent.click(removeButton);
    });
  });

  it("очищает инпут после добавления навыка", async () => {
    await act(async () => {
      render(
        <TestProviders>
          <SkillSet />
        </TestProviders>
      );
    });

    const input = screen.getByPlaceholderText("Навык");

    await act(async () => {
      fireEvent.change(input, { target: { value: "CSS" } });
      fireEvent.keyUp(input, { key: "Enter", code: "Enter" });
    });

    expect(input).toHaveValue("");
  });
});
