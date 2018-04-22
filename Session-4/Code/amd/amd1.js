define('myModule',
    ['math', 'graph'],
    function (math, graph) {
        // Note that this is a slightly different pattern
        // With AMD, it's possible to define modules in a few
        // different ways due to it's flexibility with
        // certain aspects of the syntax
        return {
            plot: function (x, y) {
                return graph.drawPie(math.randomGrid(x, y));
            }
        }
    }
);

console.log(myModule);