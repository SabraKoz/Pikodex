import { getPikomon } from "./database.js";

const pikomon = getPikomon()

let pikoHtml = ''

for (const piko of pikomon) {
    pikoHtml += `
        <div class="piko-card">
            <img class="piko-img" src="${piko.imageUrl}"/>
            <div class="piko-info">
                <div class="piko-name">${piko.name}</div>
                <div class="piko-category info-text"><strong>Category:</strong> ${piko.category}</div>
                <div class="piko-abilities info-text"><strong>Abilities:</strong> ${piko.abilities}</div>
                <div class="piko-weakness info-text"><strong>Weaknessess:</strong> ${piko.weakness}</div>
            </div>
        </div>
    `
}

const container = document.querySelector('#container')

container.innerHTML += pikoHtml