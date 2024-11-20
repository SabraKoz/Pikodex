import { pikomonData } from "./database.js"

export const getPikomon = () => {
    const pikoData = pikomonData();

    let pikoHTML = '';

    for (const pikomon of pikoData) {
        pikoHTML += `
            <section class="piko-card">
                <img src="${pikomon.imageUrl}" class="piko-img">
                <div class="piko-name">${pikomon.name}</div>
                <ul class="piko-info info-text">
                    <li class="piko-category">Category: ${pikomon.category}</li>
                    <li class="piko-abilities">Abilities: ${pikomon.abilities}</li>
                    <li class="piko-weakness">Weakness: ${pikomon.weakness}</li>
                </ul>
            </section>
            `;
    }
    return pikoHTML
};

