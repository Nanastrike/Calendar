export function initViewSelect() {
    const viewSelectElement = document.querySelector("[data-view-select");
    console.log(viewSelectElement);

    viewSelectElement.addEventListener("change", (event) => {
        viewSelectElement.dispatchEvent(new CustomEvent("view-change", {
            detail: {
                view: viewSelectElement.value
            },
            bubbles: true
        }));
    });

    document.addEventListener("view-change",(event)=>{
        viewSelectElement.value =event.detail.view;
    });
}