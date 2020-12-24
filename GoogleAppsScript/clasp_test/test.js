// function runTest(){

//     Logger.log("hello, New World, here we come!")

    
        
//     var cell = "b" + day
//     Logger.log("cell:", `${cell}`)

//     let tweet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("tweetList").getRange(`${cell}`).getValues()
    
//     Logger.log("tweet:", `${tweet}`)
//     return tweet
// }
// runTest()

// function tweet(){
//     T.post(
//         'statuses/update', 
//         { status: `${tweet}` }, 
//         function(err, data, response) {
//             console.log(data)
//         }
//     )
// }
// setInterval(tweet, 3600000)