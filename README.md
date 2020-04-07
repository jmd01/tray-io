# Tray.io event emitter
An event visualiser

##Improvements

- UI for events with missing data
    - "No name" used for events missing a name
    - Default fallback icon used for events missing a url
    - Defaulting to 0,0 for events with missing coords. Perhaps better to place these in a seperate list?
    - Negative coords are forced to zero
    - Either offset items x and y position to avoid bleeding out of visualiser right and bottom pane, or increase visualiser pane size to accomodate this
