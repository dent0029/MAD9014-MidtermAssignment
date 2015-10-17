var loadInfo = {};
var nextPerson = {};
var jsonInfo = {};
var currentPerson = 0;
var ammount;
var tempFlag = 0;
var newInfo = document.getElementById("output1");
var oldInfo = document.getElementById("output2");
var showButtonVal = "Complete";

document.addEventListener("DOMContentLoaded", function (event)
{
    loadInfo = document.getElementById("loadBtn");
    nextPerson = document.getElementById("showBtn")
    loadInfo.addEventListener("click", loadInfo);
    nextPerson.addEventListener("click", next);

});

function loadInfo() 
{
    console.log("loadInfo()");
    var request = new XMLHttpRequest();
    
    req.open('GET', 'https://raw.githubusercontent.com/dent0029/MAD9014-MidtermAssignment/gh-pages/users.json', false);
    req.onreadystatechange = function() 
    {
        if(req.readyState == 4) 
        {
            if(req.status == 200) 
            {
                parseJson(request.responseText);
            }
        }
    }
    if (loadInfo.className === 'btn enabled') 
    {
        req.send(null);
    }

}

function parseJson(obj) 
{
    jsonInfo = JSON.parse(obj);
    ammount = jsonInfo.length;
    loadInfo.className = "btn disabled";
    loadInfo.removeEventListener('click', loadInfo);
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
    if (currentPerson === (ammount - 1)) 
    {
        nextPerson.classList.remove = "btn enabled" ;
		nextPerson.classList.add = "btn disabled" ;
		nextPerson.removeEventListener( "click", loadInfo);
		nextPerson.innerHTML = showButtonVal;
    }
    currentPerson++;
    console.log("next()");
}

function setFeedByIndex(index) 
{
var newInfo = document.getElementById("output1");
    
    newInfo.innerHTML = '<img src="' + jsonInfo[index]['image'] + '"><h2>' + toTitleCase(jsonInfo[index]['firstName']) + ' ' + toTitleCase(jsonInfo[index]['lastName']) + '</h2><a href="mailto:' + jsonInfo[index]['email'] + '">' + jsonInfo[index]['email'] + '</a></div>';
    
    if (currentPerson != 0) 
        var oldInfo = document.getElementById("output2");
        var info = oldInfo.innerHTML
    {
        console.log(tempFlag);
        
        info = info + '<div class="oldData"><div><img src="' + jsonInfo[index - 1]['thumbnail'] + '"><a href="mailto:' + jsonInfo [index - 1]['email'] + '">' + toTitleCase(jsonInfo[index - 1]['firstName']) + ' ' + toTitleCase(jsonInfo[index - 1]['lastName']) + '</a></div></div>';
        
        oldInfo.innerHTML = info;
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