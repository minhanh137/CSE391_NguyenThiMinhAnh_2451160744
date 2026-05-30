const soBiMat = Math.floor(Math.random() * 100) + 1;

let soLanDoan = 0;
let daDoanDung = false;

const lichSuDoan = [];

while (soLanDoan < 7 && !daDoanDung) {
    let input = prompt(
        `Lần ${soLanDoan + 1}/7\nNhập số từ 1 đến 100:`
    );
    let soDoan = Number(input);

    if (
        input === null ||
        isNaN(soDoan) ||
        soDoan < 1 ||
        soDoan > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    let daTonTai = false;

    for (let i = 0; i < lichSuDoan.length; i++) {
        if (lichSuDoan[i] === soDoan) {
            daTonTai = true;
            break;
        }
    }
    if (daTonTai) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    lichSuDoan.push(soDoan);
    soLanDoan++;

    if (soDoan === soBiMat) {
        daDoanDung = true;
        alert(`🎉 Đúng rồi! Bạn đoán đúng sau ${soLanDoan} lần!`);
    }
    else if (soDoan < soBiMat) {
        alert("⬆ Cao hơn");
    }
    else {
        alert("⬇ Thấp hơn");
    }
}

if (!daDoanDung) {
    alert(
        `😢 Hết lượt!\nĐáp án là: ${soBiMat}`
    );
}