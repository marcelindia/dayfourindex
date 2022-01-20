// const fs = require('fs')


// function readFile()
//     {
//         const data = fs.readFileSync('data.json',"utf-8")
//         // blocks here until file is read
    
// console.log (data)
//     }
// readFile()

const fs = require('fs')
function dataFile() {


fs.readFile('data.json',"utf-8",(err,data)=> {
    if (err) throw err
console.log(data)
})
}
dataFile()