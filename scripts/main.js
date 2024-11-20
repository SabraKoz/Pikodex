import { getPikomon } from "./pikomon.js"

const pikoHTML = getPikomon();


const container = document.querySelector('#container')
container.innerHTML = pikoHTML
