import { getPikomon } from "./database.js"


export const pikoList = () => {
    let pikoHTML = "<ul>"

    for (const pikomon of pikomons) {
        pikoHTML += `<li>${pikomon.name}</li>`
    }

    pikoHTML += "</ul>"

    return pikoHTML
}
const pikomon = getPikomon()