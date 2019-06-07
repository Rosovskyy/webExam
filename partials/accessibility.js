const addAccessibility = () => {
    const myElem  =document.createElement("div");
    myElem.innerHTML = `
<container>
    <div class="block__header__container">
        <a href="#accessibility" class="block__header__link">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
        </a>
        <h4 class="block__header" id="accessibility">HTML - Accessibility</h4>
    </div>
    <p>Some of the important moments about the accessibility:</p>
    <ul class="accessibility__moments">
        <li class="moments__rule">Headings Are Important!
            <ul>
                <li>Headings are defined with the <b>h1</b> to <b>h6</b> tags</li>
            </ul>
            <pre class="accessibility__code-block">
    <span class="red">&lt;h1></span>Header 1<span class="red">&lt;/h1></span>
    <span class="red">&lt;h2></span>Header 2<span class="red">&lt;/h2></span>
    <span class="red">&lt;h3></span>Header 3<span class="red">&lt;/h3></span>
    <span class="red">&lt;h4></span>Header 4<span class="red">&lt;/h4></span>
    <span class="red">&lt;h5></span>Header 5<span class="red">&lt;/h5></span>
    <span class="red">&lt;h6></span>Header 6<span class="red">&lt;/h6></span></pre>
        </li>
        <li class="moments__rule">Alternative Text
            <ul>
                <li>
                    The <b>alt</b> attribute provides an alternate text for an image, if the user for some
                    reason cannot view it (because of slow connection, an error in the src attribute,
                    or if the user uses a screen reader).
                </li>
            </ul>
            <pre class="accessibility__code-block">
    <span class="blue">&lt;img</span> <span class="red">src</span>=<span
                    class="greenyellow">"ivankiv_the_best.png"</span> <span class="red">alt="beautiful face of Ivankiv"</span><span
                    class="blue">></span></pre>
        </li>

        <li class="moments__rule">Declare The Language
            <ul>
                <li>Declaring a language is important for screen readers and search engines, and is declared
                    with the <b>lang</b> attribute. Use the following to show a web page in English:
                </li>
            </ul>
            <pre class="accessibility__code-block">
    &lt;!DOCTYPE html>
    <span class="red">&lt;html lang="en"></span>
    &lt;body>

    ...

    &lt;/body>
    &lt;/html></pre>
        </li>
        <li class="moments__rule">Use Clear Language
            <ul>
                <li>
                    Use clear language that is easy to understand, and try to avoid characters that cannot
                    be read clearly by a screen reader.
                </li>
            </ul>
        </li>
        <li class="moments__rule">Write Good Links
            <ul>
                <li>
                    A <b>link</b> should explain clearly what information the reader will get by clicking on
                    that link.
                </li>
            </ul>
        </li>
        <li class="moments__rule">Link Titles
            <ul>
                <li>
                    The <b>title</b> attribute specifies extra information about an element. The information
                    is most often shown as a tooltip text when the mouse moves over the element.
                </li>
            </ul>
            <pre class="accessibility__code-block">
    <span class="blue">&lt;a</span> <span class="red">href="https.com/"</span> <span
                    class="greenyellow">title="do not give me a talon"</span>>I was studying hard <span
                    class="blue">&lt;/a></span></pre>
        </li>
    </ul>
    <p>
        You will be able to see my way of keeping accessibility during all other projects.
        <br>
        <a href="applications/w3c/w3c.html" class="block__task-link"
           title="Go to my accessibility implementation">
            Link to the accessibility project
        </a>
    </p>
    <p><a href="#" class="block__back" title="Go to the top of the page">Back</a></p>
</container>
`;
    return myElem;
};

export {addAccessibility};