// ============================
// SJG DMS Dashboard v1.2
// ============================

let productionChart = null;
let logisticsChart = null;

window.onload = function () {

    initUpload();

    createProductionChart();

    createLogisticsChart();

};

// ============================
// 업로드 이벤트
// ============================

function initUpload() {

    const uploadBtn =
        document.getElementById("uploadBtn");

    if (!uploadBtn) return;

    uploadBtn.addEventListener(
        "click",
        function () {

            const fileInput =
                document.getElementById("excelFile");

            const msg =
                document.getElementById("uploadMessage");

            if (
                !fileInput ||
                fileInput.files.length === 0
            ) {

                msg.innerHTML =
                    "⚠ 업로드할 Excel 파일을 선택하세요.";

                return;
            }

            const file =
                fileInput.files[0];

            msg.innerHTML = `
                ✅ 파일 선택 완료<br>
                파일명 : ${file.name}<br>
                상태 : 업로드 준비
            `;

        }
    );

}

// ============================
// 생산관리 차트
// ============================

function createProductionChart() {

    const canvas =
        document.getElementById(
            "productionChart"
        );

    if (!canvas) return;

    if (productionChart) {
        productionChart.destroy();
    }

    productionChart =
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
                        label: "생산계획",

                        backgroundColor:
                            "#214f8b",

                        data: [
                            100,
                            110,
                            120,
                            130,
                            140,
                            150
                        ]
                    },

                    {
                        label: "생산실적",

                        backgroundColor:
                            "#e09a9a",

                        data: [
                            95,
                            108,
                            118,
                            126,
                            137,
                            145
                        ]
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "top"
                    }

                }

            }

        });

}

// ============================
// 물류관리 차트
// ============================

function createLogisticsChart() {

    const canvas =
        document.getElementById(
            "logisticsChart"
        );

    if (!canvas) return;

    if (logisticsChart) {
        logisticsChart.destroy();
    }

    logisticsChart =
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
                        label: "판매계획",

                        backgroundColor:
                            "#81B64C",

                        data: [
                            90,
                            100,
                            110,
                            120,
                            130,
                            140
                        ]
                    },

                    {
                        label: "판매실적",

                        backgroundColor:
                            "#3F72AF",

                        data: [
                            88,
                            96,
                            108,
                            118,
                            127,
                            135
                        ]
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "top"
                    }

                }

            }

        });

}

// ============================
// KPI 업데이트용
// 향후 Excel 업로드 시 사용
// ============================

function updateKPI(data) {

    document.getElementById(
        "customerPlan"
    ).innerText =
        data.customerPlan.toLocaleString();

    document.getElementById(
        "productionPlan"
    ).innerText =
        data.productionPlan.toLocaleString();

    document.getElementById(
        "materialQty"
    ).innerText =
        data.materialQty.toLocaleString();

    document.getElementById(
        "shipmentPlan"
    ).innerText =
        data.shipmentPlan.toLocaleString();

    document.getElementById(
        "issueCount"
    ).innerText =
        data.issueCount + "건";

}

// ============================
// Excel 연동용 예시
// v1.3 에서 연결 예정
// ============================

const sampleData = {

    customerPlan: 125430,

    productionPlan: 118000,

    materialQty: 991,

    shipmentPlan: 115600,

    issueCount: 5

};

// updateKPI(sampleData);
