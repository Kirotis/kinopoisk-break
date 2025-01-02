import { createStyle } from "@/components";
import { createGGHref } from "./createGGHref";
import { createTorrentHref } from "./createTorrentHref";

export function createParent() {
  const btnGroup = document.createElement("div");
  btnGroup.className = "custom-group";
  btnGroup.appendChild(createGGHref());
  btnGroup.appendChild(createTorrentHref());

  const parent = document.createElement("div");
  parent.className = "custom-parent";
  parent.appendChild(btnGroup);

  return parent;
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
