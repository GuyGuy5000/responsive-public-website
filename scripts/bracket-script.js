let nextButton = document.getElementById("btnNext");

nextButton.addEventListener("click", CheckGroupSelection);

function CheckGroupSelection() {

    
    //all 32 selections
    let groupSelection = document.querySelectorAll("select");

    //just group a for testing purposes
    let groupAselection = document.querySelectorAll("select[name=cboGroupA]");


    //extracts selection value into arrays
    let groupAarray = Array.from(groupAselection);
    let allGroupArray = Array.from(groupSelection);

    if(!selectionCheck(allGroupArray)){
        alert`Please make sure all teams have been selected`;
        return;
    }
    if (checkForDuplicates(allGroupArray)){
        alert`Please make sure there are no duplicate teams in any group`;
    }
}

//checks selections to make sure no option is set to "select a team"
let selectionCheck = function(array){
    let noselection = document.getElementById("noselection").value;
    if (array.every(a => a.value != noselection))
        return true;
    else
        return false;
}

function checkForDuplicates(array) {
    const first = {};
    let dupes = 0;
    array.forEach(item => first[item.value] ? dupes++ : first[item.value] = true);
    if (dupes != 0)
        return true;
    else
        return false;
}