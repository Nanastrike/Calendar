import { initDialog } from "./dialog.js";

export function initEventDetailsDialog(){
    const dialog = initDialog("event-details");

    document.addEventListener("event-click",(event)=>{
        dialog.open();
    });
}