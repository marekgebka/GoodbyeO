// Click reveal logic

let tiles = document.querySelectorAll('.tile');

for (let tile of tiles) {
    
    tile.addEventListener('click', (e) => {
        tile.classList.toggle('showText')
    });
}

