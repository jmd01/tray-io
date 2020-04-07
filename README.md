# Tray.io 
### Builder Squad 
###Frontend Engineer Technical Exercise

Tray users are always creating and tweaking workflows that automate their tasks.
They add, remove, and configure connectors - the visual building blocks - using our
Workflow Builder.

As part of an undergoing user testing phase, a team of analysts would like to
visualize users adding and rearranging connectors while building a workflow. They
expect to see these events appear in a dashboard as time goes by. Sometimes,
particular connector choices can spark interest and they'll want to add them to a list
of things to discuss later on.

Events are emitted as users interact with the builder. Let’s assume that these events
include the connector logo, its name, and strangely, the X/Y coordinates in which
they were used by the customer.

## How to use
Navigate to project root and run
```bash
> yarn install
> yarn start
```
You can now view the app in the browser
```bash
  Local: http://localhost:3000
```

## Tests
Tests have been documented with pseudo code in the relevant files, but due to time constraints, not fully implemented.
To run the tests navigate to the project root and run
```bash
> yarn test
```


## Dependencies
- react-draggable
    - The HTML5 drag and drop API does have some quirks so I felt it  that using React-draggable would provide a simple API and save some time. I have discovered a small bug where by the dragEnd event is not fired without an additional click (see below), so in hindsight may have been better off building this feature without the help of a third party package. 
- styled-components
    - A useful library for handling css-in-js
- date-fns
    - My preferred choice for date handling in JS. Possibly a bit of overkill for a single timer, but apps like these have a tendency to expand and so this provides future proofing.

## Considerations
- UI for events with malformed data
    - "No name" used for events missing a name
    - Default fallback icon should be used for events missing a url
    - Defaulting to 0,0 for events with missing coords. Would need to determine if that is the preferred behaviour for the end user
    - Negative coords are forced to zero

##Improvements

- Event items
    - Either offset items x and y position to avoid bleeding out of visualiser right and bottom pane, or increase visualiser pane size to accomodate this
    - Could add lodash to handle deep object comparison for the coords shape. It would be worth doing this if the project grew
- Add icon for timer
- Drag and drop
    - Bug: Dropping an item on the list does not trigger the dragEnd event. You must click after releasing the drag to end the drag and push the item to the 'Interesting connector list'. This was working when using static data, so my assumption is that the drag event is lost when the event emmitter triggers a re-render. To address this I would likely remove the dependency on react-draggable and build the mouseDown, mouseUp, mouseMove events myself.
- Improve the styling of visualiser and connector list panels. I would also look to add a visual indication that the droppable area has been entered when dragging

