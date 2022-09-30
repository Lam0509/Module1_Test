// Bài 1
// function findMax3(arr) {
//     let index;
//     for (let i=0;i<3;i++) {
//         var max = arr[0];
//         for (let j=1;j<arr.length;j++) {
//             if (max < arr[j]) {
//                 max = arr[j];
//                 index = j;
//             }
//         }
//         arr.splice(index, 1);
//     }
//     return max;
// }
//
// let array = [1,10,8,2,5,7,9,11];
// alert(findMax3(array));

// Bài 2
// function tryRemoveFromArray(arr, index) {
//     let newArr = []
//     if (index >= 0 && index < arr.length) {
//         for (let i=0;i<arr.length;i++) {
//             if (arr[i] !== arr[index]) {
//                 newArr.push(arr[i]);
//             }
//         }
//         arr = newArr;
//         return arr;
//     } else {
//         return arr
//     }
// }
//
// console.log(tryRemoveFromArray([1,2,3,4,5,5,6,7], 1));

// Bài 3
// function checkStr(str1, str2) {
//     if (str2.length>=str1.length) {
//         let str = str2.split(str1);
//         if (str == str2) {
//             return false;
//         } else {
//             for (let i=0;i<str.length;i++) {
//                 if (str[i] == str1) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
//
// console.log(checkStr('I  am Lam', 'Hello   I  am Lam'));

// Bài 4
// class Rectangle {
//     x;
//     y;
//     width;
//     height;
//     color;
//
//     constructor(x, y, width, height, color) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//
//     render() {
//         let ctx = document.getElementById("myCanvas").getContext("2d");
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// }
//
// let rect = new Rectangle(10, 10, 200, 100, '#000000');
// rect.render();


