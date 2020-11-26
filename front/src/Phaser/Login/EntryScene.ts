import {gameManager} from "../Game/GameManager";
import {Scene} from "phaser";
import {LoginSceneName} from "./LoginScene";
import {FourOFourSceneName} from "../Reconnecting/FourOFourScene";

export const EntrySceneName = "EntryScene";

/**
 * The EntryScene is not a real scene. It is the first scene loaded and is only used to initialize the gameManager
 * and to route to the next correct scene.
 */
export class EntryScene extends Scene {
    constructor() {
        super({
            key: EntrySceneName
        });
    }

    preload() {
    }

    create() {
        gameManager.init(this.scene).then(() => {
            this.scene.start(LoginSceneName);
        }).catch(() => {
            this.scene.start(FourOFourSceneName, {
                url: window.location.pathname.toString()
            });
        });
    }
}
