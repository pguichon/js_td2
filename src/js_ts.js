/**
 * Created by paulguichon on 13/10/2016.
 */
var MaClass = (function () {
    function MaClass() {
    }
    MaClass.prototype.toto = function () {
        console.log("toto");
    };
    return MaClass;
}());
var t = new MaClass();
t.toto();
