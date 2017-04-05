function flatten(arrays) {
    var _arrays = arrays instanceof Array ? arrays : [];

    return _arrays.reduceRight((v, sum) => sum.concat(v), []);
}