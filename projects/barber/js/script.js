'Use strict'

document.addEventListener('DOMContentLoaded', function () {

    //burgerMenu

    const iconMenu = document.querySelector('.menu__icon');

    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            
            const smoothLinks = document.querySelectorAll('a[href^="#"]');
            for (let smoothLink of smoothLinks) {
                smoothLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    const id = smoothLink.getAttribute('href');
    
                    if(iconMenu.classList.contains('menu__icon')) {
                        document.body.classList.remove('_lock');
                        iconMenu.classList.remove('_active');
                        menuBody.classList.remove('_active');
                    }
    
                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            };
        }); 
    }

    //scroll in desk menu
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e) {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        };

    
        
    //popups

    const overlay = document.querySelector('.overlay'),
          popupThxTrigger = document.querySelectorAll('[data-popupthx]'),
          popupThx = document.querySelector('.thx__popup'),
          popupThxClose = document.querySelector('[data-close]'),
          popupThxCloseBtn = document.querySelector('[data-closebtn]'),
          popupFormTrigger = document.querySelectorAll('[data-popup]'),
          popupFormClose = document.querySelector('[data-closeform]'),
          popup = document.querySelector('.form__popup'),
          popupSubmit = document.querySelector('[data-submit]'),
          loginTrigger = document.querySelectorAll('[data-login]'),
          loginPopup = document.querySelector('.login__popup'),
          loginClose = document.querySelector('[data-closelogin]'),
          loginSubmit = document.querySelector('[data-log]'),
          notificationsTrigger = document.querySelectorAll('[data-notifications]'),
          notificationsPopup = document.querySelector('.notifications__popup'),
          notificationsClose = document.querySelector('[data-notificlose]');




    popupThxTrigger.forEach(function (btn) {
        btn.addEventListener('click', function() {
            openThxPopup();
        });
    });

    popupFormTrigger.forEach(function (btn) {
        btn.addEventListener('click', function() {
            openPopup();
        });
    });

    loginTrigger.forEach(function (btn) {
        btn.addEventListener('click', function() {
            openLoginPopup();
        });
    });

    notificationsTrigger.forEach(function (btn) {
        btn.addEventListener('click', function() {
            openNotifications();
        });
    });

    function overlayOpen() {
        overlay.classList.add('overlay-show');
        overlay.classList.remove('overlay-hidden');
        document.body.style.overflow = 'hidden';
    }

    function overlayClose() {
        overlay.classList.add('overlay-hidden');
        overlay.classList.remove('overlay-show');
        document.body.style.overflow = '';
    }

    function openNotifications() {
        overlayOpen();
        notificationsPopup.classList.add('notifications__popup-show');
        notificationsPopup.classList.remove('notifications__popup-hidden');
    }

    function closeNotifications() {
        overlayClose();
        notificationsPopup.classList.add('notifications__popup-hidden');
        notificationsPopup.classList.remove('notifications__popup-show');
    }

    function openLoginPopup() {
        overlayOpen();
        loginPopup.classList.add('login__popup-show');
        loginPopup.classList.remove('login__popup-hidden');
    }

    function closeLoginPopup() {
        overlayClose();
        loginPopup.classList.add('login__popup-hidden');
        loginPopup.classList.remove('login__popup-show');
    }

    function openThxPopup() {
        overlayOpen();
        popupThx.classList.add('thx__popup-show');
        popupThx.classList.remove('thx__popup-hidden');
    }

    function closeThxPopup() {
        overlayClose();
        popupThx.classList.add('thx__popup-hidden');
        popupThx.classList.remove('thx__popup-show');
    }

    function openPopup() {
        overlayOpen();
        popup.classList.add('form__popup-show');
        popup.classList.remove('form__popup-hidden');
    }

    function closePopup() {
        overlayClose();
        popup.classList.add('form__popup-hidden');
        popup.classList.remove('form__popup-show');
    }

    function changePopup() {
        popup.classList.add('form__popup-hidden');
        popup.classList.remove('form__popup-show');
        popupThx.classList.add('thx__popup-show');
        popupThx.classList.remove('thx__popup-hidden');
    }

    function changeLogin() {
        loginPopup.classList.add('login__popup-hidden');
        loginPopup.classList.remove('login__popup-show');
        popupThx.classList.add('thx__popup-show');
        popupThx.classList.remove('thx__popup-hidden');
    }

    
    popupSubmit.addEventListener('click', function() {
        changePopup();
    });

    popupThxClose.addEventListener('click', function() {
        closeThxPopup();
    });

    popupThxCloseBtn.addEventListener('click', function() {
        closeThxPopup();
    });

    popupFormClose.addEventListener('click', function() {
        closePopup();
    });

    loginClose.addEventListener('click', function() {
        closeLoginPopup();
    });

    loginSubmit.addEventListener('click', function() {
        changeLogin();
    });

    notificationsClose.addEventListener('click', function() {
        closeNotifications();
    });


































});