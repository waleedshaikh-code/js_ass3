//q1
// function newTime (){

//  var a= new Date();
//  document.write(a)

// }

// newTime();



//q2

// function greet ()
// {
//     var firstName = prompt("ENTER YOUR FIRST NAME")
//     var lastName = prompt("ENTER YOUR FIRST NAME")
//     var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName)
// }

// greet();

//Q3
// function sum(){
//     var a = +prompt("Enter first num");
//     var b = +prompt("Enter second num");
//     var c = a + b;
//     alert(c);
// }
// sum();

//Q4
// function result(num1,num2,operator){
// var calc = num1*num2/operator
// document.write(calc)
//     return calc;

// }
// result(21,34,20);


//Q5
// function sqr(num){
// var a = num*num
// document.write(a)
// }
// sqr(8)


//Q6
// function factor(num){
//     for(i=0;i>0||i<=num;i++){
//        var facNum = i*num;
//        document.write(facNum);
//     }
// }
// factor(8)


//Q7
// function count(){
//     var a = +prompt("enter start number");
//     var b = +prompt("enter end number");
// var c = a + b;
// document.write(c)
// }
// count();


//q8
//  function calculateHypotenius(){

//  var base = prompt("ENTER BASE")
//  var perpendicular = prompt("ENTER PERPENDICULAR")

// function calculateSquare()
// {
//  var calcBase = base * base;

//  var calcPerpendicular = perpendicular * perpendicular;

//  var hypotenius = calcBase + calcPerpendicular;


//  alert("Hypotenius = " + hypotenius)

// }

// calculateSquare();

//  }
//  calculateHypotenius();


//q9
// function areaRec(width,height)
// {

// var area = width * height;

// alert(area)
// }

// areaRec(+prompt("Enter Width  : "),+prompt("Enter Height :"))


//q10

// function check_Palindrome(a)
//  {

//     var b = a.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var ccount = 0;

//     for (var x = 0; x < ccount; x++) {

//         // Compare characters and drop them if they do not match 

//         if (b[x] != b.slice(-1 - x)[0]) {
//             alert("Entry is a palindrome.");
//         }
//     }
    
//     alert("The entry is not a palindrome.");


// }

// check_Palindrome( prompt("TYPE") )



//q11
// function upperCase(a)
// {
//   var array1 = a.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length(); i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }

// document.write(upperCase(prompt("")));

//q12
// function longestWord(string)
//  {
//     var a = string.split(" ");
//     var longest = 0;
//     var word = 0;
//     for (var i = 0; i < a.length - 1; i++) 
//     {
//         if (longest < a[i].length) {
//             longest = a[i].length;
//             word = a[i];
//         }
//     }
//     return word;
// }

// document.write(longestWord(prompt("")))


//q13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count("waleed","e"));



//q14
// function calcCircumference()
// {
//     var radius = prompt("Enter value of Radius")
//     var pie = 3.14
//     var circumference = 2*pie*radius
//     document.write("Circumference of circle is: "+circumference)
// }
// calcCircumference();

// function calcArea()
// {
//     var radius = prompt("Enter value of Radius")
//     var pie = 3.14
//     var area = pie*(radius*radius)
//     document.write("The area is: "+area)
// }
// calcArea();







