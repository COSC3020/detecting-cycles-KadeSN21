# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case $\Theta$ complexity of this algorithm is $\Theta(V + E)$, the for loop in "hasCycle" that recursivley calls "dfs" itterates over all $V$ verticies in the graph, which takes $\Theta(V)$ time, the for loop in "dfs" itterates over all edges or "neighbors" for each vertice, this takes $\Theta(E)$ time where $E$ is the number of edges in the graph. In a worst case scenario, all vertices and edges must be explored, which gives us $\Theta(V + E)$

Help: refferenced TedDay5's repo, as well as https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/ for more information on depth first searching. I also referenced my detecting-isomorphism for a bases for the test code which I altered to work with this algorithm.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
