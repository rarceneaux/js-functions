// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal){
return `${animal} stix`;

}

const nuggetizer2 =(animal) => {
    return `${animal} jerky`;
};

console.log('deer:', nuggetizer2('deer'));

nuggetizer2();


console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));


nuggetizer('fish');

// function ex 2 see notes

const bearSticks = nuggetizer('bear');
const nomnom =(name,food) =>{
return `${name} devoured ${food}` 
};

console.log('nomnomOutput:', nomnom('Raymond', bearSticks));

// / ex 3

const numberAdder =(num)=>{
    const finalNumber = num +3;
    printToDom(`<h2>${finalNumber}</h2>`,'allTheNumbers')
};


// ex 4

const printToDom =(stringToPrint,divId) =>{
const selectedDiv =document.getElementById(divId);
selectedDiv.innerHTML += stringToPrint;
}
numberAdder(22);
numberAdder(30);


printToDom =('I am ready for lunch','feelings');