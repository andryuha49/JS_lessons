"use strict";
class TestJsonParser {
    constructor(rowsCount = 10000, propertyCount = 100){
        this.rowsCount = rowsCount;
        this.propertyCount = propertyCount;
    }

    _createTestJsonStr (){
        var result = '[';

        for(let i = 1; i <= this.rowsCount; i++){
            result += '{';
            for (let r = 1; r <= this.propertyCount; r++){
                var propertyNumber = i + r;
                result += '"testProperty' + propertyNumber + '":' +  propertyNumber;
                if (r < this.propertyCount){
                    result += ',';
                }
            }
            result += '}';
            if (i < this.rowsCount){
                result += ',';
            }
        }
        return result += ']';
    }

    run(){
        var testJsonStr = this._createTestJsonStr();
        console.time('eval-testTime');
        eval('(' + testJsonStr + ')');
        console.timeEnd('eval-testTime');

        console.time('JSON.parse-testTime');
        JSON.parse(testJsonStr);
        console.timeEnd('JSON.parse-testTime');
    }
};

(function () {
    var test = new TestJsonParser(10000, 100);
    test.run();
})();

