export class AudioPlayer{

    constructor(){

        this.audio=new Audio("assets/audio/music.mp3");

        this.audio.loop=true;

        this.audio.volume=.35;

    }

    play(){

        this.audio.play();

    }

    pause(){

        this.audio.pause();

    }

}