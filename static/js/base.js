// mybutton = document.getElementById( "backbtn" );

// window.onscroll = function () { scrollFunction(); };

// function scrollFunction ()
// {
//   if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
//   {
//     mybutton.style.display = "block";
//   } else
//   {
//     mybutton.style.display = "none";
//   }
// }


// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//   }
let topBtn = document.querySelector('.back-to-top');

function backToTop() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      topBtn.style.display = "block";
      } else {
      topBtn.style.display = "none";
      }
}
