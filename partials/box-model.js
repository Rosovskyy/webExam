const addBoxModel = () => {
    const myElem = document.createElement("div");
    myElem.innerHTML = `
    <container>
    <div class="block__header__container">
        <a href="#box-model" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">CSS - Box-Model</h4>
    </div>
    <p>
        The CSS box model is essentially a box that wraps around every HTML element. It consists of:
        margins, borders, padding, and the actual content.
    </p>
    <ul class="box-model__properties">
        <li>
            <b>Border Area:</b> It is the area between the box’s padding and margin. Its dimensions are
            given by the width and height of border.
        </li>
        <li>
            <b>Margin Area:</b> This area consists of space between border and margin. The dimensions of
            Margin area are the margin-box width and the margin-box height. It is useful to separate
            the element from its neighbors.
        </li>
        <li>
            <b>Padding Area:</b> It includes the element’s padding. This area is actually the space around
            the content area and within the border box. Its dimensions are given by the width of the
            padding-box and the height of the padding-box.
        </li>
        <li>
            <b>Content Area:</b> This area consists of content like text, image, or other media content.
            It is bounded by the content edge and its dimensions are given by content box width and height.
        </li>
    </ul>
    <p>
        And here is two small examples of these properties:
        <a href="applications/box-model/firstExample.html" class="block__task-link"
            aria-label="first-example">
            First
        </a>
        <a href="applications/box-model/secondExample.html" class="block__task-link"
            aria-label="second-example">
            Second
        </a>
    </p>

    <div class="box-model__margin-collapse">
        <h5>Margin collapse</h5>
        <p>Collapsing margins happen when two vertical margins come in contact with one another.
            If one margin is greater than the other, then that margin overrides the other,
            leaving one margin.
        </p>
        <p>
            And here you can check ways of avoiding it:
            <br>
            <a href="applications/box-model/index.html" title="Go to my css application"
                class="block__task-link">
                Click here :)
            </a>
        </p>
    </div>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
    </container>
    `;

    return myElem;
};

export {addBoxModel};