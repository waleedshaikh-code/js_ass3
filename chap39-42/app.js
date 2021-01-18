//q1
// function power(a, b) {
    
//     var result = 1;
    
//     if(b == undefined)
    
//     b = 2;
    
//     for(var i=1; i <=b; i++) {
    
//         result = result * a;
// 	}
// 	return result;
// }

// document.write(power(prompt("ENTER VALUE :"),prompt("ENTER POWER :")));


//q2

// function leapYear(){
// var year = +prompt("ENTER ANY YEAR")

// if(year %4 == 0)
// {
//     alert(year + " ITS A LEAP YEAR")
// }

// else{
//     alert(year + " ITS NOT LEAP YEAR")

// }

// }
// leapYear();


//q3

// function area(a,b,c)

// {
// function S()
// {
    
    
// }

//     var valueOfS = (a + b + c) /2;
//     var areaOfTriangle = valueOfS *(valueOfS -a)*(valueOfS -b)*(valueOfS -c)

//     document.write("<h1>The Area of Triangle is : " + areaOfTriangle)
//     S() 
// }

// area(+prompt("Enter value of a :"),+prompt("Enter value of b : "),+prompt("Enter value of c : ") );



//q4
// function mainFunc ()
// {
//     var markSub1 = +prompt("ENTER YOUR FIRST SUBJECT MARKS :")
//     var markSub2 = +prompt("ENTER YOUR FIRST SUBJECT MARKS :")
//     var markSub3 = +prompt("ENTER YOUR FIRST SUBJECT MARKS :")


// function average()
// {
//     document.write("Average of 3 Subject is : " + " " + (markSub1 + markSub2 + markSub3)/3 +"<br>")
// }

// function per(){

//     var total = 300;
// var totObtained = markSub1+markSub2+markSub3;
// document.write("PERCENTAGE IS : " + " " + (totObtained/total)*100 +"<br>")

// }
// average()
// per()
// }

// mainFunc();


//q5
// function wal(a) {
//     return a.indexOf('waleed');
//   }
  
//   var result = wal(['a', '123124234', 'waleed', 'shaikh', 'hello']);
  
//   alert(result);




//q6
// var string = prompt("ENTER ANY SENTENCE :");

// string = string.replace( /[aeiou]/g, '' );
// alert(string);


//q7

// function countOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//         default:
//             document.write(str)

//         }

// }

// countOccurrences()



//q8

// function kiloMeterFind(){
// var kilometers= prompt("ENTER THE DISTANCE")

// var meters = kilometers*1000;

// var centimeters = kilometers * 1000 * 100;
// var feet = kilometers * 3280.84;
// var inches = kilometers * 39370.08;

// document.write("The distance in Meters : " + meters + "<br>" + "The distance in Feet : " + feet + "<br>"+ "The distance in Inches : " + inches + "<br>" + "The distance in Centimeters : " + centimeters + "<br>" )
// }

// kiloMeterFind();


//q9
// function overTime()
// {
// var above40 = prompt("Enter the Hours for an employee worked above 40 hours : ")

// var i=1;
//  while(i <= time)
//  {
//   above40 = i*12;
//   i++;
//  }
//  document.write("Overtime of this employee is Rs " + above40);

// }

// overTime();


//q10
// function cashier()
// {
//     var amount = prompt("ENTER THE AMOUNT TO BE WITHDRAW!! ")

//     var calc100 = document.write("Notes of Rs. 100 : " + Math.trunc(amount/100)+"<br>")
//     var calc50 = document.write("Notes of Rs. 50 : " + Math.trunc((amount % 100) /50)+"<br>" )
//     var calc10 = document.write("Notes of Rs. 10 : " + Math.trunc((amount % 100) %50 /10) +"<br>")

// }

//    cashier();
   