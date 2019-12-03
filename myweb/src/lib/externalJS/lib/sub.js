define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function test() {
        return "Hi, this is Sub";
    }
    exports.test = test;
    var myvar = "Hello, hello!";
    function getMyvar() {
        return myvar;
    }
    exports.getMyvar = getMyvar;
    function setMyvar(s) {
        myvar = s;
    }
    exports.setMyvar = setMyvar;
});
//# sourceMappingURL=sub.js.map