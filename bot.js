const config = require('./config')
const twit = require('twit')
const helpers = require('./helpers')
const {theTweet} = require('./helpers')
const T = new twit(config)



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



function tweetDay(){
    console.log("did the [i] work?")
    T.post(
        'statuses/update', 
        { status: `${helpers.twit}` }, 
        function(err, data, response) {
            console.log(data)
        }
    )
}
setInterval(tweetDay, 15000)

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