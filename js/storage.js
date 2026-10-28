function saveData() {

    const data = {
        week: document.getElementById("week").value,
        customerPlan: Number(document.getElementById("customer").value),
        productionPlan: Number(document.getElementById("production_plan").value),
        productionActual: Number(document.getElementById("production_actual").value),
        shipmentPlan: Number(document.getElementById("shipment_plan").value),
        shipmentActual: Number(document.getElementById("shipment_actual").value),
        materialRequired: Number(document.getElementById("material_required").value)
    };

    localStorage.setItem(
        "sjg-data",
        JSON.stringify(data)
    );

    alert("저장 완료");

    location.reload();
}

function getData() {

    return JSON.parse(
        localStorage.getItem("sjg-data")
    );

}
