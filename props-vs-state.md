question: props vs state

answer:
- props is like external properties that you have on specific class or view and controlled by whatever renders the component. + you can't edit since the class/view already rendered. for example:
1. in <Text /> we have `fontSize`, `fontStyle`, and etc.
2. if you want to create custom component for loading dialog, the props that you can create is `color` and `loadingText`

- state is like internal properties that you have on specific class or view and controlled by component itself. + you can assign a value and its lively changing even when the class/view already rendered, for example:
1. in <Text /> we have `onPress`, `onLongPress`, and etc.
2. if you want to create custom component for loading dialog, the state that you can create is `Idle` and `Loading`