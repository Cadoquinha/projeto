function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')) {
  //  html.classList.remove('light') 
  // } else {
  //   html.classList.add('light')
  // }

  /* A função acima pode ser substituida pela toggle que quer dizer alternancia*/
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
// Substituir a imagem
  if(html.classList.contains("light")) {
// Se tiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/avatar-light.png")
  } else {
// Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }


  
}