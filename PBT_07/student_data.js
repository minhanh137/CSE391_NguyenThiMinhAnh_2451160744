const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let tongMath = 0;
let tongPhysics = 0;
let tongCS = 0;

let tongNam = 0;
let soNam = 0;

let tongNu = 0;
let soNu = 0;

let maxTB = -1;
let minTB = 11;

let svMax = "";
let svMin = "";

console.log("------------------------------------------------");
console.log("| STT | Tên      |  TB  | Xếp loại          |");
console.log("------------------------------------------------");

for (let i = 0; i < students.length; i++) {
    let tb =
        students[i].math * 0.4 +
        students[i].physics * 0.3 +
        students[i].cs * 0.3;
    let xepLoai = "";
    
    if (tb >= 8) {
        xepLoai = "Giỏi";
        gioi++;
    }
    else if (tb >= 6.5) {
        xepLoai = "Khá";
        kha++;
    }
    else if (tb >= 5) {
        xepLoai = "Trung bình";
        trungBinh++;
    }
    else {
        xepLoai = "Yếu";
        yeu++;
    }

    console.log(
        `| ${(i + 1).toString().padEnd(3)} ` +
        `| ${students[i].name.padEnd(8)} ` +
        `| ${tb.toFixed(1).padEnd(4)} ` +
        `| ${xepLoai.padEnd(17)} |`
    );

    if (tb > maxTB) {
        maxTB = tb;
        svMax = students[i].name;
    }
    if (tb < minTB) {
        minTB = tb;
        svMin = students[i].name;
    }

    tongMath += students[i].math;
    tongPhysics += students[i].physics;
    tongCS += students[i].cs;

    if (students[i].gender === "M") {
        tongNam += tb;
        soNam++;
    }
    else {
        tongNu += tb;
        soNu++;
    }
}

console.log("------------------------------------------------");

console.log("\n=== THỐNG KÊ XẾP LOẠI ===");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\n=== SINH VIÊN ĐIỂM CAO NHẤT / THẤP NHẤT ===");
console.log("Cao nhất:", svMax, "-", maxTB.toFixed(1));
console.log("Thấp nhất:", svMin, "-", minTB.toFixed(1));

console.log("\n=== ĐIỂM TRUNG BÌNH TỪNG MÔN ===");
console.log("Math:", (tongMath / students.length).toFixed(2));
console.log("Physics:", (tongPhysics / students.length).toFixed(2));
console.log("CS:", (tongCS / students.length).toFixed(2));

console.log("\n=== ĐIỂM TB THEO GIỚI TÍNH ===");
console.log("Nam:", (tongNam / soNam).toFixed(2));
console.log("Nữ:", (tongNu / soNu).toFixed(2));