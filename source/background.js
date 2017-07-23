//https://developer.chrome.com/extensions/event_pages


//read the message sent from the Content Script
chrome.runtime.onMessage.addListener(
    function(msg, _, sendResponse) {
        //var x = response.url;
        if (msg.greeting == "ready"){
            sendResponse(counter: 7);
        }
        //sendResponse({reply: request.url});
        //console.log(response.url);
        //console.log(response.lastName);
        /*
        $.get(message.newURL, function(data){
        professors = $(data).find(".listing PROFESSOR");
        console.log(professors);
        sendResponse(professors);
        */
    });
  });




/*
chrome.runtime.onConnect.addListener(function(port){
    console.assert(port.name == "wr+");
    //port.postMessage({message: "Give m"}
    port.onMessage.addListener(function(msg){
        if (msg.message == "Ready"){
            port.postMessage({response: "Ready too"});
        }
        else {
            console.log(msg.newURL);
            console.log(msg.firstName);
            console.log(msg.lastName);
            
            
            $.get(msg.newURL, function(data){
                professors = $(data).find(".listing PROFESSOR");
                console.log(professors);
            })
            
        }
    })
    
});
*/



