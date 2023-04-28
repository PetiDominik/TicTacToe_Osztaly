import Tile from "./Tile.js";

class Game {
    constructor() {
        let currentPlayer = 0;
        const GAME_DIV = $("#game");
        
        for (let index = 0; index < 9; index++) {
            const TILE = new Tile(GAME_DIV, index);
        }

        $(window).on("TileClick", (event) => {
            const TILE = event.detail;
            TILE.setValue(currentPlayer)
            currentPlayer = currentPlayer == 0 ? 1 : 0;
        })
    }
}

export default Game;