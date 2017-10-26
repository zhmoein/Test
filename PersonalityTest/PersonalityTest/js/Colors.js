var scoreOrange = 0;
var scoreGreen = 0;
var scoreBlue = 0;
var scoreGold = 0;
var colorDic = {};
function calcscoreOrange() {
    var score = 0;
    $(".Orange:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreOrange() {
    scoreOrange = calcscoreOrange();
    return scoreOrange;
}
function CountOrange()
{
    var countOrange = getScoreOrange() / 100;
    return countOrange;
}
function calcscoreBlue() {
    var score = 0;
    $(".Blue:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeBlue() {
    scoreBlue = calcscoreBlue();
    //alert(scoreTypeB);
    return scoreBlue;
}
function CountBlue() {
    var countBlue = getScoreTypeBlue() / 50;
    return countBlue;
}
function calcscoreGreen() {
    var score = 0;
    $(".Green:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreGreen() {
    scoreGreen = calcscoreGreen();
    //alert(scoreTypeC);
    return scoreGreen;
}
function CountGreen() {
    var countGreen = getScoreGreen() / 75;
    return countGreen;
}
function calcscoreGold() {
    var score = 0;
    $(".Gold:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreGold() {
    scoreGold = calcscoreGold();
    //alert(scoreTypeD);
    return scoreGold;
}
function CountGold() {
    var countGold = getScoreGold() / 25;
    return countGold;
}

function getDomianteColor()
{
    colorDic = { "Orange": CountOrange(), "Blue": CountBlue(), "Green": CountGreen(), "Gold": CountGold() };

    var result = Object.keys(colorDic).sort(function (a, b) {
        return colorDic[b] - colorDic[a];
    });
    //alert(result);
    //alert(result[0]);
    return result[0];
}

function showColorResults() {

    var textType1 = "Your dominant color is:  ";

    //document.getElementById("Type2").innerHTML = getHighScore2();
    if (getDomianteColor() == "Orange") {
        document.getElementById("color").innerHTML = textType1 + getDomianteColor() + "<br>" + showOrangeExplaination();
    }
    else if (getDomianteColor() == "Green") {
        document.getElementById("color").innerHTML = textType1 + getDomianteColor() + "<br>" + showGreenExplaination();
    }
    else if (getDomianteColor() == "Blue") {
        document.getElementById("color").innerHTML = textType1 + getDomianteColor() + "<br>" + showBlueExplaination();
    }
    else if (getDomianteColor() == "Gold") {
        document.getElementById("color").innerHTML = textType1 + getDomianteColor() + "<br>" + showGoldExplaination();
    }

}
function showOrangeExplaination() {
    var explain_orange = "You are short_term driven. Welcomes to changes and variety. You always look for adventure in your life. You are competetive and impulsive.";
    return explain_orange;

}
function showBlueExplaination() {
    var explain_blue = "You are emotionally driven, yuo always seek harmony in groups.You are enthusiastic, creative, and sympathetic";
    return explain_blue;

}
function showGreenExplaination() {
    var explain_green = "You are logically driven. You are independent thinker. You are focused, efficient, an analytical. ";
    return explain_green;
}
function showGoldExplaination() {
    var explain_gold = "you are loyalty driven. you respect rules and authority. You are responsible, orgnized, and appreciative.";
    return explain_gold;
}
