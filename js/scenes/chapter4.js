import { startEffects } from "../effects.js";
import { relationshipCounter } from "../counter.js";
import { Chapter5 } from "./chapter5.js";
import { sceneManager } from "../app.js";

export class Chapter4 {

    constructor(container) {

        this.container = container;

        this.photos = [

            {
                image: "assets/img/memory1.jpg",
                title: "Todo comenzó",
                text: "Aquí irá una historia bonita."
            },

            {
                image: "assets/img/memory2.jpg",
                title: "Una aventura",
                text: "Otro recuerdo especial."
            },

            {
                image: "assets/img/memory3.jpg",
                title: "Un recuerdo",
                text: "Hay aventuras que nunca se olvidan."
            },

            {
                image: "assets/img/memory4.jpg",
                title: "Nuestros momentos",
                text: "Cada lugar contigo tiene algo especial."
            },

            {
                image: "assets/img/memory5.jpg",
                title: "Hoy",
                text: "Y todavía seguimos escribiendo esta historia."
            }

        ];

        this.render();

    }

    render() {

        this.container.innerHTML = `

        <section class="gallery-scene">

            <h1 class="gallery-title">

                Nuestros recuerdos

            </h1>
            <div class="days">

                ${relationshipCounter("2024-01-01")} días contigo ❤️

            </div>

            <div class="gallery"></div>

            <div class="viewer hidden">

                <div class="viewer-content">

                    <img>

                    <h2></h2>

                    <p></p>

                    <div class="viewer-buttons">

                        <button class="close">Cerrar</button>

                        <button class="next hidden">
                            Continuar
                        </button>

                    </div>

                </div>

            </div>

        </section>

        `;

        const gallery = this.container.querySelector(".gallery");


        this.photos.forEach((photo, index) => {


            const card = document.createElement("div");
            card.className = "photo-card";

            card.innerHTML = `
        <img src="${photo.image}">
    `;

            card.onclick = () => this.open(photo);

            gallery.appendChild(card);

        });


        startEffects(
            this.container.querySelector(".gallery-scene")
        );

    }

    open(photo) {
        const viewer = this.container.querySelector(".viewer");



        const img = viewer.querySelector("img");
        const title = viewer.querySelector("h2");
        const text = viewer.querySelector("p");


        const close = viewer.querySelector(".close");
        const next = viewer.querySelector(".next");

        viewer.classList.remove("hidden");

        img.src = photo.image;
        title.textContent = photo.title;
        text.textContent = photo.text;

        next.classList.remove("hidden");

        close.onclick = () => {

            viewer.classList.add("hidden");

        };

        next.onclick = () => {

            sceneManager.change(Chapter5);

        };

    }


}