
// const name = "playwright"

try {

    console.log(name);
    

} catch(err) {

    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
    

    // throw new Error("variable is not defined")
    
} finally {
    console.log("always execute");
    
}