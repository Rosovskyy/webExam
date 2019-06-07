const addPreprocessor = () => {
    const myElem = document.createElement("div");
    myElem.innerHTML = `
    <container>
    <div class="block__header__container">
        <a href="#preprocessors" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">FEATURES - Preprocessors</h4>
    </div>
    <p>
        CSS <b>preprocessors</b> are scripting languages that extend the default capabilities of CSS. They
        enable
        us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and
        mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the
        number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.
    </p>

    <p><a href="#" class="back"></a></p>

    <div class="block__header__container">
        <a href="#bem-naming" class="block__header__link" id="bem-naming">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header">BEM CSS Selector Naming</h4>
    </div>
    <p>
        Please follow this easy to read Sass formatting, spacing and naming style. If you need more
        information please read the BEM website, or just ask.
    </p>
    <pre class="accessibility__code-block">
.branch {

&__maps-link {

&--text {
margin: $margin;
padding: $padding;
}
&--icon {
margin: $margin;
padding: $padding;
}
}
}
    </pre>
    <p>
        The above compiles to a unique semantic selector name that’s easily target-able for rollout team:
    </p>
    <pre class="accessibility__code-block">
.branch__maps-link--text {
margin: 10px;
padding: 10px;
}

.branch__maps-link--icon {
margin: 10px;
padding: 10px;
}
    </pre>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
    </container>
    `;

    return myElem;
};

export {addPreprocessor};