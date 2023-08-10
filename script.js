function toggleMode(){
  const html = document.documentElement
  /* if(html.classList.contains('light')){
    html.classList.remove('light')

  }else{
    html.classList.add("light")
  } */
  /* toggle faz a mesma logica acima, de adicionar ou remover uma classe */
  html.classList.toggle('light')
}