//http://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function toTitleCase(str) 
{
    return str.replace(/\w\S*/g, function(txt) 
            {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
    
}
var loadInfo = {};
var nextPerson = {};
var jsonInfo = {};
var currentPerson = 0;
var ammount;
var tempFlag = 0;
var request = new XMLHttpRequest();
var newInfo = document.getElementById("new");
var oldInfo = document.getElementById("old");
var file = 'https://raw.githubusercontent.com/dent0029/MAD9014-MidtermAssignment/gh-pages/users.json';
var showButtonVal = "Complete";

document.addEventListener("DOMContentLoaded", function (event)
{
    loadInfo = document.getElementById("loadButton");
    nextPerson = document.getElementById("showButton")
    loadInfo.addEventListener('click', loadData);
    nextPerson.addEventListener('click', next);

});

function loadInfo() 
{
    console.log("loadInfo()");
    request.open('GET', file, false);
    request.onreadystatechange = function() 
    {
        if(request.readyState === 4) 
        {
            if(request.status === 200) 
            {
                myData(request.responseText);
            }
        }
    }
    if (loadInfo.className === 'button enabled') 
    {
        request.send(null);
    }

}

function parseJson(obj) 
{
    jsonInfo = JSON.parse(obj);
    ammount = jsonInfo.length;
    loadInfo.className = "button disabled";
    loadInfo.removeEventListener('click', loadInfo);
    nextPerson.className = "button enabled";
}

function next() 
{
    if (nextPerson.innerHTML != 'Show Next') 
    {
        console.log("Please show next");
        nextPerson.innerHTML = 'Show Next';
    }

    if (currentPerson < ammount) 
    {
        setFeedByIndex(currentPerson);
    }
    if (currentPerson === (ammount - 1)) 
    {
        nextPerson.classList.remove = "button enabled" ;
		nextPerson.classList.add = "button disabled" ;
		nextPerson.removeEventListener( "click", loadInfo);
		nextPerson.innerHTML = showButtonVal;
    }
    currentPerson++;
    console.log("next()");
}

function setFeedByIndex(index) 
{
var newInfo = document.getElementById("new");
    newInfo.innerHTML = '<img src="' + jsonInfo[index]['image'] + '"><h2>' + toTitleCase(jsonInfo[index]['firstName']) + ' ' + toTitleCase(jsonInfo[index]['lastName']) + '</h2><a href="mailto:' + jsonInfo[index]['email'] + '">' + jsonInfo[index]['email'] + '</a></div>';
    
    if (currentPerson != 0) 
        var oldInfo = document.getElementById("old");
        var data = oldInfo.innerHTML
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