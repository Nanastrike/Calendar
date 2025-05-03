export function initEventStore(){
    document.addEventListener("event-create",(event)=>{
        const createdEvent = event.detail.event;
        const events = getEventsFromLocalStorage();
        event.push(createdEvent);
        saveEventIntoLocalStorage([createdEvent]);
    });
}

function saveEventIntoLocalStorage(evnets){
    const safeToStringifyEvents = events.map((event)=>({
        ...event,
        date:event.date.toISOString()
    }));

    let stringifiedEvents;
    try{
        stringifiedEvents = JSON.stringify(safeToStringifyEvents);
    }catch(error){
        console.error("stringify event failed",error);
    }

    localStorage.setItem("events",stringifiedEvents);
}

    function getEventsFromLocalStorage(){
        const localStorageEvents = localStorage.getItem("events");
        if(localStorageEvents === null){
            return [];
        }

    let parsedEvents;
    try{
        parsedEvents = JSON.parse(localStorageEvents);
    }catch(error){
        console.error("Parse events failed",error);
        return [];
    }

    const events = parsedEvents.map((event)=>({
        ...event,
        date:new Date(event.date)
    }));

    return events;
    }