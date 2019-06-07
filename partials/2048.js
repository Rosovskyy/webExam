const addGameNumbers = () => {
    const myElem  =document.createElement("div");
    myElem.innerHTML = `
<container>
    <div class="block__header__container">
        <a href="#2048" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">JavaScript - 2048</h4>
    </div>
    <p>Here is the game called "2048".</p>
    <h6 class="game__info">Description:</h6>
    <p>
        2048 is a single-player sliding block puzzle game designed by Italian web developer Gabriele
        Cirulli. The game's objective is to slide numbered tiles on a grid to combine them to create a tile
        with the number 2048. However, one can continue to play the game after reaching the goal, creating
        tiles with larger numbers.
    </p>
    <p>
        <a href="applications/2049/index.html" class="block__task-link">
            And mine implementation of the game!
        </a>
    </p>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
    </container>
`;
    return myElem;
};

export {addGameNumbers};