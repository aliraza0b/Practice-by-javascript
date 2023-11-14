const child = document.querySelectorAll('.son');
const loadMorebutton = document.getElementById('load-more-btn');
const loadLessbutton = document.getElementById('load-less-btn');
let card = 3;
function showItems(carrd) {
    for (let i = 0; i < child.length; i++) {
      if (i < carrd) {
        child[i].style.display = 'block';
      } else {
        child[i].style.display = 'none';
      }
    }
  }
  showItems(card);  
  loadMorebutton.addEventListener('click', () => {
    card += 3;
    showItems(card);
    if (card >= child.length) {
        loadMorebutton.style.display= 'none';
        loadLessbutton.style.display= 'block';
        }
        });
    

        showItems(card);  
        loadLessbutton.addEventListener('click', () => {
          card -= 3;
          showItems(card);
          if (card <= 3) { 
            loadMorebutton.style.display = 'block';
            loadLessbutton.style.display = 'none';
          }
              });