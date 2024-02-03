import { createButton, createHref } from "@/components";
import { filmFilterIds, serialFilterIds } from "@/lib";

export function createTorrentHref() {
  const query = new URLSearchParams({
    nm: getFilmName(),
    f: getFilterIdsFromUrl(),
  });
  const url = `https://rutracker.org/forum/tracker.php?${query.toString()}`;

  return createHref(url.toString(), createButton("To Download"));
}

function getFilmName() {
  const script = document.querySelector("#__next > script");
  if (!script || script.type !== "application/ld+json") {
    return "";
  }
  const { alternateName, name } = JSON.parse(script.innerHTML);
  return alternateName ?? name;
}

function getFilterIdsFromUrl() {
  if (window.location.href.includes("/film/")) {
    return filmFilterIds;
  }
  if (window.location.href.includes("/series/")) {
    return serialFilterIds;
  }
  return "";
}
