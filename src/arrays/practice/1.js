 function arrayManipulations() {
    // your code here
    let arr = [1, 2, 3];
    arr.filter((elem, i) => {
        console.log(elem);
    });
}

arrayManipulations();

function arrLastItem(arr) {
   let LastItem = arr[arr.length-1];
   return LastItem;
}

console.log(arrLastItem([1,33,5,7,8]));

function arrLastItem(arr) {
    return arr[arr.length-1];
 }
 
 console.log(arrLastItem([1,33,5,7,8]));

 function arrLastItem(arr) {
    return arr[arr.push()];
 }
 
 console.log(arrLastItem([1,33,5,7,8]));