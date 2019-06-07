const addGame = () => {
    const myElem  =document.createElement("div");
    myElem.innerHTML = `
<container>
    <div class="block__header__container">
        <a href="#game" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">JavaScript - Game Of Life</h4>
    </div>
    <p>Here is the game called "Game Of Life".</p>
    <h6 class="game__info">Description:</h6>
    <p>
        The game is a zero-player game, meaning that its evolution is determined by its initial state,
        requiring no further input. One interacts with the Game of Life by creating an initial configuration
        and observing how it evolves, or, for advanced players, by creating patterns with particular
        properties.
    </p>
    <h6 class="game__info">Rules:</h6>
    <ul class="game__rules">
        <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        </li>
    </ul>
    <p>
        <a href="applications/GameOfLife/index.html" class="block__task-link">
            And mine implementation of the game!
        </a>
    </p>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
</container>
`;
    return myElem;
};

export {addGame};