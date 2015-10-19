var newPerson = {};
var nextPerson = {};
var newInfo;
var jsonInfo = {};
var currentPerson = 0;
var ammount;
var tempFlag = 0;
var newInfo;
var oldInfo;
var showButtonVal = "Complete";

document.addEventListener("DOMContentLoaded", function (event)
{
    newPerson = document.getElementById("loadBtn");
    nextPerson = document.getElementById("showBtn")
    newPerson.addEventListener("click", loadInfo);
    newInfo = document.getElementById("output1");
    oldInfo = document.getElementById("output2");
});

function loadInfo() 
{
    var req = new XMLHttpRequest();
    
    req.open('GET', 'https://raw.githubusercontent.com/dent0029/MAD9014-MidtermAssignment/gh-pages/users.json', true);
    req.onreadystatechange = function() 
    {
        if(req.readyState == 4) 
        {
            if(req.status == 200) 
            {
                parseJson(req.responseText);
                nextPerson.addEventListener("click", next);
            }
        }
    }
    if (newPerson.className === 'btn enabled') 
    {
        req.send(null);
    }

}

function parseJson(obj) 
{
    jsonInfo = JSON.parse(obj);
    ammount = jsonInfo.length;
    console.log(ammount);
    newPerson.className = "btn disabled";
    newPerson.removeEventListener('click', loadInfo);
    nextPerson.className = "btn enabled";
}

function next() 
{
    if (nextPerson.innerHTML != 'Show Next') 
    {
        nextPerson.innerHTML = 'Show Next';
    }

    if (currentPerson < ammount) 
    {
        setFeedByIndex(currentPerson);
    }
    if (currentPerson > (ammount - 1)) 
    {
        nextPerson.removeEventListener("click", next)
        alert("You have completed the webpage!")
    }
    currentPerson++;
    console.log("next()");
}

function setFeedByIndex(index) 
{
    newInfo.innerHTML = '<img src="' + jsonInfo[index].image + '"><h2>' + toTitleCase(jsonInfo[index].firstName) + ' ' + toTitleCase(jsonInfo[index].lastName) + '</h2><a href="mailto:' + jsonInfo[index].email + '">' + jsonInfo[index].email + '</a></div>';
        console.log(newInfo.innerHTML);
    if (index != 0) 
        
        var info = oldInfo.innerHTML
    {
        if(index>0)
            
        { info = info + '<div class="oldInfo"><div><img src="' + jsonInfo[index - 1].thumbnail + '"><a href="mailto:' + jsonInfo[index - 1].email + '">' + toTitleCase(jsonInfo[index - 1].firstName) + ' ' + toTitleCase(jsonInfo[index - 1].lastName) + '</a></div></div>';
        
        oldInfo.innerHTML = info;
        }
    }
    if (tempFlag > 2) 
    {
        oldInfo.removeChild(oldInfo.childNodes[1]);
    }
    tempFlag++;
}

//http://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function toTitleCase(str) 
{
    return str.replace(/\w\S*/g, function(txt) 
            {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
    
}