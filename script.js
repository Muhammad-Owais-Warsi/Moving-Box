function Up() {
    let up = document.getElementById("box");
    let marginTop = parseInt(up.style.marginTop) || 225;

    if (marginTop <= 225 && marginTop >= 0 || marginTop >= 225 && marginTop <= 463) {
        up.style.marginTop = (marginTop - 10) + "px"
    }
    else if (marginTop >= 463) {
        up.style.marginTop = (marginTop - 10) + "px";
    }
    else if (marginTop <= 0) {
        alert("Cannot be moved further");
    }
}

function Left() {
    let left = document.getElementById("box");
    let marginLeft = parseInt(left.style.marginLeft) || 648;

    if (marginLeft <= 648 && marginLeft >= 0 || marginLeft >= 648 && marginLeft <= 1312) {
        left.style.marginLeft = (marginLeft - 10) + "px";
    }
    else if (marginLeft >= 1312) {
        left.style.marginLeft = (marginLeft - 10) + "px";
    }
    else if (marginLeft <= 0) {
        alert("Cannot be moved further");
    }
}

function Right() {
    let right = document.getElementById("box");


    let marginLeft = parseInt(right.style.marginLeft) || 648;


    if (marginLeft <= 648 && marginLeft >= 0 || marginLeft >= 648 && marginLeft <= 1312) {
        right.style.marginLeft = (marginLeft + 10) + "px";
    }
    else if (marginLeft <= 0) {
        right.style.marginLeft = (marginLeft + 10) + "px";
    }
    else if (marginLeft >= 1312) {
        alert("Cannot be moved further");
    }
}

function Down() {
    let d = document.getElementById("box");

    let marginTop = parseInt(d.style.marginTop) || 225;

    if (marginTop <= 225 && marginTop >= 0 || marginTop >= 225 && marginTop <= 463) {
        d.style.marginTop = (marginTop + 10) + "px";
    }
    else if (marginTop <= 0) {
        d.style.marginTop = (marginTop + 10) + "px";
    }
    else if (marginTop >= 463) {
        alert("Cannot be moved further");
    }
}

function Center()
{
    let box = document.getElementById("box");

    let marginTop = parseInt(box.style.marginTop) || 225;
    let marginLeft = parseInt(box.style.marginLeft) || 648;

    box.style.marginTop = "225px";
    box.style.marginLeft = "648px";
}