question: when use higher order component and pure component?

answer:
you use HOC. if you want to create custom component that handle modify state or props you better to use HOC, since HOC is used to components for code reusability. and also since HOC is a function that return a component, you can create for example is: list with multiple different component inside.

you use pure component. if you want a performance optimization you can use pure component, and if view render the same result given the same props and state. for example is: <Text /> and <View /> from React, its pure just a component with simple and minimum logic state or props.