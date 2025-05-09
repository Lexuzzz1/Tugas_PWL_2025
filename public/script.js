async function fetchStudents() {
    const res = await fetch('/students');
    const data = await res.json();

    const listDiv = document.getElementById('student-list');
    listDiv.innerHTML = '';

    data.students.forEach(student => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.textContent = `${student.name} (Dosen Wali: ${student.advisor})`;
        listDiv.appendChild(div);
    });

    const select = document.getElementById('advisor-select');
    select.innerHTML = '';
    data.advisors.forEach(advisor => {
        const option = document.createElement('option');
        option.value = advisor;
        option.textContent = advisor;
        select.appendChild(option);
    });
}

document.getElementById('add-btn').addEventListener('click', async () => {
    const name = document.getElementById('student-name').value;
    const advisor = document.getElementById('advisor-select').value;

    if (name) {
        alert(`Mahasiswa ${name} dengan dosen wali ${advisor} ditambahkan (simulasi, refresh halaman manual)!`);
    }
});

fetchStudents();
