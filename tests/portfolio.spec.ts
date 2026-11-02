import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
const qa = "/tmp/jack-qa";
test.beforeAll(async () => {
  await mkdir(qa, { recursive: true });
});
test("desktop navigation, project carousel, previews and case study", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await expect(page.locator(".navbar")).toHaveCSS("opacity", "1");
  await page.screenshot({ path: `${qa}/desktop-hero-final.png` });
  await page.getByRole("link", { name: "About", exact: true }).first().click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator(".about-copy")).toHaveCSS("opacity", "1");
  await expect(page.locator(".about-view")).toHaveCSS("opacity", "1");
  await page.screenshot({ path: `${qa}/desktop-about-final.png` });
  await page.getByText("More about me", { exact: true }).click();
  await expect(page.locator("details")).toHaveAttribute("open", "");
  await page.getByText("More about me", { exact: true }).click();
  for (const id of ["services", "skills", "projects", "process", "contact"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(850);
    await page.screenshot({ path: `${qa}/desktop-${id}.png` });
  }
  await page.locator(".code-showcase").scrollIntoViewIfNeeded();
  await page.waitForTimeout(850);
  await page.screenshot({ path: `${qa}/desktop-code.png` });
  await page.getByRole("button", { name: "Next project", exact: true }).click();
  await expect(page.locator(".project-meta h3")).toHaveText("FORM Commerce");
  await page.locator(".project-carousel").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".project-meta h3")).toHaveText("Studio Orbit");
  await page.getByRole("button", { name: "03 / Compact", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "03 / Compact", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("button", { name: "Previous project", exact: true })
    .click();
  await page.getByRole("link", { name: "View case study" }).click();
  await expect(page).toHaveURL(/\/projects\/form-commerce/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "FORM Commerce",
  );
  await expect(page.getByText("Concept scope", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: /Next project Studio Orbit/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Studio Orbit",
  );
  await page.goto("/projects/nexora-saas");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Nexora SaaS",
  );
  await page.screenshot({ path: `${qa}/case-study.png`, fullPage: true });
  const response = await page.goto("/projects/unknown-project");
  expect(response?.status()).toBe(404);
  // The expected 404 request itself can log a resource error.
  expect(errors.filter((e) => !e.includes("404"))).toEqual([]);
});
test("responsive layout, mobile menu, touch carousel and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator(".navbar")).toHaveCSS("opacity", "1");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator(".hero-view")
        .evaluate((e) => getComputedStyle(e).opacity),
    ).toBe("1");
    if (width === 390) {
      await page.screenshot({ path: `${qa}/mobile-hero-final.png` });
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(
        page.getByRole("button", { name: "Close menu" }),
      ).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open menu" }),
      ).toBeFocused();
      await page.getByRole("button", { name: "Open menu" }).click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Projects" })
        .click();
      await expect(page).toHaveURL(/#projects$/);
      await expect(
        page.getByRole("button", { name: "Open menu" }),
      ).toHaveAttribute("aria-expanded", "false");
      await page.locator(".project-stage").evaluate((element) => {
        const start = new Touch({
          identifier: 1,
          target: element,
          clientX: 300,
          clientY: 150,
        });
        const end = new Touch({
          identifier: 1,
          target: element,
          clientX: 100,
          clientY: 150,
        });
        element.dispatchEvent(
          new TouchEvent("touchstart", { bubbles: true, touches: [start] }),
        );
        element.dispatchEvent(
          new TouchEvent("touchend", { bubbles: true, changedTouches: [end] }),
        );
      });
      await expect(page.locator(".project-meta h3")).toHaveText(
        "FORM Commerce",
      );
      for (const id of [
        "about",
        "services",
        "skills",
        "projects",
        "process",
        "contact",
      ]) {
        await page.locator(`#${id}`).scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);
        await page.screenshot({ path: `${qa}/mobile-${id}.png` });
      }
      await page.screenshot({
        path: `${qa}/mobile-full-final.png`,
        fullPage: true,
      });
    }
  }
});
test("WCAG AA accessibility, real contact destination and images", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const section of await page.locator("main section").all()) {
    await section.scrollIntoViewIfNeeded();
  }
  await page.waitForTimeout(500);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  console.log(
    JSON.stringify(
      results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
      null,
      2,
    ),
  );
  expect(results.violations).toEqual([]);
  await expect(page.locator("#contact a.button")).toHaveAttribute(
    "href",
    "https://github.com/badhan009",
  );
  await page.locator("img").evaluateAll((images) =>
    images.forEach((image) => {
      if (image instanceof HTMLImageElement) image.loading = "eager";
    }),
  );
  await expect
    .poll(async () =>
      page.locator("img").evaluateAll((images) =>
        images
          .filter(
            (image): image is HTMLImageElement =>
              image instanceof HTMLImageElement,
          )
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
      ),
    )
    .toEqual([]);
});
test("missing character artwork retains readable content and usable navigation", async ({
  page,
}) => {
  await page.route(/\/_next\/image\?.*character/, (route) => route.abort());
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("JACK");
  await page.getByRole("link", { name: "View projects", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator(".project-meta h3")).toHaveText("Nexora SaaS");
});
