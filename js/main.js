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
    rooms.forEach((room) => {
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

fetch('./js/properties.json')
    .then((response) => response.json())
    .then((data) =>{
       // console.log(data); 
       renderProperties(data);
    });
