import { integrateParent, integrateStyle, deleteParent } from "@/featuries";

function startHandleUrl() {
  setInterval(() => {
    if (window.location.href === currentUrl) {
      return;
    }
    currentUrl = window.location.href;
    const continueHandle =
      currentUrl.search("/film/") >= 0 || currentUrl.search("/series/") >= 0;
    if (continueHandle) {
      return integrateParent();
    }
    deleteParent();
  }, 1_000);
}

let currentUrl;

integrateStyle();
startHandleUrl();
