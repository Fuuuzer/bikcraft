const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if(url === href) {
    console.log(link)
  }
}

links.forEach(ativarLink)
 