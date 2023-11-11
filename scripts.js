'use strict';

const items = [
  {
    img: './img/item-1.jpeg',
    header: 'Buttermilk Pancakes',
    price: '$15.99',
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    type: 'stakes',
  },
  {
    img: './img/item-2.jpeg',
    header: 'Diner Double',
    price: '$13.99',
    description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats
    `,
    type: 'dinner',
  },
  {
    img: './img/item-3.jpeg',
    header: 'Godzilla Milkshake',
    price: '$6.99',
    description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
    type: 'breakfast',
  },
  {
    img: './img/item-4.jpeg',
    header: 'Country Delight',
    price: '$20.99',
    description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut  `,
    type: 'lunch',
  },
  {
    img: './img/item-5.jpeg',
    header: 'Egg Attack',
    price: '$22.99',
    description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    type: 'stakes',
  },
  {
    img: './img/item-6.jpeg',
    header: 'Oreo Dream',
    price: '$18.99',
    description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    type: 'dinner',
  },
  {
    img: './img/item-7.jpeg',
    header: 'Bacon Overflow',
    price: '$8.99',
    description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    type: 'stakes',
  },
  {
    img: './img/item-9.jpeg',
    header: 'Quarantine Buddy',
    price: '$16.99',
    description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.    `,
    type: 'breakfast',
  },
  {
    img: './img/item-8.jpeg',
    header: 'American Classic ',
    price: '$27.99',
    description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.    `,
    type: 'lunch',
  },
  {
    img: './img/item-10.jpeg',
    header: 'Steak Dinner',
    price: '$33.99',
    description: `dinner vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    type: 'dinner',
  },
];

const section = document.querySelector('.menu');
const btnsContainer = document.querySelector('.btns');

//functions

const updateUI = function (items) {
  section.innerHTML = '';
  items.forEach(item => {
    const html = `
  <article class="menu-items">
    <img src="${item.img}" alt="" class="img" />
  
    <div class="menu-details">
      <span class="h-price">
       <h3 class="header">${item.header}</h3>
       <span class="price">${item.price}</span>
     </span>
  
     <p class="desc">
      ${item.description}
     </p>
  </div>
  </article>`;

    section.insertAdjacentHTML('afterbegin', html);
  });
};

window.addEventListener('DOMContentLoaded', function () {
  updateUI(items);
});

// updateUI(items);

btnsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn--all')) {
    section.style.display = 'grid';
    updateUI(items);
  }

  if (e.target.classList.contains('btn--breakfast')) {
    const breakfast = items.filter(item => {
      return item.type === 'breakfast';
    });
    updateUI(breakfast);
  }

  if (e.target.classList.contains('btn--lunch')) {
    const lunch = items.filter(item => {
      return item.type === 'lunch';
    });
    updateUI(lunch);
  }

  if (e.target.classList.contains('btn--shakes')) {
    const shakes = items.filter(item => {
      return item.type === 'stakes';
    });
    updateUI(shakes);
  }

  if (e.target.classList.contains('btn--dinner')) {
    const dinner = items.filter(item => {
      return item.type === 'dinner';
    });
    updateUI(dinner);
  }
});
