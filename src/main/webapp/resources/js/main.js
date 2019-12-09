import Stage from './stage.js';
import { PropertyObserver } from './changeNotifier.js'
import { Text } from './text.js'
import { Vector2 } from './vector2.js'

function load() {
    const primaryScene = new Stage("canvas");
    const globalCoords = new Text("X:  Y: ", new Vector2(20, 20));
    globalCoords.listener = new PropertyObserver('mouse', function(mouse) {
        globalCoords.text = `X: ${mouse.x}  Y: ${mouse.y}`;
    });
    primaryScene.push(globalCoords);
    primaryScene.show();
}

window.onload = load;
