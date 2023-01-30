const openBtn = document.querySelector('#btnOpen')
const closeBtn = document.querySelector('#btnClose')
const cleanInputEmail = document.getElementById('email')

function openAndClosePopup(){
    const popup = document.getElementById('popup')
    popup.classList.toggle('active')
}

openBtn.addEventListener('click', () =>{
    openAndClosePopup()
    cleanInputEmail.value = ''
})

closeBtn.addEventListener('click', () =>{
    openAndClosePopup()
    cleanInputEmail.value = ''
})
