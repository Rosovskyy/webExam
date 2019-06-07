const addNavigation = () => {
    const myElem = document.createElement("div");
    myElem.innerHTML = `
    <container>
    <div class="navigation-bar__knowledge">
        <h6 class="navigation-bar__header">HTML</h6>
        <ul class="navigation-bar__element">
            <li><a href="#semantic" title="Go to semantic part">Semantic</a></li>
            <li><a href="#accessibility" title="Go te accessibility part">Accessibility</a></li>
        </ul>
    </div>

    <p><a href="#" class="back"></a></p>

    <div class="navigation-bar__knowledge">
        <h6 class="navigation-bar__header">CSS</h6>
        <ul class="navigation-bar__element">
            <li><a href="#selectors" title="Go to selectors part">Selectors</a></li>
            <li><a href="#box-model" title="Go to box-model part">Box-Model</a></li>
            <li><a href="#layouts" title="Go to layout part">Layouts</a></li>
        </ul>
    </div>

    <p><a href="#" class="back"></a></p>

    <div class="navigation-bar__knowledge">
        <h6 class="navigation-bar__header">Features</h6>
        <ul class="navigation-bar__element">
            <li><a href="#bem" title="Go to BEM part">BEM</a></li>
            <li><a href="#preprocessors" title="Go to preprocessors part">Preprocessors</a></li>
            <li><a href="#column-grid-layout" title="Go to column-grid-layout part">Column-Grid-Layout</a></li>
            <li><a href="#design" title="Go to design part">Design</a></li>
        </ul>
    </div>

    <div class="navigation-bar__knowledge">
        <h6 class="navigation-bar__header">JavaScript</h6>
        <ul class="navigation-bar__element">
            <li><a href="#history" title="Go to BEM part">History</a></li>
            <li><a href="#functions" title="Go to preprocessors part">Functions</a></li>
            <li><a href="#game" title="Go to column-grid-layout part">Game</a></li>
            <li><a href="#visualization" title="Go to visualization part">Visualization</a></li>
        </ul>
    </div>
    </container>
    `;

    return myElem;
};

export {addNavigation};