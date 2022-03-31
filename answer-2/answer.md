question: when should use redux?

answer:
should not use redux. if you not really have a big state management or you just create a simple app with only have one/two page or no interaction between page. so, you just simply manage your state on that specific page.

you should use redux. if you have a big state management or you create an app with multiple page with multiple page inside. for example:
if you want create a global credential login account props or loading state, you need to put that state/props on redux then easily consume the state between page and also you can see that state and props from redux globally rather than you create on by one similar state or props on every page