

// const tool = {
//     name: "playwright",
//     age: 6,
//     company: "microsoft",
//     //country: "USA"
// }


// const {name: toolName, country = "newyork"} = tool

// console.log(country );





const tool = {
    name: "playwright",
    age: 6,
    info: {
    company: "microsoft",
    country: "USA"
    }
 
}


const {name, info: {company, country}} = tool


console.log(name, company);
console.log(country);






