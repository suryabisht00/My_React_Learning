
To create multiple independent stopwatch components using the provided code, the key is the isolation of state within each instance of the Stopwatch component. Here's how the code achieves this and how you can create multiple stopwatches:

How it Works
Independent State Management:

Each instance of the Stopwatch component has its own set of state variables (isRunning, elapsedTime) managed by React's useState hook.
When you render multiple Stopwatch components, React creates a separate state for each instance. These states are completely isolated from one another.
useRef for Persistent Values:

The useRef hook (intervalIDRef and startTimeRef) provides independent references for each component instance.
These references persist across renders and are not shared between instances of the component.
Effect Isolation with useEffect:

The useEffect hook ensures that the interval logic is applied to only the specific component instance that is running.
Clearing the interval (clearInterval) and starting it (setInterval) are scoped to the instance, preventing interference between instances.
Reusable UI Logic:

The buttons and display are tied to the individual component state and update independently of other instances