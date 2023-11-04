import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const LS_KEY = "feedback-form-state"
let LS_FORM_VALUE = {}

const storageValue = JSON.parse(localStorage.getItem(LS_KEY))

if (storageValue) {
  formRef.email.value = storageValue.email
  formRef.message.value = storageValue.message
}

formRef.addEventListener('input', throttle((evt) => {
  // const { email, message } = evt.currentTarget.elements
  // LS_FORM_VALUE = {
  //   email: email.value,
  //   message: message.value
  // }

  const formData = new FormData(evt.currentTarget)
  formData.forEach((value, key) => {
    LS_FORM_VALUE[key] = value
  })

  localStorage.setItem(LS_KEY, JSON.stringify(LS_FORM_VALUE))

}), 500)

formRef.addEventListener('submit', (evt) => {
  evt.preventDefault()
  if (!formRef.email.value || !formRef.message.value) {
    alert('Please fill out all fields')
    return
  }
  console.log(LS_FORM_VALUE)
  localStorage.removeItem(LS_KEY)
  formRef.reset()
})


