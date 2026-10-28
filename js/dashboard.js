window.onload = () => {

    document
    .getElementById("uploadBtn")
    .addEventListener("click", () => {

        const file =
        document.getElementById("excelFile");

        if(file.files.length === 0){

            alert("파일을 선택하세요.");

            return;
        }

        document
        .getElementById("uploadMessage")
        .innerHTML = `
            ✅ 파일 선택 완료<br>
            v1.2에서 Excel Parsing 연결 예정
        `;

    });

    createProductionChart();
    createLogisticsChart();
};

function createProductionChart(){

    new Chart(
        document.getElementById(
            "productionChart"
        ),
        {
            type:'bar',

            data:{
                labels:[
                    'W40','W41','W42',
                    'W43','W44','W45'
                ],

                datasets:[
                    {
                        label:'계획',
                        data:[100,110,120,130,140,150],
                        backgroundColor:'#1f3d75'
                    },
                    {
                        label:'실적',
                        data:[95,108,119,127,138,145],
                        backgroundColor:'#f29a9a'
                    }
                ]
            }
        }
    );

}

function createLogisticsChart(){

    new Chart(
        document.getElementById(
            "logisticsChart"
        ),
        {
            type:'bar',

            data:{
                labels:[
                    'W40','W41','W42',
                    'W43','W44','W45'
                ],

                datasets:[
                    {
                        label:'매출',
                        data:[70,75,78,85,92,95],
                        backgroundColor:'#8DB04E'
                    }
                ]
            }
        }
    );

}
