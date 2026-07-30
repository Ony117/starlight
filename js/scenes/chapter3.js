import { Chapter4 } from "./chapter4.js";
import { sceneManager } from "../app.js";

export class Chapter3 {

    constructor(container) {

        this.container = container;

        this.render();

    }

    render() {

        this.container.innerHTML = `

        <section class="memory-scene">

        <div class="floating-light light1"></div>

        <div class="floating-light light2"></div>

        <div class="vignette"></div>

            <div class="memory-overlay"></div>

            <img
                class="memory-photo"
                src="assets/img/memory1.jpg">

            <div class="story-card">

                <div class="story-text"></div>

                <button class="continue">

                    Seguir descubriendo

                </button>

            </div>

        </section>

        `;

        const photo = this.container.querySelector(".memory-photo");

        const card = this.container.querySelector(".story-card");

        const text = this.container.querySelector(".story-text");

        const button = this.container.querySelector(".continue");

        button.onclick = () => {

            sceneManager.change(Chapter4);

        };

        photo.classList.add("show");

        photo.addEventListener("click", () => {

            if (photo.classList.contains("zoom")) return;

            photo.classList.add("zoom");

            photo.style.transform = "scale(1.05) rotate(-1deg)";

            card.classList.add("show");

            this.typeWriter(

                text,

                `Algunas personas aparecen en una fotografía.

Otras aparecen en un recuerdo.

Pero hay muy pocas que consiguen quedarse para siempre en el corazón.

Gracias por convertir momentos comunes...

en recuerdos extraordinarios.`,

                () => {

                    button.classList.add("show");
                    button.animate(

                        [
                            {
                                transform: "scale(.8)",
                                opacity: 0
                            },

                            {
                                transform: "scale(1.08)",
                                opacity: 1
                            },

                            {
                                transform: "scale(1)",
                                opacity: 1
                            }

                        ],

                        {
                            duration: 700,
                            fill: "forwards"
                        }

                    );
                }

            );

        });

    }

    typeWriter(element, text, finish) {

        let i = 0;

        const timer = setInterval(() => {

            element.innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(timer);

                finish();

            }

        }, 28);

    }

}