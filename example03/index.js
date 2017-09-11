import { attach } from "./store";
import App from "./App";

const root = document.querySelector("#root");
root.addEventListener("render", function(event) {
    // event.detail is the state that was rendered.
    const { id, selectionStart, selectionEnd } = event.detail;
    if (id) {
        const textarea = root.querySelector("#" + id);
        textarea.focus();
        textarea.setSelectionRange(selectionStart, selectionEnd);
    }
});

attach(App, root);


