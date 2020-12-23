module.exports =
function runTest(){

    Logger.log("hello, New World, here we come!")

    let now = new Date()
    let start = new Date(now.getFullYear(), 0, 0)
    let diff = now - start
    let oneDay = 1000*60*60*24
    let gregDay = Math.floor(diff/oneDay)
    Logger.log("dayOyear:", gregDay)
    let day = 0
    if (gregDay >= 355){
      day = gregDay-354
    } else {
      day = gregDay+11
    }
        
    var cell = "b" + day
    Logger.log("cell:", `${cell}`)

    let tweet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("tweetList").getRange(`${cell}`).getValues()
    
    Logger.log("tweet:", `${tweet}`)
    return tweet
}

