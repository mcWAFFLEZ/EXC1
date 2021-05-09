window.onload = function () {
    //MODAL LOGIC
    const modal = document.getElementById("myModal");

    const img = document.getElementById("myImg");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    //BARS FILL
    const barData = {"fishing-bar": 70, "drifting-bar": 95, "slacking-bar": 45, "penetration-bar": 69}
    const progressBars = document.getElementsByClassName("progress");
    for (let i = 0; i < progressBars.length; i++) {
        progressBars[i].addEventListener("mouseover", fill);
    }

    function fill() {
        let barId = this.children[0].id;
        for (let i = 0; i < barData[barId]; i++) {
            this.children[0].style.width = i.toString() + "%";
            setTimeout(null, 7000);
        }
    }

    //TEXT AREA
    document.getElementById('text-area').oninput = countChars;
    const charCounter = document.getElementById('current_count');
    const submitButton = document.getElementById('submit-btn');

    function countChars() {
        const currentLength = this.value.length;
        charCounter.innerText = currentLength.toString();
        if (currentLength > 200) {
            submitButton.setAttribute("disabled", "");
        } else {
            submitButton.removeAttribute("disabled");
        }
    }

    //SET AS REQUIRED
    const formElements = document.getElementsByClassName("form-element");
    for(let i = 0; i < formElements.length; i++){
        formElements[i].setAttribute("required","");
    }

    //RETURN TO TOP BUTTON
    document.getElementById("return-to-top-btn").addEventListener('click', topFunction);
    function topFunction() {
        document.documentElement.scrollTop = 0;
    }
}



