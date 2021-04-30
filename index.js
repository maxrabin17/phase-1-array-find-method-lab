function superbowlWin(seasons){
    console.log(seasons)
    let answer = seasons.find(function(season){
        if(season.result === "W"){
            return true
        } else {
            return undefined
        }
    })

    return answer !== undefined ? answer.year : undefined
}