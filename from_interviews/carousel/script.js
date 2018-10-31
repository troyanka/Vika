const banners = [
    {
        id: 1,
        'img' : 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        'title': '1 Banner'
    },
    {
        id: 2,
        'img' : 'https://www.w3schools.com/howto/img_snow_wide.jpg',
        'title': '2 Banner'
    },
    {
         id: 3,
        'img' : 'https://www.w3schools.com/howto/img_lights_wide.jpg',
        'title': '3 Banner'
    },
    {
        id: 4,
       'img' : 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
       'title': '4 Banner'
   }
];

let slideIndex = 1;
const firstToBeShown = banners.find( item => item.id == slideIndex);
const arrows = document.querySelectorAll('.arrow');

function showSlider(  ) {
    const temp = banners.find( item => item.id == slideIndex);
    document.querySelector('.mySlides img').setAttribute('src', temp.img );
    document.querySelector('.mySlides .text').innerHTML = temp.title;
    document.querySelector('.mySlides .numberText #myNumber').innerHTML = temp.id;
}

function eventHandler ( e ){
    if (this.classList.contains('next')){
        slideIndex == banners.length ? slideIndex = 1 : slideIndex++;
    }
    else if(this.classList.contains('prev')){
        slideIndex == 1 ? slideIndex = banners.length : slideIndex--;
    }

    showSlider();
}

//Setting the data about the first banner
// document.querySelector('.mySlides img').setAttribute('src', firstToBeShown.img );
// document.querySelector('.mySlides .text').innerHTML = firstToBeShown.title;
// document.querySelector('.mySlides .numberText #myNumber').innerHTML = firstToBeShown.id;

showSlider();
document.querySelector('.mySlides .numberText #numberFrom').innerHTML = banners.length;

//Setting event listener for the arrows
arrows.forEach(arrow => arrow.addEventListener('click', eventHandler));


