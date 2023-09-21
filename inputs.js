
let Input = {

    mousePos : {x:0,y:0},
    keys : {},

    mouseDownCallbacks: [],
    mouseUpCallbacks: [],

    mouseDown: false,
    lastMousePos: null,

    mouseDownThisFrame: false,
    mouseDownLastFrame: false,


    getMousePos: function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x:Math.round(evt.clientX - rect.left),
            y:Math.round(evt.clientY - rect.top)
        }
    },

    Init: function(canvas,document) {
        let self = this;
        canvas.addEventListener('mousemove', function(evt) {
            self.mousePos = self.getMousePos(canvas,evt);
        });
        
        document.addEventListener('keydown', function(evt) {
            self.keys[evt.key] = true;
        });
        
        document.addEventListener('keyup', function(evt) {
            self.keys[evt.key] = false;
        });

        canvas.addEventListener('mousedown', function(evt) {
            self.mouseDown = true;
            self.mouseDownThisFrame = true;
            self.mouseDownLastFrame = false;
            self.mouseDownCallbacks.forEach((m) => m());
        });
        
        document.addEventListener('mouseup', function(evt) {
            self.mouseDown = false;
            self.mouseUpCallbacks.forEach((m) => m());
        });
    },
    
    AddMouseDownCallback: function(c) {
        this.mouseDownCallbacks.push(c);
    },

    AddMouseUpCallback: function(c) {
        this.mouseUpCallbacks.push(c);
    },

    GetMouseDown: function() {
        return this.mouseDownThisFrame;
    },

    internalUpdate: function() {
        if(this.mouseDownThisFrame && this.mouseDownLastFrame) {
            this.mouseDownThisFrame = false;
        } 
        this.mouseDownLastFrame = this.mouseDownThisFrame;
    }
}