//mobile menu

const burgerIcon =  document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    console.log('active');
});

//tabs

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () =>{
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target ){
                box.classList.remove('is-hidden');
            }else{
                box.classList.add('is-hidden');
            }
        })
    })
})

//modal

const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click', () =>{
    modal.classList.add('is-active');
});

modalBg.addEventListener('click' , () =>{
    modal.classList.remove('is-active');
});



//GSAP
gsap.from("#nav-ani", {opacity: 0, y: 100, duration: 0.8});
gsap.from("#bread-ani", {opacity: 0, y: 100, x:-200, duration: 1.5});
gsap.from("#first-product-ani", {opacity: 0, y: 100, x:-500, duration: 0.8,rotation:360});

