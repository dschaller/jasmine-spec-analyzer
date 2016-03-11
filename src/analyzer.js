var Analyzer = function (analyzers) {
    this.analyzers = analyzerts
}

Analyzer.prototype = {
    specSuccess: function (spec) {
        this.analyzers.forEach(function (analyzer) {
            analyzer.call(spec);
        });
    },

    specFailure: function (spec) {
        this.analyzers.forEach(function (analyzer) {
            analyzer.call(spec);
        });
    }
};

module.exports = Analyzer;
