SE-Topbar-MainMeta
==================

Userscript for adding back the [main] link into the new top bar design being tested on mSO.

Styles the bar as light (similar to the coloring before the beta). 
Overrides the hover styles to correlate with the light styling.

Side feature: Docking Button

Location: top right
Description: black oval, grey hover, blue after left click

Dock Actions:

Left Click: 

Dock or Un-Dock the top bar to the top of the window. Black means undocked. Blue means docked.

Right Click:
   
Page just loaded and window is not scrolled: Nothing occurs.

Window was scrolled: position is saved, and the window is scroll to the top.
The dock was previously right clicked and the window is at the top: Scroll to saved position.
The dock was previously right clicked and the window is scrolled: Save new position, scroll to top.
