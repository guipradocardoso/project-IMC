// variables

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// 3 maneira de criar e atribuir função a um evento

// form.onsubmit = () => {}
// form.onsubmit = handleSubmit
// function handleSubmit() {}

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  console.log(weight, height)
}
