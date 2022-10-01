var inputdate=document.querySelector("#input-date")
var button=document.querySelector("#button")
var output = document.querySelector("#output")

button.addEventListener("click",checkIfPalindrome)

function checkIfPalindrome(){
var date = getDate(inputdate.value)
var backupdate=date
var palindrome=isPalindromeForAllFormats(date)
console.log(palindrome)
//testing with temp
console.log(getNextPalindromeDate(backupdate))
}



function reverseStr(date){
var chars=date
chars = chars.split('');
var revchars = chars.reverse();
var reversed=revchars.join('')
return reversed

}

function isPalindrome(date){
    var str=date[0];
    var reversed=reverseStr(str)
    return str===reversed;
}

function getDate(userdate){
    var splitdate = userdate.split("-")
    var date={
        day:splitdate[2],
        month:splitdate[1],
        year:splitdate[0]
    }
return date
}
function getDateAsString(date) {
    var dateInStr = { day: "", month: "", year: "" };
  
    if (date.day < 10) {
      dateInStr.day = "0" + date.day;
    } else {
      dateInStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateInStr.month = "0" + date.month;
    } else {
      dateInStr.month = date.month.toString();
    }
  
    dateInStr.year = date.year.toString();
    return dateInStr;
  }

function getAllDateFormats(date){
    var ddmmyyyy=[date.day+date.month+date.year]
    var mmddyyyy=[date.month+date.day+date.year]
    var yyyymmdd=[date.year+date.month+date.day]
    var ddmmyy=[date.day+date.month+date.year.slice(-2)]
    var mmddyy=[date.month+date.day+date.year.slice(-2)]
    var yymmdd=[date.year.slice(-2)+date.month+date.day]
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}
//palindrome list
function isPalindromeForAllFormats(date){
var listOfPalindrome=getAllDateFormats(date)
var palindrome=false
var palindromeList

for (var i = 0; i < listOfPalindrome.length; i++) {
    var result = isPalindrome(listOfPalindrome[i]);
    // palindromeList.push(result);
  }
  console.log(palindromeList)
  return palindromeList;
}

function isLeapYear(year){
 if(year%4===0){
return true;
}
 if(year % 100===0)
return false;

}
//part2 - incomplete


// function getNextDate(date){
//     day =   (date.day+1);
//     month=  (date.month);
//     year =  (date.year);

//    var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31]
   
//    if(month===2){
   
//        if(isLeapYear(year)){
//            if(day>29){
//                day=1;
//                month++;
//            }
//        }
//        else {
//            if(day>28){
//                day=1;
//                month++;
//        }
//    }
//    }
//    else{
//        if(day>daysInMonth[month-1])
//        day=1
//        month++;
//    }
//    if(month>12){
//        month=1;
//        year++;
//    }
//      return {day:day,month:month,year:year}
// }

// function getNextPalindromeDate(date){
//        var count=0
//        var nextDate=getNextDate(date);
//        while(1){
//         count++
//         var dateStr=getDateAsString
//         resultlist =isPalindromeForAllFormats(dateStr)
//             for (let i = 0; i < resultList.length; i++) {
//                 if (resultList[i]) {
//                     console.log(date,nextDate)
//                   return [count, nextDate];
//                 }
//               }
//               nextDate = getNextDate(nextDate);
//             }
//         }