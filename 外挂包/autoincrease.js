function increase(){
    var score = document.getElementsByClassName('score')[0];
    var totalScore = 0;
    var addnum = 41;
    var timer = setInterval(function add(){
        totalScore += addnum;
        //console.log(totalScore);
        score.innerText = "得分：" + totalScore + "分";
    },100)
}

