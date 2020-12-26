// https://itnext.io/creating-a-twitter-bot-in-5am-2a42a9920e67

tweetDayData = [
    'today is the 1st of Winter, a Mercury Day!',
    'today is the 2nd of Winter, a Venus Day!',
    'today is the 3rd of Winter, a Earth Day!',
    'today is the 4th of Winter, a Mars Day!',
    'today is the 5th of Winter, a Jupiter Day!',
    'today is the 6th of Winter, a Saturn Day!',
    'today is the 7th of Winter, a Uranus Day!',
    'today is the 8th of Winter, a Neptune Day!',
    'today is the 9th of Winter, a Pluto Day!',
]

let now = new Date()
let start = new Date(now.getFullYear(), 0, 0)
let leapQ = now.getFullYear()
let diff = now - start
let oneDay = 1000*60*60*24
let gregDay = Math.floor(diff/oneDay)
console.log("dayOyear:", gregDay)
let day = 0
if (leapQ % 4 !== 0 && gregDay >= 355){
    day = gregDay-355
} else if (leapQ % 4 !== 0 && gregDay < 355){
    day = gregDay+11
} else if (leapQ % 4 === 0 && gregDay >= 356){
    day = gregDay-356
}
console.log("newDay:", day)

let theTweet = tweetDayData[day]

console.log("helpers tweet:", theTweet)
