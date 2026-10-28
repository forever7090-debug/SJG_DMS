window.onload = function () {

    const ctx =
        document.getElementById(
            "productionChart"
        );

    if (!ctx) return;

    new Chart(ctx, {

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

                    backgroundColor: "#204A87",

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
                    label: "실적",

                    backgroundColor: "#f0a2a2",

                    data: [
                        95,
                        108,
                        118,
                        126,
                        138,
                        145
                    ]
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    const uploadBtn =
        document.getElementById(
            "uploadBtn"
        );

    uploadBtn.addEventListener(
        "click",
        function(){

            document.getElementById(
                "uploadMessage"
            ).innerText =
            "파일 업로드 UI 준비 완료";

        }
    );
};
