// const { generateImage } = require("../../controllers/openaiController")

function onSubmit(e) {
  e.preventDefault()

  document.querySelector('.msg').textContent=''
  document.querySelector('#image').src = ''

  const prompt = document.querySelector('#prompt').value
  const size = document.querySelector('#size').value

  if(prompt === '') {
    alert('Please add some text')
    return
  }
  
  // console.log(prompt, size)

  const imageUrl = data.data;

  document.querySelector('#image').src

  generateImageRequest(prompt, size)
}

async function generateImageRequest(prompt, size){
  try {
    showSpinner()
    const response = await fetch('/openai/generateimage', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        size
      })
    })

    if(!response.ok){
      removeSpinner();
      throw new Error('That image could not be generated.')
    }

    const data = await response.json()
    console.log(data)
    removeSpinner()


  } catch (error) {
    document.querySelector('.msg').textContent = errpr;
  }
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show')
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show')
}


document.querySelector('#image-form').addEventListener('submit', onSubmit)