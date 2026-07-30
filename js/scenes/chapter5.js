import { Chapter6 } from "./chapter6.js";

export class Chapter5 {

    constructor(container) {

        this.container = container;

        this.render();

    }

    render() {

        this.container.innerHTML = `

        <section class="letter-scene">

            <div class="table-light"></div>

            <div class="envelope">

                <button class="gift-button hidden">
                    🎁 Abrir mi último regalo
                </button>
                
                <div class="flap"></div>

                <div class="letter">

                    <div class="letter-content"></div>
                </div>


            </div>

            <div class="hint">

                Toca el sobre

            </div>

        </section>

        `;

        this.start();

    }

    start() {

        const envelope = this.container.querySelector(".envelope");

        const flap = this.container.querySelector(".flap");

        const letter = this.container.querySelector(".letter");

        const content = this.container.querySelector(".letter-content");

        const hint = this.container.querySelector(".hint");

        envelope.onclick = () => {

            hint.remove();

            flap.classList.add("open");

            letter.classList.add("show");

            setTimeout(() => {

                this.write(

                    content,

                    `Hola, Mi princesa hermosa.

Si estás leyendo esto, significa que llegaste hasta el final del pequeño universo que preparé para ti.

Ninguna fotografía, ninguna canción y ninguna palabra pueden resumir todo lo que significas para mí.

Solo quería regalarte unos minutos diferentes, unos minutos donde pudieras sentir lo importante que eres para mí.

Gracias por cada risa.

Gracias por cada abrazo.

Gracias por estar incluso en los días difíciles.

Esto es solo un pequeño recuerdo de todos los momentos increíbles que pasamos y aún nos quedan por vivir.

Prometo seguir escribiendo esta historia contigo, un día a la vez.

Te amo muchísimo, mi princesa hermosa. ❤️`,

                    () => {

                        this.enableGift();

                    });

            }, 1200);

        };

    }

    write(element, text, finish) {

        let i = 0;

        const timer = setInterval(() => {

            element.innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(timer);

                finish();

            }

        }, 25);

    }

    enableGift() {

        const content = this.container.querySelector(".letter-content");

        const btn = this.container.querySelector(".gift-button");

        btn.onclick = () => {

            new Chapter6(this.container);

        };

        const showButton = () => {

            const reachedBottom =
                content.scrollTop + content.clientHeight >= content.scrollHeight - 10;

            if (reachedBottom) {

                btn.classList.remove("hidden");

                requestAnimationFrame(() => {

                    btn.classList.add("show");

                });

                content.removeEventListener("scroll", showButton);

            }

        };

        content.addEventListener("scroll", showButton);

        showButton();

    }

}