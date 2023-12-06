const path = require("path");

//Basename
console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

// Joint PAth
console.log(path.join(__dirname, "test", "teste.html"));
