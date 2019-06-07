import {addSemantic} from './semantic.js';
import {addNavigation} from './navigation.js';
import {addGameNumbers} from "./2048.js";
import {addAccessibility} from "./accessibility.js";
import {addBem} from "./bem.js";
import {addBoxModel} from "./box-model.js";
import {addColumnGridLayout} from "./column-grid-layout.js";
import {addDesign} from "./design.js";
import {addHistory} from "./history.js";
import {addFunctions} from "./functions.js";
import {addGame} from "./game.js";
import {addLayouts} from "./layouts.js";
import {addPreprocessor} from "./preprocessors.js";
import {addSelectors} from "./selectors.js";
import {addVisualization} from "./visualization.js";

import "../styles/general.scss";
import "../styles/Layout.scss";
import "../styles/top-bar.scss";
import "../styles/navigation-bar.scss";
import "../styles/content.scss";
import "../styles/accessibility.scss";
import "../styles/colors.scss";
import "../styles/selectors.scss";
import "../styles/box-model.scss";
import "../styles/game.scss";
import "../styles/history.scss";
import "../styles/grid-flex-model.scss";

const semantic = document.getElementById("semantic");
const navigation = document.getElementById("navigation");
const gameNumbers = document.getElementById("secondGame");
const accessibility = document.getElementById("accessibility");
const bem = document.getElementById("bem");
const boxModel = document.getElementById("box-model");
const columnGridLayout = document.getElementById("column-grid-layout");
const design = document.getElementById("design");
const history = document.getElementById("history");
const functions = document.getElementById("functions");
const game = document.getElementById("game");
const layouts = document.getElementById("layouts");
const preprocessors = document.getElementById("preprocessors");
const selectors = document.getElementById("selectors");
const visualization = document.getElementById("visualization");


semantic.appendChild(addSemantic());
navigation.appendChild(addNavigation());
gameNumbers.appendChild(addGameNumbers());
accessibility.appendChild(addAccessibility());
bem.appendChild(addBem());
boxModel.appendChild(addBoxModel());
columnGridLayout.appendChild(addColumnGridLayout());
design.appendChild(addDesign());
history.appendChild(addHistory());
functions.appendChild(addFunctions());
game.appendChild(addGame());
layouts.appendChild(addLayouts());
preprocessors.appendChild(addPreprocessor());
selectors.appendChild(addSelectors());
visualization.appendChild(addVisualization());

let headers = document.getElementsByClassName('block__header__container');
let links = document.getElementsByClassName("block__header__link");
for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener('mouseover', function () {
        links[i].style.visibility = 'visible';
    });

    headers[i].addEventListener('mouseout', function () {
        links[i].style.visibility = 'hidden';
    });
}