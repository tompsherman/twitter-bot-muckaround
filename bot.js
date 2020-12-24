const config = require('./config')
const twit = require('twit')
const T = new twit(config)

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

tweetQuoteData = [
    `"you cannot manage what you cannot measure" - Peter Drucker`,

]

let timing = {
    twelveHour: 43200000,
    eightHour: 28800000,
    sixHour: 21600000,
    fourHour: 1440000,
    threeHour: 10800000,
    twoHour: 7200000,
    oneHour: 3600000,
    thirtyMin: 1800000,
    fifteenMin: 900000,
}

let now = new Date()
let start = new Date(now.getFullYear(), 0, 0)
let diff = now - start
let oneDay = 1000*60*60*24
let gregDay = Math.floor(diff/oneDay)
console.log("dayOyear:", gregDay)
let day = 0
if (gregDay >= 355){
 day = gregDay-354
} else {
 day = gregDay+11
}

function tweetDay(){
    let i = day
    let twit = tweetDayData[i]
    console.log(twit)
    T.post(
        'statuses/update', 
        { status: `${twit}` }, 
        function(err, data, response) {
            console.log(data)
        }
    )
}
setInterval(tweetDay, timing.fourHour)

function retweet(){
// params object outlines the parameters of the search
    let params = {
        q: '#theNewCalendar',
         result_type: 'recent',
         count: 100

    }
//search twitter for statuses
    T.get('search/tweets', params, (err, data, response) => {
        let tweets = data.statuses
        // console.log(tweets)
        if(!err) {
            for (let dat of tweets) {
                let retweetId = dat.id_str;
                T.post('statuses/retweet/:id', {id: retweetId}, (err, response) => {
                    if (response){
                    } else if (err){
                        console.log('something went wrong while retweeting')
                    }

                })
            }
        }
    })

}
setInterval(retweet, 15000)