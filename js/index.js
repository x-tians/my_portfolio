//intialization of menus
const btnGallery=document.querySelector('#menu-gallery');
const btnHome=document.querySelector('#menu-about');
const btnSkills=document.querySelector('#menu-skills');
const btnContact=document.querySelector('#menu-contact');
const sectionGallery=document.querySelector('.gallery-section');
const sectionAbout=document.querySelector('.about-section');
const sectionSkills=document.querySelector('.skills-section');
const sectionContact=document.querySelector('.contact-section');
const btnBurger=document.querySelector('.burger');
const menu=document.querySelectorAll('.menu');
const btn_burger=document.querySelector('.burger-wrapper-x');
const nav_content=document.querySelector('.left-nav-section');
const btnProjects=document.querySelector('#menu-projects');
const sectionProjects=document.querySelector('.projects-section');


//set the Home menu to be active
menu[0].className='active-menu';

//reset the burger menu into default width and selector name
var screen = window.matchMedia('(max-width: 992px)');
screen.addListener(()=>{
    nav_content.style.width='300px';
    btn_burger.className='burger-wrapper-x';
});

//click events for burger button
btnBurger.addEventListener('click',()=>{
    if(btn_burger.className==='burger-wrapper'){
        nav_content.style.width='300px';
        btn_burger.className='burger-wrapper-x';
    }else{
        nav_content.style.width='0px';
        btn_burger.className='burger-wrapper';
    }
});
//click events of all menus
btnHome.addEventListener('click',()=>{
    clearMenu();
    sectionAbout.style.width='100%';
    sectionGallery.style.width='0';
    sectionSkills.style.width='0';
    sectionContact.style.width='0';
    sectionProjects.style.width='0';
});
btnGallery.addEventListener('click',()=>{
    clearMenu();
    sectionAbout.style.width='0';
    sectionGallery.style.width='100%';
    sectionSkills.style.width='0';
    sectionContact.style.width='0';
    sectionProjects.style.width='0';
});
btnSkills.addEventListener('click',()=>{
    sectionAbout.style.width='0';
    sectionGallery.style.width='0';
    sectionSkills.style.width='100%';
    sectionContact.style.width='0';
    sectionProjects.style.width='0';
    clearMenu();
});
btnContact.addEventListener('click',()=>{
    clearMenu();
    sectionAbout.style.width='0';
    sectionGallery.style.width='0';
    sectionSkills.style.width='0';
    sectionContact.style.width='100%';
    sectionProjects.style.width='0';
});
btnProjects.addEventListener('click',()=>{
    clearMenu();
    sectionAbout.style.width='0';
    sectionGallery.style.width='0';
    sectionSkills.style.width='0';
    sectionContact.style.width='0';
    sectionProjects.style.width='100%';
});

//arrow function for changing menus classname 
let clearMenu=()=>{
    for(let m of menu){
        m.className='menu';
    }
    for(let men of menu){
        men.addEventListener('click',()=>{
            men.className='active-menu';
        });
    }
}



