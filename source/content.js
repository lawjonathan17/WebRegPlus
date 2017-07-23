

var courseList = document.getElementsByClassName("course-list");
var cells = document.getElementsByTagName('td');


/*
var port = chrome.runtime.connect({name:"wr+"});
*/

/*
port.onMessage.addListener(function(msg){
    if(msg.question == "Who is this?"){
        port.postMessage({answer: "Jonathan"});
    }
    else if (msg.question == "Jonathan who?"){
        port.postMessage({answer: "Jonathan Law"});
    }
});
*/




for (var k = 0; k < cells.length; k++){
    if (cells[k].backgroundColor = "D5E5EFF" && (cells[k].innerHTML.indexOf(",") != -1)){
        if (cells[k].innerHTML.indexOf("<") == -1 && 
            cells[k].innerHTML.indexOf(":") == -1 && 
            cells[k].innerHTML.indexOf("&") == -1){
            
            var fullName = cells[k].innerHTML;
            var splitName = fullName.split(/[\s,]+/);
            
            //creating the URL to search
            var baseURL = "http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=University+of+California+Irvine&queryoption=HEADER&query=NAME&facetSearch=true[1]";
            var newURL = baseURL.replace("NAME", splitName[0]);
           
            var link = document.createElement('a');
            link.setAttribute('href', newURL);
            link.innerHTML = "+";
            cells[k].appendChild(link);
            
            
            /////
            chrome.storage.local.set({url: newURL})
            
            /////

            
            //sending a message from the content script to the 
            
            chrome.runtime.sendMessage({greeting: "ready", url: newURL, lastName: splitName[0], firstName: splitName[1]}, function(response) {
                console.log(counter);
            });
            //response is the scores
            
            /*
            chrome.runtime.onMessage.addListen(function(msg, _, sendResponse) {
                console.log("Message from bg page: " + msg);
            })
            */
            
            
            
            /*chrome.runtime.sendMessage({url: newURL, lastname: splitName[0], firstname: splitName[1]}, function(response){
                console.log(response);
            });
            */
            
            //reading a message from the background 
            /*chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
        if (request.greeting == "hello")
          sendResponse({farewell: "goodbye from cs"});
      });*/

            
        }
    }
}
