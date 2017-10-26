var scoreTypeA = 0;
var scoreTypeB = 0;
var scoreTypeC = 0;
var scoreTypeD = 0;
var typeDic = {};
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
    //alert(scoreTypeB);
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
    //alert(scoreTypeC);
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
    //alert(scoreTypeD);
    return scoreTypeD;
} 
//function getPage()
//{
//    $("a#next").click(function ()
//    {
//        var temp = $("span#counter").text();
//        var page = temp.split('/')[0];
//        alert(page);
//        return page;
//    });
//}
//function checkAllQuestions() 
//{
//    alert(page);
//    var radio = "radio" + page;
//    alert(radio);
//        //is selected
//        if ($("input[name='" + radio + "']:checked").length) 
//        {
//            alert("good");
//        }
//        else 
//        {
//            alert('You have to choose one choice!');
//            window.location.href = "#" + "slide=" + i;
//        }

//    }



function checkAllQuestions_original() {

    for (var i = 1; i <= 16; i++)
    {
        var radio = "radio" + i;
        var isSelected = false;
        if ($("input[name='" + radio + "']:checked").length)
        {
            isSelected = true;
        }
        else {
            isSelected = false;
            alert('You have to choose one choice!');
            window.location.href = "#" + "slide=" + (i+1);
            break;
        }

    }
    if (isSelected) {
        alert("You have finished the test!");
    }
}
function getHighScore1()
{
    typeDic = { "TypeA": getScoreTypeA(), "TypeB": getScoreTypeB(), "TypeC": getScoreTypeC(), "TypeD": getScoreTypeD() };
    //var arrayScore = [getScoreTypeA(), getScoreTypeB(), getScoreTypeC(), getScoreTypeD()];
    //arrayScore.sort(function (a, b) { return b - a });
    //var score1 = arrayScore[0];
    var result = Object.keys(typeDic).sort(function (a, b) {
        return typeDic[b] - typeDic[a];
    });
    //alert(result[0]);
    return result[0];
}
//function getHighScore2() {
//    typeDic = { "TypeA": getScoreTypeA(), "TypeB": getScoreTypeB(), "TypeC": getScoreTypeC(), "TypeD": getScoreTypeD() };
//    //var arrayScore = [getScoreTypeA(), getScoreTypeB(), getScoreTypeC(), getScoreTypeD()];
//    //arrayScore.sort(function (a, b) { return b - a });
//    //var score1 = arrayScore[0];
//    var result = Object.keys(typeDic).sort(function (a, b) {
//        return typeDic[b] - typeDic[a];
//    });
//    //alert(result);
//    return result[1];
//}
function showTypeResults()
{
    //alert(getHighScore1());
    var textType1 = "Your dominant type is:  ";

    //document.getElementById("Type2").innerHTML = getHighScore2();
    if (getHighScore1() == "TypeA")
    {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1()+"<br>"+ showTypeAExplaination();
    }
    else if (getHighScore1() == "TypeB") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeBExplaination();
    }
    else if (getHighScore1() == "TypeC") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeCExplaination();
    }
    else if (getHighScore1() == "TypeD") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeDExplaination();
    }

}
function showTypeAExplaination()
{
    var explain_a = "Basically, you are impatient, controlling, energetic, highly competitive, ambitious, and have a difficult time relaxing.";
    return explain_a;

}
function showTypeBExplaination() {
    var explain_b = "Basically, you are much more relaxed, patient, and easy-going.";
    return explain_b;

}
function showTypeCExplaination() {
    var explain_c = " Basically, you are responds to stress with depression and a sense of hopelessness, and has a higher risk for developing cancer. You tend to be introverted, respectful, eager to please, and compliant.";
    return explain_c;
}
function showTypeDExplaination() {
    var explain_d = "Basically, you experienced increased levels of anxiety, irritation, and depressed mood and had a three-fold increased risk for future cardiovascular problems";
    return explain_d;
}
