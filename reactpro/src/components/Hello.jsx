const name = "Rob";

function displayMessage() {
    return "Wow!";
}

function Hello({name, message}) {
    return (
        <div>
            <h1>
                {message} {name}
            </h1>
        </div>
    );
        
}

export default Hello;                 