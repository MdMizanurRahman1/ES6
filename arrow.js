
//function declaration..

function add(first, second) {
    const total = first + second;
    return total;
}

//function expression...
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

//anonymous function expression...
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

function add3(first, second) {
    return first + second;

}

//arrow function...
const add4 = (first, second) => first + second;


const add5 = (first, second) => first + second;

const add6 = () => console.log('John');
;



//const result = add6(30);
//console.log(result);

