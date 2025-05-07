import { initDialog } from "./dialog.js";

export function initMobileSideBar(){
    const dialog = initDialog("mobile-sidebar");

    document.addEventListener("mobile-sidebar-open-request",()=>{
        dialog.open();
    });

    document.addEventListener("date-change",()=>{
        dialog.close();
    });
}