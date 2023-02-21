function toggleMode(){
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // } ou:
    html.classList.toggle("light")
    
    //pegar a tag
    const img = document.querySelector("#profile img")
    //substituir a img
    if(html.classList.contains("light")){
    //se tiver lightmode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    // se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    }

}