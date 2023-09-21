# JS Entity Game Engine

This is a very lightweight, bare-bones, 2D JS game engine with rendering in HTML5 Canvas.

# Structure

## game.js

### Game.Start()
Write any initilization code in the Game Object's Start function.

### Game.Draw(ctx)
draws each entity in the game in sorted order.

### Game.Update()
calls each entity's update method

## entity.js

examples of Entity code, each with update and draw logic.


## input.js

### Input.GetMouseDown()

returns true the frame the mouse is pressed.

### Input.mouseDown

returns true if the mouse is down currently.

### Input.mousePos

returns the mouse pos in the game world.

### Input.keys

a dictionary of keys, true if that key is currently pressed.