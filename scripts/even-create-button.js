


export function initEventCreateButton(){
    const buttonElement = document.querySelector("[date-event-create-button]");

    buttonElement.addEventListener("click",()=>{
        buttonElement.dispatchEvent(new CustomEvent("event-create-request",{
            bubbles:true
        }));
    });
}