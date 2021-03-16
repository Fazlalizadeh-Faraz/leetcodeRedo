var generateParenthesis = function(n) {
    let cur = ''
    let result = []

    backTrack(cur, n,n)

    function backTrack(current, left, right) {
        if (left === 0 && right === 0) {
            result.push(current)
            return result
        }

        if(left > 0 ){
            backTrack(current + '(', left - 1, right)
        }
        if (right > left){
            backTrack(current + ')', left, right -1 )
        }
    }
    console.log(result)
    return result
};

// generateParenthesis(5)
var fs = require('fs');

const readFile= ()=>{
    try {
        let testData = {};

        fs.readFile('test.js','utf-8',function(err, data){
            let splitList = data.toString().split('\r\n');
            for (let i = 0; i < splitList.length; i++) {
                if (splitList[i].includes("raiseOnFailure")){
                    let [key, val]  = splitList[i].replace('raiseOnFailure(addLocalizationObj(locale,"','').trim().split('\",')
                    cleanedValFirstQ = val.replace('\"','').trim()
                    cleanedVal = cleanedValFirstQ.replace('\"));','').trim()
                    testData[key] = cleanedVal;
                }
            }
            fs.writeFileSync('testJson.json', JSON.stringify(testData))
        });


    } catch(e) {
        console.log('Error:', e.stack);
    }}
readFile()