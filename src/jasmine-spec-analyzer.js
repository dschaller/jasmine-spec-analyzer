var SpecAnalyzer = function (analyzers) {
    this.analyzers = analyzers || {};
    this.analyze = new Analyzer(this.analyzers);
}

SpecAnalyzer.prototype = {
    specDone: function (spec) {
        if (spec.status === 'passed') {
            this.analyze.specSuccess(spec);
        } else if (spec.status === 'failed') {
            this.analyze.specFailure(spec);
        }
    }
};

module.exports = SpecAnalyzer;
