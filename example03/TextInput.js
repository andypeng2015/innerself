import html from "../index";
import { connect } from "./store";

function TextInput({value}) {
    return html`
        <textarea id="text-input"
            placeholder="Type here…"
            onkeyup="dispatch('CHANGE_VALUE', this)">${value}</textarea>
    `;
}

export default connect(TextInput);
