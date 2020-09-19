let links = document.querySelectorAll('nav ul a')

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY

  links.forEach(link => {
    let section = document.querySelector(link.hash)

    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      
      link.classList.add('active')
    }else{
      link.classList.remove('active')
    }
  })
})

// Close dropdown if user clicks outside of it
window.onclick = function(event){
  if(!event.target.matches('.dropbtn')){
    var dropdowns = document.getElementsByClassName('dropdown_content')
    var i;
    for(i = 0; i < dropdowns.length; i++){
      let openDropdown = dropdowns[i]

      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show')
      }
    }
  }
}

const dropdown = () => {
  return document.getElementById('myDropdown').classList.toggle('show')
}

// Scroll animation
ScrollReveal().reveal('.slider', {delay: 500})
ScrollReveal().reveal('.slider h1', {delay: 1000})
ScrollReveal().reveal('.slider p', {delay: 1500})
ScrollReveal().reveal('.service', {
  delay: 300,
  duration: 700,
  reset: true
})
ScrollReveal().reveal('.card', {delay: 500})
ScrollReveal().reveal('.about', {delay: 500})