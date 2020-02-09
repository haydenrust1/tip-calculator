//UI Controller

const getInput = function() {
    
    const input = [];
    const bill = input.push(document.getElementById('bill-input'));
    const tip = input.push(document.getElementById('tip-input'));
    const guest = input.push(document.getElementById('guests-input'));
    // console.log(input);
    
};

const eventListener = function() {
    
    const listen = document.querySelector('.button').addEventListener('click', getInput);
    console.log(listen);
};

eventListener();


//Calculator Controller

// const bill = document.querySelector('#bill-input').value;
// console.log(bill);


