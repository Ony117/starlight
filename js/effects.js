export function startEffects(container){

    createParticles(container);

    setInterval(()=>{

        shootingStar(container);

    },6000);

}

function createParticles(container){

    for(let i=0;i<35;i++){

        const p=document.createElement("div");

        p.className="particle";

        p.style.left=Math.random()*100+"%";

        p.style.top=Math.random()*100+"%";

        p.style.animationDuration=(8+Math.random()*10)+"s";

        p.style.animationDelay=Math.random()*8+"s";

        container.appendChild(p);

    }

}

function shootingStar(container){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=(60+Math.random()*30)+"%";

    star.style.top=(Math.random()*25)+"%";

    container.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1800);

}