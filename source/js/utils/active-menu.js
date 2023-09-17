export const activeMenu = function () {
  const header = document.querySelector('.main-header');
  const headerOverlay = document.querySelector('.main-header__overlay');
  const navigation =  document.querySelector('.main-header__navigation');
  const menuList = navigation.querySelector('.main-header__menu-list');
  const menuLinks = menuList.querySelectorAll('.main-header__menu-link');

  const subMenuButtons = menuList.querySelectorAll('.main-header__sub-menu-button');
  const subMenuLists = menuList.querySelectorAll('.main-header__sub-menu-list');
  const subMenuLinks = menuList.querySelectorAll('.main-header__sub-menu-link');

  const menuButton = navigation.querySelector('.main-header__navigation-button');
  const iconBurger = menuButton.querySelector('.main-header__burger-icon');
  const iconClose = menuButton.querySelector('.main-header__close-icon');

  const menuElements = [];

  if (document.querySelector('.main-header__overlay') &&
    document.querySelector('.main-header__navigation') &&
    navigation.querySelector('.main-header__navigation-button') &&
    menuButton.querySelector('.main-header__burger-icon') &&
    menuButton.querySelector('.main-header__close-icon') &&
    navigation.querySelector('.main-header__menu-list') &&
    menuList.querySelectorAll('.main-header__sub-menu-list')) {

    menuElements.push(headerOverlay, navigation, menuButton, iconBurger, iconClose, menuList);

    menuList.classList.add('is-active');
    navigation.classList.add('is-active');
    menuButton.classList.add('is-active');
    header.classList.add('is-active');

    subMenuLists.forEach((menu) => {
      menu.classList.add('is-active');
    });
  }

  function openMenu () {
    if (menuElements.length !== 0 && subMenuLists !== 0 && subMenuButtons !== 0) {
      menuElements.forEach((element) => {
        element.classList.toggle('is-open');
      })

      subMenuLists.forEach((menu) => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        }
      });

      subMenuButtons.forEach((title) => {
        if (title.classList.contains('is-open')) {
          title.classList.remove('is-open');
        }
      });

      if (menuList.classList.contains('is-open')) {
        window.onscroll = () => window.scroll(0, 0);
      } else {
        window.onscroll = () => window.scroll();
      }
    }
  }

  function closeMenu () {
    if (menuElements.length !== 0 && subMenuLists !== 0 && subMenuButtons !== 0) {
      menuElements.forEach((element) => {
        element.classList.remove('is-open');
      })

      subMenuLists.forEach((menu) => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        }
      });

      subMenuButtons.forEach((title) => {
        if (title.classList.contains('is-open')) {
          title.classList.remove('is-open');
        }
      });

      window.onscroll = () => window.scroll();
    }
  }

  menuButton.addEventListener('click', () => {
    openMenu();
  })

  headerOverlay.addEventListener('click', () => {
    closeMenu();
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  subMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  if (subMenuButtons !== 0) {
    subMenuButtons.forEach((title) => {
      const siblingList = title.nextElementSibling;
      title.addEventListener('click', () => {
        siblingList.classList.toggle('is-open');
        title.classList.toggle('is-open');
      });
    });
  }
}
