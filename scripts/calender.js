import { today } from "./date.js";
import { initMonthCalendar } from "./month-calendar.js";

export function initCalendar() {
    const calenderElement = document.querySelector("[data-calendar]");
    let selectedView = "month";
    let selectedDate = today();

    function refreshCalendar() {
        calenderElement.replaceChildren();

        if (selectedView === "month") {
            initMonthCalendar(calenderElement,selectedDate);
        } else if (selectedView === "week") {

        } else {

        }
    }



    document.addEventListener("view-change",
        (event) => {
            selectedView = event.detail.value;
            refreshCalendar();
        });

    document.addEventListener("date-change",(event)=>{
        selectedDate = event.detail.date;
        refreshCalendar();
    })

        refreshCalendar();
}