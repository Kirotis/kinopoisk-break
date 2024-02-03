import { createStyle } from "@/components";
import { createGGHref } from "./createGGHref";
import { createTorrentHref } from "./createTorrentHref";

export function createParent() {
  const div = document.createElement("div");
  div.className = "custom-parent";
  div.appendChild(createGGHref());
  div.appendChild(createTorrentHref());
  return div;
}

export function integrateParent() {
  const button = createParent();
  (document.body || document.documentElement).appendChild(button);
}

export function integrateStyle() {
  const style = createStyle();
  document.head.appendChild(style);
}

export function deleteParent() {
  const div = document.querySelector(".custom-parent");
  if (div) {
    document.body.removeChild(div);
  }
}
