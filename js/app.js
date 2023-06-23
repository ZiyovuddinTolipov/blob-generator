let outputCode = document.getElementById("css-code");
const toastLiveExample = document.getElementById('liveToast')
const copyBtn = document.getElementById("copy");
let copyTime=document.getElementById('copyTime')

let startTime = null;
let endTime = null;

function startTimer() {
    startTime = new Date();
    console.log("Birinchi bosildi.");
}

function endTimer() {
    if (!startTime) {
        console.log("Bosqichni boshlashdan oldin tugmaga bosmadingiz.");
        return;
    }

    endTime = new Date();
    // console.log("Edited");
    copyTime.value= "edited and copied";
    startTime = null;
    endTime = null;
}
function endTimer2() {
    if (!startTime) {
        console.log("Bosqichni boshlashdan oldin tugmaga bosmadingiz.");
        return;
    }
    endTime = new Date();
    let duration = (endTime - startTime) / 1000;
    // console.log("Keyingi bosildi.");
    // if (duration > 60) {
    // copyTime.value= `You copied ${Math.floor(duration/60)}m and ${duration}s ago.`;
    // } else {
    //     copyTime.value= "You copied " + duration + "s ago.";
    // }
    copyTime.value= "You copied " + duration + "s ago.";
}

let slider = document.querySelectorAll("input[type='range']");
slider.forEach(function (slider) {
    slider.addEventListener("input", createBlob);
});

slider.forEach(function (slider) {
    slider.addEventListener("input", endTimer);
});
let inputs = document.querySelectorAll("input[type='number']");


inputs.forEach(function (inp) {
    inp.addEventListener("change", createBlob);
});

function createBlob() {
    let radiusOne = slider[0].value;
    let radiusTwo = slider[1].value;
    let radiusThree = slider[2].value;
    let radiusFour = slider[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree
        }% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour
        }%`;

    document.getElementById(
        "blob"
    ).style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px;`;
    // console.log(borderRadius);
    outputCode.value = `border-radius: ${borderRadius};`;
    
}

copyBtn.addEventListener("click", function () {
    outputCode.select();
    document.execCommand("copy");
    let toast = new bootstrap.Toast(toastLiveExample);
    toast.show();

    // timer
    if (!startTime) {
        startTimer();
    } else {
        endTimer2();
    }
});

createBlob();
