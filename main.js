
function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

document.querySelector('.dropdown button').addEventListener('click', toggleDropdown);
function switchToDogTheme() {
    document.querySelector('.rover-hero-container').style.backgroundImage = "url('https://st2.depositphotos.com/1072614/9672/i/600/depositphotos_96723200-stock-photo-young-girl-is-resting-with.jpg')";
    document.querySelector('.hero-title h1').textContent = "We're the Dog People";
    document.querySelector('.rover-action-shot').style.backgroundImage = "url('https://st.depositphotos.com/1036367/59690/i/600/depositphotos_596901844-stock-photo-happy-curly-woman-tilts-head.jpg')";
    document.body.innerHTML = document.body.innerHTML.replace(/Cat/g, "Dog").replace(/cat/g, "dog");
}

function switchToCatTheme() {
    document.querySelector('.rover-hero-container').style.backgroundImage = "url('https://www.petnsur.co.nz/content/blog/0632895001516157717.jpg?width=1040&height=500&fit=bounds')";
    document.querySelector('.hero-title h1').textContent = "We're the Cat People";
    document.querySelector('.rover-action-shot').style.backgroundImage = "url('https://img.bildderfrau.de/img/haustiere/crop236200665/5916631566-w820-cv16_9-q85-dc1/beliebte-katzennamen-2022.jpg')";
    document.body.innerHTML = document.body.innerHTML.replace(/Dog/g, "Cat").replace(/dog/g, "cat");
}

document.getElementById('dog-button').addEventListener('click', switchToDogTheme);
document.getElementById('cat-button').addEventListener('click', switchToCatTheme);
