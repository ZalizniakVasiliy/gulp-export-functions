const {parallel, series} = require('gulp');

const convertToJSON = (done) => {
    const obj = {
        key1: 'property1',
        key2: 'property2',
    }

    console.log(JSON.stringify(obj));

    done();
}

const filterArray = (done) => {
    const arr = [-15, 0.5, 38, -4, 2, 14];
    console.log(arr.filter(item => item > 0));

    done();
}


const sumElemsArr = (done) => {
    const arr = [-15, 0.5, 38, -4, 2, 14];

    console.log(arr.reduce((acc, item) => acc + item, 0));

    done();
}

exports.default = parallel(convertToJSON, filterArray, sumElemsArr);
exports.operationsWithArr = parallel(filterArray, sumElemsArr);
exports.filteredArr = filterArray;
exports.seriesTasks = series(convertToJSON, filterArray, sumElemsArr);