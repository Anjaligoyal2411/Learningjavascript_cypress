/*** This is Airthmatic operator */
 let x=5;
 let y=10;

 let value=x+y;
 console.log('the result is', +value);

let result= value * ++x;
let res= value * x++
console.log('the result is', +result);
console.log('the result is', +res);
console.log('the result is', +x);
let val= value * x++
console.log('the result is', val);

/*** Assignment operators */

val += 5;
console.log(val);
 val *=2;
 console.log(val);

 /** camparison operatort */
   let p=5;
   let q=5;
   let r='5'
    console.log(p==q);
    console.log(p===r);
    console.log(p!==q);
    console.log(p!==r);
    console.log(p>=q);

    //ternary operator

    let ter=x>y ? x:y;
    console.log(ter);


    //logical operators
    let a = true;
    let b = false;
    let c = true;
    console.log(a&&b);
    console.log(a&&c);
    console.log(a||b);
    console.log(!b);
    console.log(!a);
    console.log(!c);


    //type operators
    let name='anjali';
    console.log(typeof name);
    console.log(typeof 12345);

    let lastname= new String('goyal')
    console.log(lastname instanceof String );












