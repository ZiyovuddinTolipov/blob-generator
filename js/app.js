let outputCode = document.getElementById("css-code");
const toastLiveExample = document.getElementById('liveToast')
const copyBtn = document.getElementById("copy");
let copyTime=document.getElementById('copyTime')

let slider = document.querySelectorAll("input[type='range']");
slider.forEach(function (slider) {
    slider.addEventListener("input", createBlob);
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
});

createBlob();
