import { Chapter1 } from "./chapter1.js";
import { music } from "../app.js";

export class IntroScene {

    constructor(container) {

        this.container = container;

        this.messages = [

            "Hay personas que llegan a tu vida sin hacer ruido...",

            "Y poco a poco terminan iluminándolo todo.",

            "Hoy quiero regalarte unos minutos...",

            "Porque algunas historias merecen ser vividas...",

            "Y esta... comienza contigo."

        ];

        this.index = 0;

        this.render();

        this.createStars();

        this.startStory();

    }

    render() {

        this.container.innerHTML = `

        <section class="scene intro">

            <div class="sky">

                <div class="stars"></div>

                <div class="moon"></div>

            </div>

            <div class="content">

                <div class="quote"></div>

                <button class="begin">

                    Comenzar

                </button>

            </div>

        </section>

        `;

        this.quote = this.container.querySelector(".quote");

        this.button = this.container.querySelector(".begin");

        this.button.addEventListener("click", () => {

            music.play();
            this.container
                .querySelector(".intro")
                .classList.add("zoom");

            setTimeout(() => {

                new Chapter1(this.container);

            }, 2500);

        });

    }

    createStars() {

        const stars = this.container.querySelector(".stars");

        for (let i = 0; i < 220; i++) {

            const s = document.createElement("div");

            s.className = "star";

            s.style.left = Math.random() * 100 + "%";

            s.style.top = Math.random() * 100 + "%";

            s.style.animationDuration = (2 + Math.random() * 5) + "s";

            s.style.animationDelay = Math.random() * 5 + "s";

            s.style.opacity = Math.random();

            stars.appendChild(s);

        }

    }

    startStory() {

        this.showMessage();

    }

    showMessage() {

        if (this.index >= this.messages.length) {

            this.button.classList.add("show");

            return;

        }

        this.quote.classList.remove("show");

        setTimeout(() => {

            this.quote.innerHTML = this.messages[this.index];

            this.quote.classList.add("show");

            this.index++;

            setTimeout(() => {

                this.showMessage();

            }, 3000);

        }, 1000);

    }

}