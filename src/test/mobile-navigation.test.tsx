import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Hero } from "@/components/site/hero";
import { LangProvider } from "@/components/site/i18n";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("Mobile navigation", () => {
  it("opens in the selected language and closes after choosing a section", () => {
    render(
      <LangProvider>
        <Hero />
      </LangProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "EN" }));
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const menu = document.getElementById("mobile-navigation");
    expect(menu).toBeVisible();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(within(menu!).getAllByRole("link")).toHaveLength(5);

    fireEvent.click(within(menu!).getByRole("link", { name: "Work" }));
    expect(menu).not.toBeVisible();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("closes when Escape is pressed", () => {
    render(
      <LangProvider>
        <Hero />
      </LangProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "मेनू उघडा" }));
    fireEvent.keyDown(screen.getByRole("button", { name: "मेनू बंद करा" }), { key: "Escape" });

    expect(document.getElementById("mobile-navigation")).not.toBeVisible();
  });
});
