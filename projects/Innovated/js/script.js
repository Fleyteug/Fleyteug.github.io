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

        //scroll in mobile menu
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
    

    //progressBar

    const counters = document.querySelectorAll('.statistics__counter'),
    lines = document.querySelectorAll('.statistics__line span');

    counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;


    //popups

    const overlay = document.querySelector('.overlay'),
          popupThxTrigger = document.querySelectorAll('[data-popupthx]'),
          popupThx = document.querySelector('.thx__popup'),
          popupThxClose = document.querySelector('[data-close]'),
          popupThxCloseBtn = document.querySelector('[data-closebtn]'),
          popupFormTrigger = document.querySelectorAll('[data-popup]'),
          popupFormClose = document.querySelector('[data-closeform]'),
          popup = document.querySelector('.form__popup'),
          popupSubmit = document.querySelector('[data-submit]');



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
    })


    //tabs

    const tabsBtn = document.querySelectorAll('.prices__modals-btn'),
          tabsContent = document.querySelectorAll('.monthly');

            tabsBtn.forEach(function(item) {
                item.addEventListener('click', function() {
                    let currentBtn = item;
                    let tabId = currentBtn.getAttribute('data-tab');
                    let currentTab = document.querySelector(tabId);

                    if (! currentBtn.classList.contains('prices__modals-btn_active')) {
                        tabsBtn.forEach(function(item) {
                            item.classList.add('prices__modals-btn_active');
                            item.classList.remove('prices__modals-btn_active');
                        });
                    
                        tabsContent.forEach(function(item) {
                            item.classList.remove('monthly_active');
                            item.classList.add('monthly_hidden');

                            currentBtn.classList.add('prices__modals-btn_active');
                            currentTab.classList.remove('monthly_hidden');
                            currentTab.classList.add('monthly_active');
                        });
                    }
                });
            });

    

            
    
    
          
});































});