export class Chapter6 {

    constructor(container){

        this.container = container;

        this.render();

    }

    render(){

        this.container.innerHTML = `

        <section class="gift-scene">

            <div class="gift-box">

                <div class="gift-lid"></div>

                <div class="gift-body"></div>

                <div class="gift-ribbon-v"></div>

                <div class="gift-ribbon-h"></div>

            </div>

            <h2 class="gift-text">

                Tengo un último regalo para ti...

            </h2>

            <div class="tap-text">

                Toca la caja

            </div>

        </section>

        `;

        this.events();

    }

    events(){

        const box=this.container.querySelector(".gift-box");

        const lid=this.container.querySelector(".gift-lid");

        box.onclick=()=>{

            lid.classList.add("open");

            setTimeout(()=>{

                this.finish();

            },1200);

        };

    }

    finish(){

        this.container.innerHTML=`

        <section class="ending">

            <div class="heart">

                ❤️

            </div>

            <h1>

                Gracias por ser parte de mi universo.

            </h1>

            <p>

                Este regalo termina aquí...

                pero nuestra historia apenas continúa.

            </p>

            <button class="restart">

                Volver a vivirlo

            </button>

        </section>

        `;

        this.container
            .querySelector(".restart")
            .onclick=()=>location.reload();

    }

}