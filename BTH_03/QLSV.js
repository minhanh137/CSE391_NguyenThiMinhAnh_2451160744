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

function resetForm(){
    document.getElementById("form-js").reset();
    document.querySelectorAll(".error")
    .forEach(error =>{
        error.textContent = "";
    });
    document.querySelectorAll("input,select")
    .forEach(input=>{
        input.classList.remove(
            "input-error"
        );
    });
}

var studentList = document.getElementById("studentList");

studentList.addEventListener("click",(e)=>{
    const index = e.target.dataset.index;
});

document.getElementById("btnAdd").addEventListener("click", openFormAdd);

function openFormAdd() {
    editIndex=-1;
    resetForm();
    document.getElementById("formTitle").innerText = "Thêm Sinh Viên";
    document.getElementById("modal").style.display = "flex";
}

function closeForm() {
    resetForm();
    document.getElementById("modal").style.display = "none";
}

function showMessage(text){
    document.getElementById("message").innerText = text;
    setTimeout(()=>{
        document.getElementById("message")
        .innerText = "";
    },3000);
}

document.getElementById('form-js').addEventListener('submit', function(event) {
    event.preventDefault();
    var msv = document.getElementById('msv2');
    var name = document.getElementById('name2');
    var dob = document.getElementById('dbt2');
    var dtb = document.getElementById('dtb2');
    var email = document.getElementById('email2');
    var password = document.getElementById('password2');
    var pw = document.getElementById('pw2');
    var cl = document.getElementById('cl2');

    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    const student = {
        msv: msv.value.trim(),
        name: name.value.trim(),
        dob: dob.value,
        cl: cl.value,
        dtb: dtb.value,
        email: email.value.trim(),
        password: password.value
    };
    if(editIndex === -1){
        students.push(student);
        showMessage("Thêm sinh viên thành công!");
    }else{
        students[editIndex] = student;
        showMessage("Cập nhật thành công!");
        editIndex = -1;
    }
    saveStudents();
    renderStudents();
    closeForm();
});

renderStudents();