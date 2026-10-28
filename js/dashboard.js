let productionChart = null;
let logisticsChart = null;

window.onload = () => {

    initUpload();

    createProductionChart();

    createLogisticsChart();

};

function initUpload(){

    const uploadBtn =
        document.getElementById(
            "uploadBtn"
        );

    uploadBtn.addEventListener(
        "click",
        () => {

            const fileInput =
                document.getElementById(
                    "excelFile"
                );

            const msg =
                document.getElementById(
                    "uploadMessage"
                );

            if(
                fileInput.files.length === 0
            ){

                msg.innerHTML =
                "⚠ 파일을 선택하세요.";

                return;
            }

            msg.innerHTML =
            `✅ ${fileInput.files[0].name}
            업로드 준비 완료`;

        }
    );

}

function createProductionChart(){

    const ctx =
        document.getElementById(
            "productionChart"
        );

    productionChart =
        new Chart(ctx,{

            type:"bar",

            data:{

                labels:[
                    "W40",
                    "W41",
                    "W42",
                    "W43",
                    "W44",
                    "W45"
                ],

                datasets:[

                    {
                        label:"생산계획",

                        backgroundColor:"#234f88",

                        data:[
                            100,
                            110,
                            120,
                            130,
                            140,
                            150
                        ]
                    },

                    {
                        label:"생산실적",

                        backgroundColor:"#e6a0a0",

                        data:[
                            98,
                            108,
                            118,
                            126,
                            137,
                            145
                        ]
                    }

                ]

            },

            options:{
                responsive:true,
                maintainAspectRatio:false
            }

        });

}

function createLogisticsChart(){

    const ctx =
        document.getElementById(
            "logisticsChart"
        );

    logisticsChart =
        new Chart(ctx,{

            type:"bar",

            data:{

                labels:[
                    "W40",
                    "W41",
                    "W42",
                    "W43",
                    "W44",
                    "W45"
                ],

                datasets:[

                    {
                        label:"판매계획",

                        backgroundColor:"#84b64c",

                        data:[
                            90,
                            100,
                            110,
                            120,
                            130,
                            140
                        ]
                    },

                    {
                        label:"판매실적",

                        backgroundColor:"#4975a7",

                        data:[
                            88,
                            97,
                            106,
                            118,
                            127,
                            135
                        ]
                    }

                ]

            },

            options:{
                responsive:true,
                maintainAspectRatio:false
            }

        });

}
