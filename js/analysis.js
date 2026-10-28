function generateAnalysis(data) {

    let result = "";

    const productionRate =
        (data.productionActual /
            data.productionPlan * 100)
            .toFixed(1);

    const shipmentRate =
        (data.shipmentActual /
            data.shipmentPlan * 100)
            .toFixed(1);

    result += `
        <h3>AI 종합 분석</h3>
        <br>
    `;

    result += `
        생산달성률 :
        <b>${productionRate}%</b><br>
    `;

    result += `
        출하달성률 :
        <b>${shipmentRate}%</b><br><br>
    `;

    if (productionRate < 95) {

        result += `
            <p class="danger">
            생산 실적 저조가 확인되었습니다.
            </p>
        `;

    } else {

        result += `
            <p class="good">
            생산목표 달성
            </p>
        `;

    }

    if (shipmentRate < 95) {

        result += `
            <p class="danger">
            출하지연 위험이 존재합니다.
            </p>
        `;

    } else {

        result += `
            <p class="good">
            출하실적 안정
            </p>
        `;

    }

    result += `
        <br>
        종합의견 :
    `;

    if (productionRate >= 95 &&
        shipmentRate >= 95) {

        result += `
            운영상태는 정상입니다.
        `;

    } else {

        result += `
        생산/출하 부문에 대한
        추가 모니터링이 필요합니다.
        `;

    }

    return result;

}
