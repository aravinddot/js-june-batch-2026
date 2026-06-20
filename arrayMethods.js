

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

const num = [10, 20, 30, 40, 50]

const result = num.map(value => value * 10)

console.log(result);


const automationTool = ["playwright", "cypress", "selenium", "puppeter", "testcafe"]

const upperCase = automationTool.map(value => value + 10)

console.log(upperCase);




















