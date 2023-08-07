document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
})

function initializeApp() {
    createGallery();
    scrollNav();
}

function scrollNav() {
    const links = document.querySelectorAll('.main-navbar a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = e.target.attributes.href.value;
            const section = document.querySelector(targetSection)
            section.scrollIntoView({behavior: 'smooth'});
        });
    });
}

function createGallery() {
    const gallery = document.querySelector('.gallery-images');
    for (let i = 1 ; i <= 12 ; i++) {
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen Galería">
        `;
        image.onclick = function () {
            showImage(i);
        };
        gallery.appendChild(image);
    }
}

function showImage(id) {
    const image = document.createElement('picture');
    image.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen Galería">
    `;
    // Creates overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fix-body');
        overlay.remove();
    }
    // Close button for modal
    const closeModal = document.createElement('P');
    closeModal.textContent = 'X';
    closeModal.classList.add('btn-close');
    closeModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fix-body');
        overlay.remove();
    };
    overlay.appendChild(closeModal);
    // Appends overlay to HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body');
}