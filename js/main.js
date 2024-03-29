//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");// match const name with id name
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn")
const contentDiv = document.getElementById("content")
// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.add("active");
}); // end of menu Btn click
closeBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.remove("active");
}); // end of menu Btn click

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
    
    contentDiv.appendChild(roomArticle);
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
    sectionElement.classList.add('slider');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('slider__container')

    const sliderGrid = document.createElement('div');
    sliderGrid.classList.add('slider__grid')

    //containerDiv.appendChild(sectionTitle);

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
    articleElement.classList.add('slider__item');

    let propertyHtml = `
        <h3 class="property--title">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">${property.price}</p>
    `;

    articleElement.innerHTML = propertyHtml;

    sliderGrid.appendChild(articleElement);

}); // end of forEach

//const articleElement = document.createElement('article');
//articleElement.classList.add('property');

 // 2. loop and append properties
    containerDiv.appendChild(sliderGrid)
    sectionElement.appendChild(containerDiv)
    contentDiv.appendChild(sectionElement)
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