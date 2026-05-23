let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

function saveStudents() { 
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(){
    studentList.innerHTML = "";
    if(students.length == 0){
        studentList.innerHTML = `
        <tr>
            <td colspan="7">Chưa có sinh viên nào</td>
        </tr>
        `;
        updateSummary();
        return;
    }
    students.forEach((student,index)=>{
        const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${student.msv}</td>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.cl}</td>
            <td>${student.dtb}</td>
            <td>
                <button class="btn-edit" data-index="${index}">Sửa</button>
                <button class="btn-delete" data-index="${index}">Xóa</button>
            </td>
        </tr>
        `;
        studentList.innerHTML += row;
    });
    updateSummary();
}

function updateSummary(){
    document.getElementById("totalStudent").innerText = students.length;
    if(students.length == 0){
        document.getElementById("avgGPA")
        .innerText = 0;
        return;
    }
    const total = students.reduce((sum,student)=>{
        return sum + Number(student.dtb);
    },0);
    const avg = total / students.length;
    document.getElementById("avgGPA")
    .innerText = avg.toFixed(2);
}