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