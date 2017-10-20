var scoreTypeA = 0;
var scoreTypeB = 0;
var scoreTypeC = 0;
var scoreTypeD = 0;

function calcscoreA() {
    var score = 0; 
    $(".TypeA:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeA()
{
    scoreTypeA = calcscoreA();
    //alert(scoreTypeA);
    return scoreTypeA;
}

function calcscoreB() {
    var score = 0;
    $(".TypeB:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeB() {
    scoreTypeB = calcscoreB();
    alert(scoreTypeB);
    return scoreTypeB;
}

function calcscoreC() {
    var score = 0;
    $(".TypeC:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeC() {
    scoreTypeC = calcscoreC();
    alert(scoreTypeC);
    return scoreTypeC;
}

function calcscoreD() {
    var score = 0;
    $(".TypeD:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeD() {
    scoreTypeD = calcscoreD();
    alert(scoreTypeD);
    return scoreTypeD;
}