function initTabNav() {
  //Navegação por tab - section animais
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      })
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(event) {
      const thisElement = event.currentTarget;
      thisElement.classList.toggle('ativo')
      thisElement.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}
initAccordion();

function initScroll() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScroll();