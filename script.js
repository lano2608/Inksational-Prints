document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageFolder = 'images/';
    const imageCount = 36; // Number of images in the folder
    let currentIndex = 0;

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}image${i}.jpg`;
        img.alt = `Image ${i}`;
        img.dataset.index = i - 1;
        img.addEventListener('click', () => openModal(img.src, img.dataset.index));
        gallery.appendChild(img);
    }

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openModal(src, index) {
        modal.style.display = 'block';
        modalImg.src = src;
        currentIndex = parseInt(index);
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = imageCount - 1;
        } else if (currentIndex >= imageCount) {
            currentIndex = 0;
        }
        modalImg.src = `${imageFolder}image${currentIndex + 1}.jpg`;
    }

    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.next').addEventListener('click', () => changeImage(1));
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}
