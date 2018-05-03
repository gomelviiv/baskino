// function Node(data) {
//     this.head = data;
//     this.next = null;
// }
//
// function List() {
//     this.head = null;
//     this.tail = null;
//     this.count = 0;
// }
//
// List.prototype.add = function(data){
//     let node = new Node(data);
//     if(!this.head){
//         this.head=node;
//         this.tail = node;
//     } else {
//         this.tail.next = node;
//         this.tail = node;
//     }
//     this.count++
// };
//
// let list = new List();
//
// list.add(3);
// console.log(list);
// function Stack() {
//     this.stack = [];
// }
// Stack.prototype.push = function (value) {
//     this.stack.push(value);
// };
//-----------------------MERGE SORT-----------------------------
//
// function merge(left,right) {
//     let result = [];
//
//     while(left.length> 0 && right.length>0){
//         if(left[0]< right[0]){
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }
//     return result.concat(left).concat(right);
// }
// function mergeSort(array) {
//         if (array.length<2) {
//             return array;
//         }
//         let middle = Math.floor(array.length/2);
//         let left = array.slice(0,middle);
//         let right = array.slice(middle);
//     return merge(mergeSort(left), mergeSort(right))
// }

// let arr = [1,4,5,63,3,37,37,34,743,7,47,43,67,437,43,76];
// console.log(mergeSort(arr));

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// function merge(left,right) {
//     let result = [];
//     while(left.length > 0 && right.length > 0){
//         if(left[0] < right[0]){
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     return result.concat(left).concat(right)
// }
// function mergeSort(array) {
//     if(array.length  < 2 ){
//         return array;
//     }
//     let middle = Math.floor(array.length/2);
//     let left = array.slice(0,middle);
//     let right = array.slice(middle);
//
//     return  merge(mergeSort(left), mergeSort(right))
// }
//
//
// let arr = [1,4,5,63,3,37,37,34,743,7,47,43,67,437,43,76];
// console.log(mergeSort(arr));
//
// function square(arr){
//     return arr.map((num) =>{
//         return num * num;
//     })
// }
// function cube(arr){
//     return arr.map((num) =>{
//         return num * num * num;
//     })
// }
// function average(arr){
//     let count = 0;
//     arr.map((num) =>{
//         return count += num;
//     });    c = arr.length;
//     return Math.floor(count / c);
// }
// function summ(arr){
//     let count = 0;
//      return arr.map(function(num) {
//          return count += num;
//     });
//
//
// }
// function even(arr){
//     let count = [];
//    return arr.map( (num) => {
//         if(num % 2 === 0){
//             count.push(num);
//             return count;
//         }
//     });
//
// }
// function odd(arr){
//     let count = [];
//      return arr.map( (num) => {
//         if(num % 2 !== 0){
//             count.push(num);
//             return count;
//         }
//     });
//
// }
//
// let c = [1,2,3,4,5];
// console.log(square(c) + " " + cube(c) + " " + average(c)+ " "  +summ(c) + " " +even(c) + " " + odd(c));