var bdayInput = document.querySelector("#input-date");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click", clickHandler);

function clickHandler() {
  var bdayString = bdayInput.value;

  if (bdayString !== "") {
    var date = bdayString.split("-");
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    var date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };

    var dateStr = getDateAsString(date);
    var list = isPalindromeForAllDateFormats(dateStr);
    var palimdrome = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        palimdrome = true;
        break;
      }
    }

    if (!palimdrome) {
      const [count1, nextDate] = getNextPalindromeDate(date);
      const [count2, prevDate] = getPreviousPalindromeDate(date);

      if (count1 > count2) {
        output.style.color="RED";
        output.innerText = " The nearest palindrome date is "+ prevDate.day +"-"+prevDate.month+"-"+prevDate.year+" , you missed by "+count2+" days."
      } else {
        output.style.color="RED";
        output.innerText = " The nearest palindrome date is "+ nextDate.day +"-"+ nextDate.month+"-"+nextDate.year+" , you missed by " +count1+" days."
      }
    } else {
        output.style.color="GREENYELLOW";
      output.innerText = "Yay! Your birthday is palindrome!";
    }
  }
}



function reverseString(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
  }
  
  function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
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
  
  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  
  function isPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
  function isLeapYear(year) {
    if (year % 400 === 0) return true;
  
    if (year % 100 === 0) return false;
  
    if (year % 4 === 0) return true;
  
    return false;
  }
  
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year,
    };
  }
  
  function getNextPalindromeDate(date) {
    var nextDate = getNextDate(date);
    var count = 0;
  
    while (1) {
      count++;
      var dateStr = getDateAsString(nextDate);
      var resultList = isPalindromeForAllDateFormats(dateStr);
  
      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [count, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }
  
  function getPreviousDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (day === 0) {
      month--;
  
      if (month === 0) {
        month = 12;
        day = 31;
        year--;
      } else if (month === 2) {
        if (isLeapYear(year)) {
          day = 29;
        } else {
          day = 28;
        }
      } else {
        day = daysInMonth[month - 1];
      }
    }
  
    return {
      day: day,
      month: month,
      year: year,
    };
  }
  
  function getPreviousPalindromeDate(date) {
    var previousDate = getPreviousDate(date);
    var count = 0;
  
    while (1) {
      count++;
      var dateStr = getDateAsString(previousDate);
      var resultList = isPalindromeForAllDateFormats(dateStr);
  
      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [count, previousDate];
        }
      }
      previousDate = getPreviousDate(previousDate);
    }
  }
  
 