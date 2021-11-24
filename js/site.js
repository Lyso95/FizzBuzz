
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
        let fbData = fizzBuzz(fizzValue,buzzValue);
        
        //call displayNumbers
        displayData(fbData);

    } else {

        alert("Bitte gib hier nur Gannzzahlen ein!");
    }
}


//Solve FizzBuzz
function fizzBuzz(fizzValue, buzzValue) {
    let solution = [];

    //loop 1-100
    for (let i = 1; i <= 100; i++) {
        
        //check if fizz or buzz divisible and return to solution
        if (i % fizzValue == 0 && i % buzzValue == 0) {
           solution.push('FizzBuzz'); 
        } else if (i % fizzValue == 0) {
            solution.push('Fizz');
        } else if (i % buzzValue == 0) {
            solution.push('Buzz');
        } else {
            solution.push(i);
        }
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

