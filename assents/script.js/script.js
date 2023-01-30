class FormSubmit{
    constructor(settings){
        this.settings= settings
        this.form = document.querySelector(settings.form)
        this.formButton= document.querySelector(settings.button)
    if (this.form){
        this.url = this.form.getAttribute("action")
    }
    this.sendForm = this.sendForm.bind(this)
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success
    }
    displayError(){
        this.form.innerHTML = this.settings.error
    }

    getFormObject(){
        const formObject = {}
        const fields = this.querySelectorAll("[name]")
            fields.formEach((fields)=>{
                formObject[fields.getAttribute("name")] = field.value
            })
            return formObject
    }
    onSubmission(event){
        event.preventDefaut()
        event.target.disabled= true
        event.target.innerText = "Enviando"
    }
    async sendForm(event){
        try{
            this.onSubmission(event)
        await fetch(this.url,{
            method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(this.getFormObject()),
        })
        this.displaySuccess()
    } catch{
        this.displayError()
    }
}

    init(){
        if (this.form) 
        this.formButton.addEventListener("click",()=> this.sendForm)
        return this
    } 
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button:"[data-button]",
    success:"<h1 class='success'>Mensagem enviada!</h1>",
    error:"<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>"
})
formSubmit.init()