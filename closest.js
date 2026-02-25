// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//    const card = btn.closest('.card');
//    console.log(card);
// });

const container = document.getElementById('container');

container.addEventListener('click', function(event) {

   if (event.target.closest('.btn-delete')) {

      const card = event.target.closest('.card');

      if(card) {
         card.remove();
      }

   }

});