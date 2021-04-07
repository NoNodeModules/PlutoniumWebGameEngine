import {PlutoniumEngine} from "./src/Engine.js"

// * Aplication Entry point
window.onload = () =>{

    let GameEngine = new PlutoniumEngine();
    GameEngine.start();
    document.body.innerHTML += "FOO";
}