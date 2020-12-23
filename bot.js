const config = require('./config')
const twit = require('twit')
const T = new twit(config)

import tweetData from './data/tweetData'

function tweet(){
    T.post(
        'statuses/update', 
        { status: 'hello new world, here we come!' }, 
        function(err, data, response) {
            console.log(data)
        }
    )
}
setInterval(tweet, 3600000)

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