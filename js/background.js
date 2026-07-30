export class Background {

    constructor(container){

        this.container=container;

        this.render();

        this.createStars();

    }

    render(){

        const bg=document.createElement("div");

        bg.className="background";

        bg.innerHTML=`

            <div class="nebula nebula1"></div>

            <div class="nebula nebula2"></div>

            <div class="stars-layer"></div>

        `;

        this.container.appendChild(bg);

        this.layer=bg.querySelector(".stars-layer");

    }

    createStars(){

        for(let i=0;i<300;i++){

            const star=document.createElement("div");

            star.className="bg-star";

            star.style.left=Math.random()*100+"%";

            star.style.top=Math.random()*100+"%";

            star.style.animationDelay=Math.random()*5+"s";

            star.style.animationDuration=(2+Math.random()*4)+"s";

            this.layer.appendChild(star);

        }

    }

}