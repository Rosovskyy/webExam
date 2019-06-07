const addLayouts = () => {
    const myElem = document.createElement("div");
    myElem.innerHTML = `
<container>
    <div class="block__header__container">
        <a href="#layouts" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">CSS - Layouts</h4>
    </div>
    <h6>Flex-Box example:</h6>
    <section class="layouts__parent">
        <div class="layouts__parent__child">Child #1</div>
        <div class="layouts__parent__child">Child #2</div>
        <div class="layouts__parent__child">Child #3</div>
        <div class="layouts__parent__child">Child #4</div>
    </section>
    <p>
        And here is my website build on flex-boxes:
        <br>
        <a href="/flex-box/index.html" title="Go to my flex-box application"
            class="block__task-link">
            Click here :)
        </a>
    </p>
    <h6>Grid</h6>
    <section class="layouts__grid">
        <div class="layouts__grid__child_1">1</div>
        <div class="layouts__grid__child_2">2</div>
        <div class="layouts__grid__child_3">3</div>
        <div class="layouts__grid__child_4">4</div>
        <div class="layouts__grid__child_5">5</div>
        <div class="layouts__grid__child_6">6</div>
        <div class="layouts__grid__child_7">7</div>
        <div class="layouts__grid__child_8">8</div>
        <div class="layouts__grid__child_9">9</div>
    </section>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
</container>
    `;

    return myElem;
};

export {addLayouts};