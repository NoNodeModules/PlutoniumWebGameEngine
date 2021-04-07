export class PlutoniumEngine {

    
    // * A instance of Engine is created
    public constructor() {}

    // * Start method when game start
    public start = (): void => {

        this.update();
    }

    // * Loop method update game
    private update = (): void => {

        
        //*Call this instance update
        requestAnimationFrame(this.update.bind( this ))
    }
}