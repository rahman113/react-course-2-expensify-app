import React from 'react'
import ReactDOM from 'react-dom';


console.log('destructurig');

// OBJECT STRUCTURING
const Person = {
    firstName: 'Andrew',
    secondName: 'Joseph Mead',
    Age: 26,

    location : {
        city: 'Philadephia',
        //country: 'New York',
        tem: 32
    }
}
const {firstName, secondName,Age, location} = Person // object destrucuring
console.log(`${firstName} ${secondName} is ${Age} is Old.` )

const {city, country = 'Boston', tem: temperature} = Person.location   /// temp rename country default value
if(city && country && temperature){
    console.log(`It's ${temperature} in ${city} from ${country}`)
}


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
        age:  40,
        cityName: 'Dublin',
        address: 'New York'
    }
}
const {name: publisherName = 'Self-Published', age, cityName} = book.publisher;
console.log(publisherName)


// ARRAY STRUCTURING

const address = ['1299 S Juniper Street', 'Phialdephia','Pennsylvania', '19417']

const [, City, state = 'New York'] = address
console.log(`You are in ${City} ${state}`)

const item = ['Coffee (hot)', '$2.00','2.50','2.75']

const [CoffeeHot, , basePrice] = item;

console.log(`A medium ${CoffeeHot} costs ${basePrice}`)

class First extends React.Component {

    render() {
        const data =[{"name":"test1"},{"name":"test2"}];
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
    
        return (
          <div>
          {listItems }
          </div>
        );
      }
}

ReactDOM.render(<First/>, document.getElementById('app'))
