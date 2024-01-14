

// for(let i=1; i<=10; i++){
// //    console.log('Hello World');
//    console.log(i);
// }     


// let i = 10;

// console.log(++i);

// console.log(i++);
// console.log(i);

// let marks = [45, 55, 66, 77, 88, 11, 22, 33, 55, 22];

// let arrayLength = marks.length;
// console.log(arrayLength);

// for (let i=0; i<10; i++){
//    // console.log(marks[i]); //marks[0], marks[1], marks[3]
//    if(marks[i] >32){
//       console.log(marks[i]+'=pass');
//    }
//    else{
//       console.log(marks[i]+'=Fail');
//    }
// }


let number =[45, 55, 66, 77, 88, 11, 22, 33, 44, 99, 22,];
let numberLength = number.length;
//45%2==0(Even)/(Odd);
for (let i=0; i<numberLength; i++){
   let remainder = number[i]%2; //numlber[0]/20%2==0; number[1]/30%2==0; number[3]/47%2==1

   if(remainder==0){
      console.log(number[i]+'=Even');
   }
   else{
      console.log(number[i]+'=Odd');
   }
}