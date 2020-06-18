var data = []

window.onload = function () {
    var form = document.querySelector("form")
    form.addEventListener('submit', function () {
        event.preventDefault();
        var element = event.target;
        var record = {
            status: false,
            item: element[0].value,
            quantity: element[1].value,
            id: data.length + 1
        }
        data.push(record);
        console.log(data);
        submitData(record)
    })

}

function submitData(record) {
    var row = document.createElement("tr");

    var itemElement = document.createElement("td")
    itemElement.textContent = record.item;
    var quantityElement = document.createElement("td")
    quantityElement.textContent = record.quantity;

    row.appendChild(itemElement);
    row.appendChild(quantityElement);

    var table = document.getElementById("menu")
    table.appendChild(row)




}