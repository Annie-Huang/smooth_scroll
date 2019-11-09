// Option 2 - jQuery Smooth Scroll
//
// $('.navbar a').on('click', function (e) {
//     // console.log(this.hash);
//     // You will see what link is being clicked.
//     // Print
//     // #home
//     // #about
//     // #service
//     // #contact
//
//     if(this.hash !== '') {
//         e.preventDefault();
//         const hash = this.hash;
//
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });

// Option 3 - SmoothScroll Script
// This, a[href*="#"], means it will work on any links.
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});
