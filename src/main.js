import { integrateParent, integrateStyle, deleteParent } from "@/featuries";

function startNewHandleUrl() {
  let currentUrl = "";

  const observer = new MutationObserver(() => {
    if (currentUrl === window.location.href) {
      return;
    }

    currentUrl = window.location.href;
    const [matches] = [...currentUrl.matchAll(/\/?(film|series)\/?([0-9]*)/gs)];

    deleteParent();
    switch (matches?.[1]) {
      case "film":
      case "series":
        return integrateParent();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

integrateStyle();
// startHandleUrl();
startNewHandleUrl();
