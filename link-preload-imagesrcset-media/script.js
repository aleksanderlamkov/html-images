document.querySelector('#showImageButton').onclick = () => {
  document.body.insertAdjacentHTML('afterbegin', `    
    <picture>
      <source
        srcset="images/cat_mobile.jpg"
        media="(max-width: 500px)"
      />
      <img
        src="images/cat_desktop.jpg"
        alt="Любопытная морда кошки"
        width="960" height="1280"
      />
    </picture>
  `)
}
