import { Chapter2 } from "./chapter2.js";
import { sceneManager } from "../app.js";

export class Chapter1 {

    constructor(container) {

        this.container = container;

        this.render();

    }

    render() {

        this.container.innerHTML = `

        <section class="chapter">

            <h2>

                Mi casulidad hermosa

            </h2>

            <p>

                Entre millones de personas...

                entre miles de caminos...

                entre infinitas casualidades...

                ocurrió la única que realmente importaba.

                Tú.

            </p>

            <button class="next">

                Continuar

            </button>

        </section>

        `;

        this.container
            .querySelector(".next")
            .addEventListener("click", () => {

                sceneManager.change(Chapter2);

            });
    }

}