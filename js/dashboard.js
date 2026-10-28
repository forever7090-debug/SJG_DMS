window.onload = function () {

    loadDashboard();

    const btn =
        document.getElementById("openInput");

    if (btn) {

        btn.addEventListener(
            "click",
            openModal
        );

    }

};

function openModal() {

    document
        .getElementById("inputModal")
        .style.display = "block";

}

function closeModal() {

    document
        .getElementById("inputModal")
        .style.display = "none";

}

function loadDashboard() {

    const data = getData();

    if (!data) {

        console.log("저장 데이터 없음");

        return;
    }

    document.getElementById(
        "customerPlan"
    ).innerText =
        data.customerPlan.toLocaleString() + " EA";

    document.getElementById(
        "productionPlan"
    ).innerText =
        data.productionPlan.toLocaleString() + " EA";

    document.getElementById(
        "materialQty"
    ).innerText =
        data.materialRequired.toLocaleString() + " 품목";

    document.getElementById(
        "shipmentPlan"
    ).innerText =
        data.shipmentPlan.toLocaleString() + " EA";

    let issueCount = 0;

    const productionRate =
        data.productionActual /
        data.productionPlan * 100;

    const shipmentRate =
        data.shipmentActual /
        data.shipmentPlan * 100;

    if (productionRate < 95) {
        issueCount++;
    }

    if (shipmentRate < 95) {
        issueCount++;
    }

    document.getElementById(
        "issueCount"
    ).innerText =
        issueCount + "건";

    document.getElementById(
        "analysisResult"
    ).innerHTML =
        generateAnalysis(data);

    drawProductionChart();
}

function drawProductionChart() {

    const canvas =
        document.getElementById(
            "productionChart"
        );

    if (!canvas) return;

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "W40",
                "W41",
                "W42",
                "W43",
                "W44",
                "W45"
            ],

            datasets: [

                {
                    label: "계획",

                    data: [
                        100,
                        120,
                        110,
                        140,
                        150,
                        145
                    ],

                    backgroundColor:
                        "#204A87"
                },

                {
                    label: "실적",

                    data: [
                        95,
                        118,
                        108,
                        135,
                        149,
                        142
                    ],

                    backgroundColor:
                        "#f4a6a6"
                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "top"
                }

            }

        }

    });

}
const uploadBtn =
document.getElementById(
    "uploadBtn"
);

if(uploadBtn){

uploadBtn.addEventListener(
"click",
()=>{

document.getElementById(
"uploadMessage"
).innerHTML =

"✅ 파일 선택 완료<br><br>"
+
"v1.2에서 Excel Parsing 연결 예정";

});

}
