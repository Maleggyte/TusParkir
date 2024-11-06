function addData() {
    const nip = document.getElementById("nip").value;
    const nama = document.getElementById("nama").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;

    if (nip && nama && jenisKelamin) {
        const table = document.getElementById("dataTable");

        const row = table.insertRow();
        row.insertCell(0).textContent = nip;
        row.insertCell(1).textContent = nama;
        row.insertCell(2).textContent = jenisKelamin;

        const deleteCell = row.insertCell(3);
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => row.remove();
        deleteCell.appendChild(deleteBtn);

        document.getElementById("satpamForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
}
