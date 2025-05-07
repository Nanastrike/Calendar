const broadcastChannel = new BroadcastChannel("evnets-change-channel");

export function initSync(){
    broadcastChannel.addEventListener("message",()=>{
        document.dispatchEvent(new CustomEvent("events-change",{
            detail:{
                source:"broadcast-channel"
            },
            bubbles:true
        }));
    });

    document.addEventListener("event-change",(event)=>{
        if(event?.detail?.source !== "broadcast-channel"){
            broadcastChannel.postMessage({});
        }
    });
}