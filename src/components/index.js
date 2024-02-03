export function createHref(url, child = null) {
  const link = document.createElement("a");
  link.className = "custom-link";
  link.href = url;
  link.target = "_blank";
  if (child) {
    link.appendChild(child);
  }
  return link;
}

export function createButton(name) {
  const button = document.createElement("button");
  button.className = "custom-button";
  button.innerText = name;
  return button;
}

export function createStyle() {
  const style = document.createElement("style");
  style.textContent = `
    div.custom-parent {
        position: fixed;
        z-index: 1;
        top: 0em;
        left: 2em;
        bottom: 0px;
        display: flex;
        flex-diraction: column;
        gap: 5px;
    }
    a.custom-link {
        z-index: 1;
        top: 7em;
        position: sticky;
        font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
        cursor: pointer;
    } 
    button.custom-button {
        cursor: pointer;
        font-weight: bold;
        --b: 3px;   /* border thickness */
        --s: .45em; /* size of the corner */
        --color: #373B44;
        
        padding: calc(.5em + var(--s)) calc(.9em + var(--s));
        color: var(--color);
        --_p: var(--s);
        background:
          conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
          var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
        transition: .3s linear, color 0s, background-color 0s;
        outline: var(--b) solid #0000;
        outline-offset: .6em;
        font-size: 16px;
      
        border: 0;
      
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
      
      button.custom-button:hover,
      button.custom-button:focus-visible{
        --_p: 0px;
        outline-color: var(--color);
        outline-offset: .05em;
      }
      
      button.custom-button:active {
        background: var(--color);
        color: #fff;
      }
    `;
  return style;
}
