// Can't reassign variable
// const a = "a";
// a = "b";

// Can reassign variable
// let a = "a";
// a = "b";
// console.log(a);

// Can reassign variable
// var a = "a";
// a = "c";
// console.log(a);

// know just in them scope
// let a = "a"; {
//     let a = "b";
//     console.log(1, a);
// }
// console.log(2, a);

var a = "a"; {
    var a = "b";
    console.log(1, a);
}
console.log(2, a);