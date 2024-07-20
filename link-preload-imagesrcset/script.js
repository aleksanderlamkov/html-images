document.querySelector('#showImageButton').onclick = () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <img
      src="images/cat.jpg"
      srcset="
        images/cat.jpg    1x,
        images/cat_2x.jpg 2x,
        images/cat_3x.jpg 3x,
      "
      alt="Голодная морда кошки"
      width="360" height="480"
    />  
  `)
}
