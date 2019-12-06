function Stage(htmlCanvasId) {
    this.canvas = document.getElementById(htmlCanvasId);
}

Stage.prototype.draw = function() {
    this.canvas.addEventListener('mousemove', function(event) {
        getCursorGlobalPosition(event);    
    });

    function getCursorGlobalPosition(event) {
        let ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let canvasBoundingBox = this.canvas.getBoundingClientRect();
        const x = event.clientX - canvasBoundingBox.left;
        const y = event.clientY - canvasBoundingBox.top;
        ctx.fillText("X: " + x + "  Y: " + y, 20, 20);
    }
}
            
window.onload = load;
            
function load() {
    var primaryScene = new Stage("canvas");
    primaryScene.draw();
}    

// exports.Stage = Stage;
