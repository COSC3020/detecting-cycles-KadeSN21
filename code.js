function hasCycle(graph) {
    const visited = new Set(); 
    const stack = new Set();  

    function dfs(vertex, parent) {
        visited.add(vertex);
        stack.add(vertex);

        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, vertex)) {
                    return true; 
                }
            } else if (neighbor !== parent && stack.has(neighbor)) {
                return true; 
            } 
        }

        stack.delete(vertex); 
        return false;
    }

    for (const vertex of Object.keys(graph)) {
        if (!visited.has(vertex)) {
            if (dfs(vertex, null)) {
                return true;
            }
        }
    }

    return false;
}

module.exports = {hasCycle}