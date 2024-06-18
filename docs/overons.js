document.addEventListener("DOMContentLoaded", function() {
    // Knop functionaliteit
    document.getElementById("toonVerhaal").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("transparant").classList.remove("onzichtbaar");
        document.getElementById("doorschijnend").classList.add("verborgen");
        document.getElementById("verhaal").classList.remove("verborgen");
        document.getElementById("number").innerHTML = Math.floor(Math.random() * 10000);
        var name = document.getElementById('naamTextfield').value;
        document.getElementById('name').innerText = name;

        let checkbox1Checked = document.getElementById('combo1').checked;
        let checkbox1Value = document.getElementById('combo1').value;

        let checkbox2Checked = document.getElementById('combo2').checked;
        let checkbox2Value = document.getElementById('combo2').value;
        let newVal = "";

        if (checkbox1Checked && !checkbox2Checked) {
            newVal += checkbox1Value;
        } else if (!checkbox1Checked && checkbox2Checked) {
            newVal += checkbox2Value;
        } else if (checkbox1Checked && checkbox2Checked) {
            newVal += checkbox1Value + " en " + checkbox2Value;
        }
        document.getElementById("chosenBox").innerHTML = newVal;
    });
});
