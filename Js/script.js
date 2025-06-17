const close = document.querySelector('.modal-container_block_close')
const modal = document.querySelector('.modal-container')
const login_btn = document.querySelector('.header_btn')
const body = document.querySelector('body')

modal.style.display = "none"

function hid() {
    modal.style.display = "none"
    body.style.overflow = "auto"
}

close.addEventListener('click', () => {
    hid()
})

login_btn.addEventListener('click', () => {
    modal.style.display = "flex"
    body.style.overflow = "hidden"
})

modal.addEventListener('click', function(event) {
    if (event.target.className === "modal-container") {
        hid()
    }
    else {
        return;
    }
})

const checkbox = document.querySelector('.modal-container_block_registration_agree');
const span = document.querySelector('.modal-container_block_input-checkbox-container span')

checkbox.addEventListener('change', function() {
  if (this.checked) {
    span.style.display = 'none'
  } else {
    span.style.display = 'block'
  }
});

const login = document.querySelector('.modal-container_block_login')
const loginForm = document.querySelector('#login-form')
const registr = document.querySelector('.modal-container_block_registration')
const registrForm = document.querySelector('#registration-form')
const change_to_login = document.querySelector('.modal-container_block_registration_login')
const change_to_registr = document.querySelector('.modal-container_block_login_register')

login.style.display = "none"


change_to_login.addEventListener('click', () => {
    registr.style.display = "none"
    login.style.display = "block"
})

change_to_registr.addEventListener('click', () => {
    registr.style.display = "block"
    login.style.display = "none"
})
