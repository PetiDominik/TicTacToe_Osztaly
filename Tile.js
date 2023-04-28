
class Tile {
    #value;
    #parentElement;
    #htmlElement;
    #id;

    constructor(parentElement, id) {
        this.#parentElement = parentElement;
        this.#value = null;
        this.#id = id;
        
        this.#parentElement.append(`
            <div class="field"></div>
        `);
        this.#htmlElement = parentElement.children("div:last-child");

        this.#htmlElement.on("click", () => {
            this.clickTrigger();
            //this.setValue('o');
        });
        
    }

    setValue(value) {
        if (value === 0) {
            value = 'x';
        }else if (value === 1) {
            value = 'o';
        } else {
            return;
        }
        this.#value = value;
        this.#setImage();
        return true;
    }

    #setImage() {
        this.#htmlElement.css("background", `url("imgs/${this.#value}.png")`);
        this.#htmlElement.css("background-size", "cover");
        this.#htmlElement.css("background-position", "center");
    }

    getValue() {
        return this.#value;
    }

    clickTrigger() {
        const EVENT = new CustomEvent("TileClick",{
            detail: this,
        });
        window.dispatchEvent(EVENT);
    }
}

export default Tile;