//Calculator Controller
const listen = function() {
    
    let input = [];

    input.push(parseFloat((document.getElementById('bill-input').value)));  //user-entered bill amount
    input.push(parseFloat(((document.getElementById('tip-input').value))/100));  //user-entered tip %
    input.push(parseFloat((document.getElementById('guests-input').value)));  //user-entered guests present 
    
    function tipOut() {
        if (input[2] > 1) {
            
            let tipPerPerson = parseFloat(((input[0] * input[1]).toFixed(2)) / input[2]); //bill * tip%
            let billPerPerson = parseFloat((input[0]) / input[2]);
            
            let totalPerPerson = (tipPerPerson + billPerPerson); //tip amount + bill
            
            document.getElementById('tip_result').innerHTML = `$${tipPerPerson}`;
            document.getElementById('total-bill').innerHTML = `$${totalPerPerson}`;

            /*********************************  Console Testing **************************************************
            console.log(`The Bill is ${input[0]}. The Tip is ${input[1]}. The amount of guests are ${input[2]}`);
            console.log(`the tip per person is ${tipPerPerson}`);
            console.log(`the bill per person is ${billPerPerson}`);
            console.log(`the total per person is ${totalPerPerson}`);  
            ******************************************************************************************************/
        }else {
            
            let tipOwed = parseFloat((input[0] * input[1]).toFixed(2)); //bill * tip%
            let total = tipOwed + input[0]; //tip amount + bill
            
            document.getElementById('tip_result').innerHTML = `$${tipOwed}`;
            document.getElementById('total-bill').innerHTML = `$${total}`;

            /*********************************  Console Testing **************************************************
            console.log(`The Bill is ${input[0]}. The Tip is ${input[1]}. The amount of guests are ${input[2]}`);
            console.log(`the tip owed is ${tipOwed}`);
            console.log(`the total bill is ${total}`);  
            ******************************************************************************************************/
       }
        
  
    }
    return tipOut();
    
};

//UI Controller
const eventListener = function() {  
    
    document.getElementById('click').addEventListener('click', listen);  //mouse-click event
    
    document.addEventListener('keypress', function(event) {  //enter-key event
        
        if(event.keyCode === 13 || event.which === 13) {
            listen();
        }
    });
    
    addEventListener('submit', function handleForm(event) {  //stops form from refreshing page
        
        document.getElementById("form_calculator");
        event.preventDefault(); 
    });
};

eventListener();
