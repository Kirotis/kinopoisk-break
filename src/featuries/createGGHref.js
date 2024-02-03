import { createButton, createHref } from "@/components";

export function createGGHref() {
  const url = window.location.href.replace("kino", "gg");
  return createHref(url, createButton("To GG View"));
}
