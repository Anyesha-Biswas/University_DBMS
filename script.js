const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');

let students = [];

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('roll_no').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const student = {
        name,
        rollNo,
        email,
        phone
    };

    students.push(student);

    displayStudents();
    resetForm();
});

function displayStudents() {
    const studentListHTML = students.map((student, index) => {
        return `
            <li>
                <span class="student-details">${student.name}</span>
                <span>${student.rollNo}</span>
                <span>${student.email}</span>
                <span>${student.phone}</span>
            </li>
        `;
    }).join('');

    studentList.innerHTML = studentListHTML;
}

function resetForm() {
    studentForm.reset();
}
