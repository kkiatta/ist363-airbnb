//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");// match const name with id name
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn")
// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.add("active");
}); // end of menu Btn click
closeBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.remove("active");
}); // end of menu Btn click

// variables
// const roomName = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription =
//     'A beautiful room wigh a king size bed, a private bathroom, and a balcony with a view of the ocean.';

// const room ={
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:   
//     'A beautiful room wigh a king size bed, a private bathroom, and a balcony with a view of the ocean.'
//    } 

//arry of objects
// const rooms =[
//     {name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:   
//      'A beautiful room wigh a king size bed, a private bathroom, and a balcony with a view of the ocean.'
//     },
//     {name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:   
//      'A beautiful room wigh a king size bed, a private bathroom, and a balcony with a view of the ocean.'
//     },
//     {name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:   
//      'A beautiful room wigh a king size bed, a private bathroom, and a balcony with a view of the ocean.'
//     }  
//  ];
 // end of rooms

 function renderProperties(properties) {
    properties.forEach((room) => {
        // create elements
    const roomArticle = document.createElement('article');
    roomArticle.classList.add('room')
    
    const roomNameElement = document.createElement('h3');
    roomNameElement.classList.add('room--name')
    roomNameElement.textContent = room.name;
    
    const roomDescriptionElement = document.createElement('p');
    roomDescriptionElement.classList.add('room--description')
    roomDescriptionElement.textContent = room.description;
    
    const roomPriceElement = document.createElement('p');
    roomPriceElement.textContent =`Price: ${room.price}`;
    
    const roomGuestsElement = document.createElement('p');
    roomGuestsElement.textContent =`Guest: ${room.guests}`;
    
    //Order does matter
    roomArticle.appendChild(roomNameElement); 
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);
    
    document.body.appendChild(roomArticle);
    }); 
    // end of forEach
 } //end of renderProperties

// fetch('./js/properties.json')
//     .then((response) => response.json())
//     .then((data) =>{
//        // console.log(data); 
//        renderProperties(data);
//     });

const displayCategory = (category, properties) => {
    //console.log({category});
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('category');

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = category.label.plural;

    sectionElement.appendChild(sectionTitle);

 //console.log(category.label.singular)
 // 1. filter properties             loop

 const filteredProperties = properties.filter(property => {
    // return true or false
    return category.label.singular === property.type;
});

filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
//console.log({filteredProperties});
//for each loop give arrow function first () => {}
filteredProperties.forEach(property => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    let propertyHtml = `
        <h3 class="property--title">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">${property.price}</p>
    `;

    articleElement.innerHTML = propertyHtml;

    sectionElement.appendChild(articleElement);

}); // end of forEach

//const articleElement = document.createElement('article');
//articleElement.classList.add('property');

 // 2. loop and append properties
    
    document.body.appendChild(sectionElement)
} //end of displayCategory

Promise.all([
    // fetch 1
    fetch('js/properties.json').then(response => response.json()),
    // fetch 2
    fetch('js/categories.json').then(response => response.json())
    ])
    .then(([properties, categories]) => {
        // console.log({properties})
        // console.log({categories})
       categories.forEach(category => {
         displayCategory(category, properties);
      });
        
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });

    