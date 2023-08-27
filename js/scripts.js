const form = document.querySelector("#form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-requerid")
const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function erro(index){
    campos[index].style.border = '1px solid red'
    spans[index].style.visibility = 'visible';
}

function removeErro(index){
    campos[index].style.border = '1px solid green'
    spans[index].style.visibility = 'hidden';
}

function nameValidate(){
    if( campos[0].value.length < 3){
        erro(0);
    }else{
        removeErro(0)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        erro(1)
    }else {
        removeErro(1)
    }
}

function senhaValidate(){
    if(campos[2].value.length < 8){
        erro(2)
    }else{
        removeErro(2)
    }
}

function senhaConfirma(){
    if(campos[2].value){
        if(campos[2].value == campos[3].value){
            removeErro(3)
        }else {
            erro(3)
        }
    }else{
        erro(3)
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    nameValidate()
    emailValidate()
    senhaValidate()
    senhaConfirma()
})
