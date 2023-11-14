const card = document.querySelectorAll('.thumb-unit');
const loadMoreButton = document.getElementById('load-more-button');
const loadLessButton = document.getElementById('load-less-button'); 

let Cards = 4;

function showItems(carrd) {
  for (let i = 0; i < card.length; i++) {
    if (i < carrd) {
      card[i].style.display = 'block';
    } else {
      card[i].style.display = 'none';
    }
  }
}

showItems(Cards);

loadMoreButton.addEventListener('click', () => {
  Cards += 4;
  showItems(Cards);
  if (Cards >= card.length) {
    loadMoreButton.style.display = 'none'; 
    loadLessButton.style.display = 'block';
  }
});

loadLessButton.addEventListener('click', () => {
  Cards -= 4; 
  showItems(Cards);
  if (Cards <= 4) { 
    loadMoreButton.style.display = 'block';
    loadLessButton.style.display = 'none';
  }
});

$(function(){
  setInterval(function(){tadaStuff()}, 1000);
    hoverStuff();
  });
  function tadaStuff() {
     var randNum = Math.floor( Math.random() * $('.thumb-unit').length) + 1;
    $('.thumb-unit').eq(randNum).addClass('is-active').siblings().removeClass('is-active');
  }

// const card = document.querySelectorAll('.thumb-unit');
// const loadMoreButton = document.getElementById('load-more-button');
// // const loadLessButton = document.getElementById('load-more-button');

// let Cards = 4;

// function showItems(numcard) {
//   for (let i = 0; i < card.length; i++) {
//     if (i < numcard) {
//       card[i].style.display = 'block';
//     } else {
//       card[i].style.display = 'none';
//     }
//   }
// }
// showItems(Cards);
// loadMoreButton.addEventListener('click', () => {
//   Cards += 4;
//   showItems(Cards);
//   if (Cards >= card.length) {
//     loadMoreButton.style.display = 'block';
//   }
// });
// loadMoreButton.style.display = 'block';

// //////// load less section ///////


// const row = document.querySelectorAll('.thumb-unit');
// const loadlessButton = document.getElementById('load-less-button');
// let Rows = 4;
// function showRows() { 
//   for (let i = 0; i < row.length; i++) {
//     if (i < Rows) {
//       row[i].style.display = 'flex';
//       } else {
//         row[i].style.display = 'none';
//         }
//         }
//         showRows();
//         loadlessButton.addEventListener('click', () => {
//           Rows -= 4;
//           showRows();
//           if (Rows <= 0){
//             loadlessButton.style.display = "none";
//             }
//             });
//           }




//////// load less section end ///////
// function shown(numcard) {
//     for (let i = 12; i > card.length; i--) {
//       if (i > numcard) {
//           card[i].style.display = 'block';
//       } else {
//           card[i].style.display = 'none';
//       }
//     }
//     }
// shown(Cards);
// loadLessButton.addEventListener('click', () => {
//     Cards+= 4;
//   shown(Cards);
//   if (Cards >= card.length(8)) {
//     var btnText = document.getElementById("load-more-button");
//     btnText.innerHTML = "Load Less";
//   }
// });




// function myFunction(){
//     const loadMoreButton = document.getElementById('load-more-button').innerHTML ="Load less";
// }

// if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get a reference to the loadMore button
// const loadMoreBtn = document.querySelector('#load-more-button');

// let Cards = 4;
// function showItems(numcard) {
//   for (let i = 0; i < boxes.length; i++) {
//     if (i < numcard) {
//       boxes[i].style.display = 'block';
//     } else {
//       boxes[i].style.display = 'none';
//     }
//   }
// }
// // Add a click event listener to the loadMore button
// loadMoreBtn.addEventListener('click', () => {
//   // Get all the box containers
//   const boxes = document.querySelectorAll('.thumb-unit');

//   // Loop through each box container and toggle its display style
//   boxes.forEach(box => {
//     if (box.style.display === 'none') {
//       box.style.display = 'block';
//       loadMoreBtn.innerHTML = "Load less"
//       loadMoreBtn.style.backgroundColor = 'black'
//       loadMoreBtn.style.width='100px'
//       loadMoreBtn.style.padding='15px 25px'
//       loadMoreBtn.style.margin='auto'
//       loadMoreBtn.style.borderRadius='30px'
//       loadMoreBtn.style.color='white'
//       loadMoreBtn.style.cursor='pointer'
//     } else {
//       box.style.display = 'none';
//       loadMoreBtn.innerHTML = "Load more"

//     }
//   });
// });


// const loadMoreBtn = document.querySelector('#load-more-button');
// let currentitem = 4;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll('.thumb-unit')];
//   for (var i = currentitem; i < currentitem + 4; i++) {
//     boxes[i].computedStyleMap.display = 'block'
//   }
//   currentitem += 4;
//   if(currentitem >= boxes.length){
//     loadMoreBtn.style.display ='none';
//   }
// }
