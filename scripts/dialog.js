import { waitUntilAnimationsFinish } from "./animation.js";

export function initDialog(name){
    const dialogElement = document.querySelector( `[data-dialog=${name}]`);
    const closeButtonElements = document.querySelectorAll("[data-dialog-close-button]");

    function close(){
        dialogElement.classList.add("dialog--closing");
        
        return waitUntilAnimationsFinish(dialogElement).then(()=>{
            //确保二次点击时dialog会弹出
            dialogElement.classList.remove("dialog--closing");
            dialogElement.close();
        })
        .catch((error)=>{
            console.error("Finish dialog animation promise failed",error);
        });
    }

    for(const closeButtonElement of closeButtonElements){
        closeButtonElement.addEventListener("click",()=>{
            close();
        });
    }

    dialogElement.addEventListener("click",(event)=>{
        //dialog是整个屏幕，弹窗是内容区域
        if(event.target === dialogElement){
            close();
        }
    });

    dialogElement.addEventListener("cancel",(event)=>{
        event.preventDefault();
        close();
    });

    return {
        dialogElement,
        open(){
            dialogElement.showModal();
        },
        close(){
            return close();
        }
    };
}