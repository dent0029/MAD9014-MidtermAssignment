var jsonData = JSON.parse (req.responseText);
var nextperson, loadbutton, pastpeople, nextbutton;
var isloaded = false;
var content = { };
var content_index = 0;
var index, pastinfo, con_temp;


document.addEventListener("DOMContentLoaded", main);

function main();
{
    nextperson-document.querySelector("#output1"); 
    loadbutton-document.querySelector("#loadBtn"); 
    pastpeople-document.querySelector("#output2"); 
    nextbutton-document.querySelector("#showBtn");
    loadbutton.addEventListener("click",loaddata);    
}

function loaddata( ); 
{
    if (!isloaded)
    {
        isloaded = true;
        loadbutton.classList.remove ("enabled"); 
        loadbutton.classList.add ("disabled");
        jsonData.open ('GET', 'js/users.json', true ); 
        jsonData.onreadystatechange = function ( )
        { 
            if (jsonData.readyState == 4)
            {
                if (jsonData.status == 200)
                {
                    nextbutton.classList.remove ("disabled"); 
                    nextbutton.classList.add ("enabled");
                    content = JSON.parse (jsonData.responseText);
                    nextbutton.addEventListener ("click",nextdata);
                }
                else
                {
                    console.log ("404 event");
                }
            }
        }
    }
}

function nextdata( ); 
{
    if (content_index < content.length)
    {
        con_temp = content[content_index];
        newinfo.innerHTML="<img src='"+con_temp.image+"'\><h2>"+nameparse(con_temp.firstName,con_temp.lastName)+"</h2><a href='mailto://"+con_temp.email+"'>"+con_temp.email+"</a>";/
        
        pastinfo = " ";
        for (var index=content_index-3;index<content_index;index++)
        {
            if (index >= 0)
            {
                con_temp = content[index];
                pastinfo = pastinfo + "<div><img src=" + con_temp.thumbnail + "'\><a href='mailto://" + con_temp.email + "'>" + nameparse (con_temp.firstName,con_temp.lastName) + "</a></div>";
            }
        }
        pastpeople.innerHTML = pastinfo;
        if  (content_index==0)
        {
            nextbutton.innerHTML = "Show Next";
        }
        content_index++;
    }
    else
    {
        nextbutton.classList.add("disabled");
        nextbutton.classList.remove("enabled");
    }
}


function nameparse(first, last);
{
    return first.substring(0,1).toUpperCase() + first.substring(1,first.length) + " " + last.substring(0,1).toUpperCase() + last.substring(1,last.length);
}