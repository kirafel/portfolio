const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")
const body = document.querySelector('body')
const navItems = document.querySelectorAll('#navItems')

btnHamburger.addEventListener('click', () => {
    if(header.classList.contains('open')) { // close the hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    } 
    else { // open the hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})

navItems.forEach(element => {
    element.addEventListener('click', () => {
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    })
});


// document.addEventListener("DOMContentLoaded", () => {
//     const target = document.querySelector('#about');
//     const percents = [95, 90, 90, 85, 90, 80, 72, 70, 58, 50, 42];
//     const progressNumber = document.querySelectorAll('.progress__number');
    
//     let intersectionOptions = {
//         root: null,  // use the viewport
//         rootMargin: '0px',
//         threshold: 0
//       }
      
//     function intersectionCallback(entries, observer) {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 console.log(entry.isIntersecting);
//                 console.log(progressNumber);

//                 let i = 0;
//                 let j = 0;
//                 let timer;
//                 progressNumber.forEach(element => {
//                     while (j <= percents[i]) {
//                         setInterval(() => {
//                             console.log(j);
//                             element.innerHTML = j + " %";
//                         }, 100)
//                     }
//                     j++;
//                     i++;
//                 });
//             }
//         });
//     }
      
//     let observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
    
//     observer.observe(target);

// });