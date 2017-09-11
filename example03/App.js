import html from "../index";
import { connect } from "./store";

import TextInput from "./TextInput";
import CharCounter from "./CharCounter";

export default function App(tasks) {
    return html`
        ${TextInput()}
        ${CharCounter()}
    `;
}
