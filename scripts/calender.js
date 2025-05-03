export function initCalendar(){
    const monthCalendarElement = document.querySelector("[date-month-calendar]");
    const weekCalendarElement = document.querySelector("[date-week-calendar]");
    const dayCalendarElement = document.querySelector("[date-day-calendar]");


    document.addEventListener("view-change",
    (event)=>{
        const selectedView = event.detail.value;
        if(selectedView === "month"){
            monthCalendarElement.style.display = "flex";
            weekCalendarElement.style.display = "none";
            dayCalendarElement.style.display = "none";
        }else if(selectedView === "week"){
            monthCalendarElement.style.display = "none";
            weekCalendarElement.style.display = "flex";
            dayCalendarElement.style.display = "none";
        }else{
            monthCalendarElement.style.display = "none";
            weekCalendarElement.style.display = "none";
            dayCalendarElement.style.display = "flex";
        }
    });

}