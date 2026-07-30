export class Starfield{

    constructor(container){

        this.container=container;

        this.stars=[];

        this.render();

        this.animate();

        this.mouse();

    }

    render(){

        this.canvas=document.createElement("canvas");

        this.canvas.className="starfield";

        this.ctx=this.canvas.getContext("2d");

        this.container.prepend(this.canvas);

        this.resize();

        window.addEventListener("resize",()=>this.resize());

        for(let i=0;i<1000;i++){

            this.stars.push({

                x:Math.random()*this.w,

                y:Math.random()*this.h,

                r:Math.random()*2,

                z:Math.random(),

                s:.1+Math.random()*.6

            });

        }

    }

    resize(){

        this.w=window.innerWidth;

        this.h=window.innerHeight;

        this.canvas.width=this.w;

        this.canvas.height=this.h;

    }

    animate(){

        this.ctx.clearRect(0,0,this.w,this.h);

        this.ctx.fillStyle="white";

        this.stars.forEach(star=>{

            star.y+=star.s;

            if(star.y>this.h){

                star.y=0;

                star.x=Math.random()*this.w;

            }

            this.ctx.globalAlpha=.2+star.z;

            this.ctx.beginPath();

            this.ctx.arc(star.x+this.offsetX,star.y+this.offsetY,star.r,0,Math.PI*2);

            this.ctx.fill();

        });

        requestAnimationFrame(()=>this.animate());

    }

    mouse(){

        this.offsetX=0;

        this.offsetY=0;

        window.addEventListener("mousemove",(e)=>{

            this.offsetX=(e.clientX-this.w/2)*0.02;

            this.offsetY=(e.clientY-this.h/2)*0.02;

        });

        window.addEventListener("touchmove",(e)=>{

            const t=e.touches[0];

            this.offsetX=(t.clientX-this.w/2)*0.02;

            this.offsetY=(t.clientY-this.h/2)*0.02;

        });

    }

}