

// Array Methods


// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]


// array.push()

//automationTool.push("night watch", "webdriver")

// console.log(automationTool);


// array.pop()

// automationTool.pop()


// console.log(automationTool);


// array.unshift()


// automationTool.unshift("night watch")

// console.log(automationTool);


// array.shift()

// automationTool.shift()

// console.log(automationTool);



// array.includes

// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]


// console.log(automationTool.includes("playwright"));


// if(automationTool.includes('playwright')) {

// } else {

// }


// array.indexOf

// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]


// console.log(automationTool.indexOf('testcafe'));

// array.concat

// const automationToolOne = ["playwright", "cypress", "selenium"]

// const automationToolTwo = ["puppeter", "testcafe", "selenium"]


// const result = automationToolOne.concat(automationToolTwo, "night watch")

// console.log(result);


// array.reverse()


// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]


// console.log(automationTool.reverse());


// array.flat()


// const nestedArray = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]

// console.log(nestedArray.flat(Infinity));


// array.forEach()

// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]



// automationTool.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })


// array.slice(starting index, ending index)

// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]

// // console.log(automationTool.slice(1, 4));


// // array.splice(starting index, delete count, add values....)


// automationTool.splice(0, 2, "webdriver", "QTP")


// console.log(automationTool);


// array.map()

// const num = [10, 20, 30, 40, 50]

// const result = num.map(value => value * 10)

// console.log(result);


// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]

// const upperCase = automationTool.map(value => value + 10)

// console.log(upperCase);

// array.join()

// const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]

// console.log(automationTool.join(', '));


//array.filer()


// const num = [20, 40, 30, 50, 80, 100]


// const result = num.filter(value => value > 30)

// console.log(result);


// array.find()

// const result = num.find(value => value > 30)

// console.log(result);


// array.every()

// const result = num.every(value => value > 19)

// console.log(result);


// array.some()

// const result = num.some(value => value > 101)

// console.log(result);


// array.findIndex()

// const result = num.findIndex(value => value > 50)

// console.log(result);


const num = [20, 40, 30, 50, 80, 100]

//array.sort()

// const result = num.sort((a, b)=> b - a)

// console.log(result);



// array.reduce()

// const result = num.reduce((acc, curr)=> acc + curr, 1)

// console.log(result);


// Array.isArray()

// const value = "playwright"


// console.log(Array.isArray(value));


// if(Array.isArray(num)) {
//     console.log(`Value is an array`);
    
// } else {
//     console.log('value is not an array');
    
// }


// array.lastIndexOf

// const num = [10, 20, 30, 10, 40]


// console.log(num.lastIndexOf(10));



const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]


// for(const key of automationTool.keys()) {
//     console.log(key);
    
// }


// for(const key of automationTool.values()) {
//     console.log(key);
    
// }


// for(const key of automationTool.entries()) {
//     console.log(key);
    
// }

























