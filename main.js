const bananaDiv = document.getElementById('bananas');

bananaDiv.innerHTML = 'im a banana';

let counter = 0 ;
counter = counter + 1;
counter += 1;
counter++;

// counter = 3

console.log('counter:', counter);


const greetingElement = document.getElementById('greeting');
const firstName = 'Raymond';
const lastName = 'Arceneaux';
// greetingElement.innerHTML = 'Hello my name is Raymond';
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;


// object shorthand

let name = 'Ray';

let age = '150';

let person = {name,age}

console.log('person:', person.name);