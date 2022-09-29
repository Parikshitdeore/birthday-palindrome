var inputdate=document.querySelector("#input-date")
var button=document.querySelector("#button")
var output = document.querySelector("output")

button.addEventListener("click",checkIfPalindrome)

function checkIfPalindrome(){
var date = getDate(inputdate.value)
var palindrome=isPalindromeForAllFormats(date)
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

function getAllDateFormats(date){
    var ddmmyyyy=[date.day+date.month+date.year]
    var mmddyyyy=[date.month+date.day+date.year]
    var yyyymmdd=[date.year+date.month+date.day]
    var ddmmyy=[date.day+date.month+date.year.slice(-2)]
    var mmddyy=[date.month+date.day+date.year.slice(-2)]
    var yymmdd=[date.year.slice(-2)+date.month+date.day]
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}

function isPalindromeForAllFormats(date){
var listOfPalindrome=getAllDateFormats(date)
var palindrome=false
for (let i = 0; i < listOfPalindrome.length; i++){
    
    if(isPalindrome(listOfPalindrome[i])===true){
        palindrome=true;
        break;
    }
}
console.log(palindrome)
return palindrome
}