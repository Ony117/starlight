import { Chapter3 } from "./chapter3.js";

import { sceneManager } from "../app.js";

export class Chapter2 {

    constructor(container) {

        this.container = container;

        this.render();

    }

    render() {

        this.container.innerHTML = `

        <section class="chapter2">

            <h2>

                Una pequeña luz...

            </h2>

            <p>

                Hay luces que pasan desapercibidas...

                y hay otras que cambian el rumbo de una vida.

            </p>

            <div class="magic-star"></div>

            <div class="tip">

                Toca la estrella

            </div>

        </section>

        `;

        const star = this.container.querySelector(".magic-star");

        star.addEventListener("click", () => {

            star.classList.add("active");

            setTimeout(() => {

                document.body.style.background = "white";

            }, 250);

            setTimeout(() => {

                document.body.style.background = "";


                sceneManager.change(Chapter3);

            }, 1000);

        });

    }

}