// 1) Primitive data types
// 2) non primitive data types or reference data types

// primitive data types

/*

1) string
2) number
3) boolean
4) null
5) undefined

*/

// reference data types

// 1) array
// 2) Object
// 3) function

// 1) string

// const value = "Automation"

// console.log(value)

// // // number

// // const num = 20.12

// // // boolean

// // const isPopular = true // true or false

// // // null

// // let nullDataType = null

// // // undefined

// // let newValue = undefined

// reference data type

//1) array

//.             0           1   2       3           4           5                           6
// const arr = ["playwright", 6, true, "microsoft", "USA", ["automation", "Javascript"], "typescript"]
//                                                             //0             1

// console.log(arr[5][0])

// 2) object

// const automation = {
//   name: "playwright",
//   age: 6,
//   isPopular: true,
//   info: {
//     ownedBy: "microsoft",
//     country: "usa",
//   },
// };

// // dot notation

// console.log(automation.info.ownedBy);

// // bracket notation

// console.log(automation['name']);



// function

// resuse

function printValues() {
    console.log("playwright")
}

printValues()

printValues()

printValues()

printValues()