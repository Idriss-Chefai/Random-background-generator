document.querySelector("#button").onclick = function(){
    document.body.style.backgroundColor = colorPicker()
}
function colorPicker(){
    let coldec = Math.floor(Math.random()* 16777216 +1)
    let colhex = "#"+coldec.toString(16);
    return colhex;
}

function Party(){
    let inter = setInterval( () => document.body.style.backgroundColor = colorPicker(),50);
    document.querySelector("#buttonParty").value = "Let's dance !!!"
}


document.querySelector("#buttonParty").onclick = function(){
    document.body.style.backgroundColor = Party()
}