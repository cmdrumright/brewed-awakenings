import { getEmployees, getOrders } from "./database.js"

addEventListener("click", (clickEvent) => {
    const clickedItem = clickEvent.target
    if (clickedItem.dataset.type === "employee") {
        const allOrders = getOrders()
        const orderCount = allOrders.filter((order) => order.employeeId === parseInt(clickedItem.dataset.id)).length
        window.alert(`${clickedItem.dataset.name} sold ${orderCount} products`)
    }
})

export const Employees = () => {
    const employees = getEmployees()
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

