import { getProducts } from "./database.js"

addEventListener("click", (clickEvent) => {
    const clickedItem = clickEvent.target;
    if (clickedItem.dataset.type === "product") {
        window.alert(`${clickedItem.dataset.name}\n$${clickedItem.dataset.price}`)
    }
})

export const Products = () => {

    const products = getProducts()

    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
            data-price="${product.price}"
            data-name="${product.name}">
                ${product.name}
            </li>`
    }

    html += "</ul>"

    return html
}

