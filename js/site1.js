
//controller
function getValues(){

    //get Fizz- and Buzzvalue
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        
        //call fizzBuzz
        let fbData = fizzBuzzC(fizzValue,buzzValue);
        
        //call displayNumbers
        displayData(fbData);

    } else {

        alert("Bitte gib hier nur Gannzzahlen ein!");
    }
}


//Solve FizzBuzz
function fizzBuzzA(fizzValue, buzzValue) {
    let solution = [];
    let Fizz = false;
    let Buzz = false;

    //loop 1-100
    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true){
            case Fizz && Buzz:
                solution.push('FizzBuzz');
                break;
            
            case Fizz:
                solution.push('Fizz');
                break;
            
            case Buzz:
                solution.push('Buzz');
                break;
            
            default:
                solution.push(i);
                break;
        }    
    }
    return solution;
}

function fizzBuzzB(fizzValue, buzzValue) {
    let solution = [];
    let Fizz = false;
    let Buzz = false;

    //loop 1-100
    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true){
            case Fizz && Buzz:
                solution.push('FizzBuzz');
                break;
            
            case Fizz:
                solution.push('Fizz');
                break;
            
            case Buzz:
                solution.push('Buzz');
                break;
            
            default:
                solution.push(i);
                break;
        }    
    }
    return solution;
}

function fizzBuzzC(fizzValue, buzzValue){
    let solution = [];
    for (let i = 1; i <= 100; i++){
        
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '' ) || i );
        solution.push(value);

    }
    return solution;
}


//loop over the array and create a tablerow for each item.
function displayData(fbData){

    //get table body element
    let tableBody = document.getElementById("results");

    //get template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        //grab use the tds to put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
        
        rowCols[1].classList.add(fbData[i+1]);
        rowCols[1].textContent = fbData[i+1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i+2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i+3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }
}

