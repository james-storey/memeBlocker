var Blocker = function () {
    var that = {};
    var log = function () {
        console.log("blocker run");
    };
    that.log = log;
    return that;
}


exports.construct = Blocker;
