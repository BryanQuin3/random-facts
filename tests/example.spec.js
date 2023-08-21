// @ts-check
import { test, expect } from "@playwright/test";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const LOCAL_HOST_URL = "http://localhost:5173/";
test("app shows random facts and image", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole("paragraph");
  const imgage = await page.getByRole("img");
  const textContent = await text.textContent();
  const imageSrc = await imgage.getAttribute("src");
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
