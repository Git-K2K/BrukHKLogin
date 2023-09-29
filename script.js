//Denna funktion visar inloggningsstatusen när sidan laddas på nytt
window.onload = function()
{
    const Status = localStorage.getItem("Status");
    if (Status === "Inloggad")
    {
        inloggad();
    }
    
    
       
}
//I denna funktion finns if och else satser som gör att om inloggningsinfo = true så förs vi vidare till funktionen "inloggad" och inloggningsinformationen lagras i localstorage
//om inloggningsinformationen = false så visas formbox3 vilket är ett felmeddelande
function loggain(event) 
{
event.preventDefault();

//Skapat två konstanta variabler en för användarnamn och en för lösenord
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

//Om Namn=Bella och Lösenord=qwe123 så kommer formbox2 att visas
if(username==="Bella" && password==="qwe123")
{
 
    localStorage.setItem("Status", "Inloggad");
    inloggad();
    

}
//Om fel namn eller lösenord matas in så dyker formbox3 upp där ett felmeddelande visas
else
{
    document.getElementById("formbox1").style.display = "none";
    document.getElementById("formbox3").style.display = "block";
    
}

}

//När jag tryckt på "logga in" knappen så förs jag vidare till formbox2 där jag får upp ett meddelande om att jag är inloggad
function inloggad()
{
     
    document.getElementById("formbox1").style.display = "none";
    document.getElementById("formbox2").style.display = "block";
    
}

//Denna funktion gör att jag kan gå tillbaka till inloggningsformen efter att jag tryckt på "logga ut" knappen.
function loggaut(event)
{
    event.preventDefault(); 
    //Det som sparats i localstorage försvinner
    localStorage.removeItem("Status");
    document.getElementById("formbox1").style.display = "block";
    document.getElementById("formbox2").style.display = "none";
    
    // Detta gör att efter jag tryckt på "logga ut" så försvinner inloggningsinformationen på formbox1
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    
}

//Denna funktion gör att jag kan gå tillbaka till inloggningsformen efter att jag tryckt på "Försök igen" knappen.
function tryagain(event)
{
    event.preventDefault();
    document.getElementById("formbox1").style.display = "block";
    document.getElementById("formbox3").style.display = "none";
    
    // Detta gör att efter jag tryckt på "försök igen" så försvinner inloggningsinformationen på formbox1
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}

