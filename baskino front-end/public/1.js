// function Node(data){
//   this.data = data;
//   this.next= null;
// }
// function SingleLinketList(){
//   this.head = null;
//   this.tail = null;
//   this.count = 0;
// }
// SingleLinketList.prototype.length = function(){
//   return this.count;
// }
// SingleLinketList.prototype.add = function(data){
//   let node = new Node(data);
//   if(!this.head){
//     this.head = node;
//     this.tail = node;
//   } else {
//     this.tail.next = node;
//     this.tail = node
//   }
//   this.count++;
// }
SingleLinketList.prototype.remove = function(data){
  let previous = this.head;
  let current = this.head;
  while(current){
    if(current.data === data){
      if(current === this.head){
        this.head = this.head.next;
      }
      if(current === this.tail){
        this.tail = previous;
      }
      previous.next = current.next;
      this.count--;
    } else {
      previous = current;
    }
    current= current.next;
  }
}
// function Stack() {
//   this.stack=[];
// }
// Stack.prototype.push = function(value) {
//   this.stack.push(value)
// }
// Stack.prototype.pop = function(){
//   this.stack.pop()
// }


//
// class MyQueue{
//   constructor(){
//     this._s1=[];
//     this._s2=[];
//     this.min = null;
//   }
//
//   add(value){
//     this._s1.push(value);
//     this._min(value)
//   }
//   _min(value){
//     if(this.min === null){
//       this.min = value;
//     } else{
//       if(this.min > value){
//         this.min =value;
//       }
//     }
//   }
//
//   remove(){
//     this._shift();
//     return this._s2.pop();
//   }
//   peek(){
//     this._shift();
//     return this._s2[this._s2.length-1];
//   }
//   _shift(){
//     if(this._s2.length >0){
//       return;
//     }
//     while(this._s1.length >0){
//       this._s2.push(this._s1.pop());
//     }
//   }
// }
// const q = new MyQueue();
//   q.add(3);
//   q.add(10);
//   q.add(15);
//   q._min()
//   q._min()
//   q.add(17);
//   console.log(q)
//   q.remove();
//   console.log(q)
//   q.remove();
//   console.log(q)
//-----------------------MERGE SORT-----------------------------

// function merge(left,right) {
//     let result = [];
//     while(left.length > 0 && right.length>0){
//       if(left[0] < right[0]){
//         result.push(left.shift());
//       } else{
//         result.push(right.shift())
//       }
//     }
//     return result.concat(left).concat(right);
// }
// function mergeSort(array) {
//     if(array.length<2){
//       return array;
//     }
//     let middle = Math.floor(array.length/2);
//     let left = array.slice(0,middle);
//     let right = array.slice(middle);
//     return( merge(mergeSort(left), mergeSort(right)));
// }
//
// let arr = [1,4,5,63,3,37,37,34,743,7,47,43,67,437,43,76];
// console.log(mergeSort(arr));

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
//
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


// var socket = new WebSocket("ws://wsc.2123.io/");
// if(socket){
//   socket.binaryType = arraybuffer
// }
// let str = "";
// let arr = [1,2,3,4];
// let znak = "*";
// for(let i=0; i<arr.length; i++){
//   if(i != arr.length-1){
//     str += arr[i] + znak
//   } else {
//     str += arr[i]
//   }
//
// }
// console.log(str);
// console.log(eval(str));
// const ws = new WebSocket('ws://wsc.2123.io/');
//
// ws.binaryType = 'arraybuffer';
// ws.onopen = function () {
//   ws.send('{ "name":"gomelviiv", "command": "challenge accepted" }');
// }
// ws.onmessage = function (e) {
//   console.log(new Uint8Array(e.data));
//   console.log(e.data);
// }
  // ws.onopen = function () {
  //   ws.send('{"token":"338c0929cb016218", "command": "arithmetic" }');
  // }
  // ws.onmessage = function (e) {
  //   console.log(new Uint8Array(e.data));
  //   console.log(e.data);
  // }
  // const arr = [1,3,7,3,5,6,3,2,5,9,3,10,1];
// bubleSort = (array) => {
//     let length = array.length;
//     for(let i=0; i<length-1;i++){
//       for(let j=0; j<length-1-i; j++){
//         if(array[j+1]>array[j]){
//           let temp = array[j+1];
//           array[j+1] = array[j];
//           array[j] = temp;
//         }
//       }
//     }
//     return array;
// }
// bubleSort(arr);

// SelectionSort(arr);
// SelectionSort = (array) => {
//   let length = array.length;
//   for(let i=0; i<length-1;i++){
//     let min = i;
//     for(let j=i+1; j<length; j++){
//         if(array[j]<array[i]){
//           min = j;
//         }
//     }
//     let temp = array[min];
//     array[min] = array[i];
//     array[i] = temp;
//   }
//   return array
// }
// SelectionSort(arr);

// console.log(arr)


double f(double x){
  return x;
}
double binarysearc(double l, double r, double C, double e){
  for(int i=0; i<100; i++){
    double med = (l+r)/2;
    if(f(med)<C){
      l =med;
    } else{
      r =med
    }
  }
  return (l+r)/2
}



// double l = ..., r =...., eps =...;
// while (r-l > eps){
//   double m1 = l + (r-1)/3, m2 = r - (r-1)/3;
//   if(f(m1)<f(m2)){
//     l = m1;
//   } else {
//     r = m2;
//   }
// }
