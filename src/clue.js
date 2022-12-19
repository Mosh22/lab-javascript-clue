
// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age:45,
    description:'He has a lot of connections',
    image : 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color : 'green',
},
{
    firstName: 'Doctor',
    lastName: 'Alex',
    occupation: 'Scientist',
    age:26,
    description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image : ' http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color : 'white',
},
{
    firstName: 'Victor',
    lastName: 'Hugo',
    occupation: 'Designer',
    age:22,
    description:'Billionaire video game designer',
    image : 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color : 'purple',
},
{
    firstName: 'Jakie',
    lastName: 'Chen',
    occupation: 'Actor',
    age:31,
    description:'She is an A-list movie star with a dark past',
    image : 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color : 'red',
},
{
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialist',
    age:36,
    description:'She is from a wealthy family and uses her status and money to earn popularity',
    image : ' https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color : 'blue',
},
{
    firstName: 'Jack',
    lastName: 'kelis',
    occupation: 'Retired Football player',
    age: 62,
    description:'He is a former football player who tries to get by on his former glory',
    image : 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color : 'yellow',
}

];

// Rooms Array

const roomsArray = [
    {
        name : 'Dining Room'
    },
    {
        name : 'Conservatory'
    },
    {
        name : 'Kitchen'
    },
    {
        name : 'Study Room'
    },
    {
        name : 'Library'
    },
    {
        name : 'Billiard Room'
    },
    {
        name : 'Lounge'
    },
    {
        name : 'Ballroom'
    },
    {
        name : 'Hall'
    },
    {
        name : 'Spa'
    },
    {
        name : 'Living Room'
    },
    {
        name : 'Observatory'
    },
    {
        name : 'Theater'
    },
    {
        name : 'Guest House'
    },
    {
        name : 'gym'
    }
];

// Weapons Array

const weaponsArray = [
    { 
        name : 'rope',
        weight : 12
    },
    {
        name : 'knife',
        weight : 8
    },
    {
        name : 'candlestick',
        weight : 3
    },
    {
        name : 'dumbbell',
        weight : 30
    },
    {
        name : 'poison',
        weight : 2
    },
    {
        name : 'axe',
        weight : 15
    },
    {
        name : 'bat',
        weight : 14
    },
    {
        name : 'trophy',
        weight : 25
    },
    {
        name : 'pistol',
        weight : 20
    }
];


// ITERATION 2

function selectRandom(arr) {
if(arr.length == 0)
{
    return undefined;
}

let rand = Math.floor(Math.random() * (arr.length ))  ;

return arr[rand];

}

function pickMystery() {
        let r_suspect= Math.floor(Math.random() * suspectsArray.length );
        let r_weapon = Math.floor(Math.random() * weaponsArray.length) ;
        let r_room = Math.floor(Math.random() * roomsArray.length) ;
        let obj ={
            suspect :suspectsArray[r_suspect],
            weapon: weaponsArray[r_weapon],
            room: roomsArray[r_room], 
        };


   return obj;
}


// ITERATION 3

function revealMystery(envelope) {

    return  `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;

}

