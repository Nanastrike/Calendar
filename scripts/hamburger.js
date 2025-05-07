export function initHamburger(){
    const hamburgergetButtonElement = document.querySelector("[data-hamburger-button]");

    hamburgergetButtonElement.addEventListener("click",()=>{
        hamburgergetButtonElement.dispatchEvent(new CustomEvent("mobile-sidebar-open-request",{bubble:true}));
    });
}