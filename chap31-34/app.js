//q1
// var a= new Date();
// document.write(a)


//q2

// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,7);
// document.write(c+"uary")

//q3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,4);
// document.write("Today is : "+ c)

//q4
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write("its mondayy")
// }else if(c === "Tue"){
//     document.write("its Tuesdayy")
// }else if(c === "Wed"){
//     document.write("its Wednesdayy")
// }else if(c === "Thr"){
//     document.write("its Thursdayy")
// }else if(c === "Fri"){
//     document.write("its Fridayy")
// }

//q5
// var a = new Date ();

// if(new Date <= 15){

// alert("First Fifteen days of Month")
// }

// else{

//     alert("Last days of the Month")
//     }

//q6
var date = new Date();
var milliSecondsSinceJan1970 = date.getTime();
var minutesSinceJan1970 = milliSecondsSinceJan1970 / 60000;
document.write("Current Date: "+date+"</br>");
document.write("Elapsed milliseconds since January 1, 1970: "+milliSecondsSinceJan1970+"</br>");
document.write("Elapsed minutes since January 1, 1970: "+minutesSinceJan1970+"</br>");

    


//q7
    // var a = new Date();
    // var b = a.toString();
    // var c = b.slice(16,19);
    // if (c === "12:"){
    //     document.write("It's PM")
    // }else if(c === "13:"){
    //     document.write("It's PM")
    // }else if(c === "14:"){
    //     document.write("It's PM")
    // }else if(c === "15:"){
    //     document.write("It's PM")
    // }else if(c === "16:"){
    //     document.write("It's PM")
    // }else if(c === "17:"){
    //     document.write("It's PM")
    // }else if(c === "18:"){
    //     document.write("It's PM")
    // }else if(c === "19:"){
    //     document.write("It's PM")
    // }else if(c === "20:"){
    //     document.write("It's PM")
    // }else if(c === "21:"){
    //     document.write("It's PM")
    // }else if(c === "22:"){
    //     document.write("It's PM")
    // }else if(c === "23:"){
    //     document.write("It's PM")
    // }else if(c === "24:"){
    //     document.write("It's AM")
    // }else if(c === "01:"){
    //     document.write("It's AM")
    // }else if(c === "02:"){
    //     document.write("It's AM")
    // }else if(c === "03:"){
    //     document.write("It's AM")
    // }else if(c === "04:"){
    //     document.write("It's AM")
    // }else if(c === "05:"){
    //     document.write("It's AM")
    // }else if(c === "06:"){
    //     document.write("It's AM")
    // }else if(c === "07:"){
    //     document.write("It's AM")
    // }else if(c === "08:"){
    //     document.write("It's AM")
    // }else if(c === "09:"){
    //     document.write("It's AM")
    // }else if(c === "10:"){
    //     document.write("It's AM")
    // }else if(c === "11:"){
    //     document.write("It's AM")
    // }

//q8
// 
// var a = new Date();
//  a.setMonth(11);
//  a.setFullYear(2020)
// a.setDate(31)

// document.write(a)

//q9
// var day = new Date("June 18, 2015");
// document.write("1st RAMADAN WAS ON :" + day)

//q10
// var a= new Date ("December 05,2015")
// var b =new Date();
// var c = b - a;
// var d = c/6000;

// document.write(d);



//q12

// var c = new Date();
// var d = new Date((100-c));

// document.write("TODAY DATE IS : " + c + " 100 YEAR BACK WAS :" + d)


//q13
// var a = new Date();

// var b= a.getTime();

// var c = new Date(prompt("ENTER YOUR MONTH/ DAY ,YEAR"));

// var d= c.getTime();

// var e = b - d;

// var age = e / (1000*60*60*24*365);

// var finalAge= Math.floor(age);
// document.write("<h1> YOUR CURRENT AGE IS : " + finalAge);


