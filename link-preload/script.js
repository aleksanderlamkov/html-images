document.querySelector('#showImageButton').onclick = () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <img
      src="./images/cat.jpg"
      alt="Хитрая морда кошки"
      width="720" height="1280"
    />  
  `)
}
