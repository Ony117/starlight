import { IntroScene } from "./scenes/intro.js";
import { Background } from "./background.js";
import { AudioPlayer } from "./audio.js";
import { SceneManager } from "./sceneManager.js";
import { Starfield } from "./starfield.js";


const app = document.getElementById("app");

new Background(document.body);

new Starfield(document.body);

export const music = new AudioPlayer();

export const sceneManager = new SceneManager(app);

new IntroScene(app);