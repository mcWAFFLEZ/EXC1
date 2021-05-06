window.onload = function () {
    const barData = {"fishing-bar": 70, "drifting-bar": 95, "slacking-bar": 45, "penetration-bar": 69}

    // Get the modal
    const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.getElementById("myImg");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

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

    document.getElementById('text-area').oninput = countChars;
    const charCounter = document.getElementById('current_count');

    function countChars() {
        const currentLength = this.value.length;
        charCounter.innerText = currentLength.toString();
    }

    let returnToTopBtn = document.getElementById("return-to-top-btn").addEventListener('click', topFunction);
    function topFunction() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}



