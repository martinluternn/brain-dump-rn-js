question: rendering page/ screen very slowly, how to investigate and fixing the issue?

answer:
the step is:
1. find the memory leaks, then solved
2. optimize logic, remove all redundant steps
3. take a look on views to analyze is that the best component that we can use
4. analyze state and props, eliminate frequently changing on state or props when view start to render
5. create reused custom component that can use multiple times
6. don't use anti pattern code
7. remove all console.log because its impacting performance
8. optimized big data on flat list, do it using pagination
9. minimize work in js thread