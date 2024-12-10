const {hasCycle} = require('./code.js'); 
function runTest(testName, actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(`✅ ${testName}: Passed`);
    } else {
        console.error(`❌ ${testName}: Failed`);
        console.error(` Expected: ${JSON.stringify(expected)}`);
        console.error(` Got: ${JSON.stringify(actual)}`);
    }
}

console.log("Running static tests...\n");

runTest(
    "Test 1: Simple cycle graph",
    hasCycle({
            0: [1, 2],
            1: [0, 2],
            2: [0, 1]
        },
    ),
    true
);

runTest(
    "Test 2: Cycle with different labeling",
    hasCycle(
        {
            a: ["b", "c"],
            b: ["a", "d"],
            c: ["a", "d"],
            d: ["b", "c"]
            }
        ),
    true
);

runTest(
    "Test 3: Cycle (more nodes)",
    hasCycle(
        {
            1: [2, 5, 6],
            2: [3, 5, 1],
            3: [2],
            4: [5],
            5: [1, 2, 4],
            6: [1]
        }
    ),
    true
);

runTest(
    "Test 4: Multiple Cycles",
    hasCycle(
        {
            0: [1, 2],
            1: [0, 2],
            2: [0, 1, 3],
            3: [4, 5],
            4: [3, 5],
            5: [4, 3]
        }
    ),
    true
);

// Test 5: Empty graphs
runTest(
    "Test 5: Empty graph",
    hasCycle({}),
    false
);

runTest(
    "Test 6: Single node graph",
    hasCycle(
        { 0: [] },
    ),
    false
);

runTest(
    "Test 7: Simple no cycle",
    hasCycle(
        {
            0: [1], 
            1: [0, 2],
            2: [1, 3],
            3: [2] 
        }
    ),
    false
);

runTest(
    "Test 7: Self cycle (loop)",
    hasCycle(
        {
            0: [1], 
            1: [0, 1, 2],
            2: [1, 3],
            3: [2] 
        }
    ),
    true
);

console.log("\nAll tests completed.");