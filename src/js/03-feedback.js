const formRef = document.querySelector('.feedback-form')
const LS_KEY = "feedback-form-state"
let LS_FORM_VALUE = {}

const storageValue = JSON.parse(localStorage.getItem(LS_KEY))

if (storageValue) {
  formRef.email.value = storageValue.email
  formRef.message.value = storageValue.message
}

formRef.addEventListener('change', (evt) => {
  const { email, message } = evt.currentTarget.elements

  LS_FORM_VALUE = {
    email: email.value,
    message: message.value
  }
  // _.throttle(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(LS_FORM_VALUE))
  // }, 500)
  localStorage.setItem(LS_KEY, JSON.stringify(LS_FORM_VALUE))
})

formRef.addEventListener('submit', (evt) => {
  evt.preventDefault()
  localStorage.removeItem(LS_KEY)
  formRef.reset()
})


