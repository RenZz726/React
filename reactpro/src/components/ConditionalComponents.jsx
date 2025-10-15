import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    const display = true;
    if(display) {
        return <Code />
    }
    else
        return <Welcome />
}