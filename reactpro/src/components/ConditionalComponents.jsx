import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    let message;
    const display = true;
    message = display ? <h1>This is message1</h1> : <h1>This is message2</h1>;

    return message;
}