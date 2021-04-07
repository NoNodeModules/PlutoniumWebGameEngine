export class PlutoniumEngine {
    constructor() {
        this._count = 0;
        // * Start method when game start
        this.start = () => {
            this.update();
        };
        // * Loop method update game
        this.update = () => {
            this._count++;
            document.title = this._count.toString();
            //*Call this instance update
            requestAnimationFrame(this.update.bind(this));
        };
        console.log("a instance of engine is created");
    }
}
