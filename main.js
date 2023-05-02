
function openModal() {
        const modal = document.querySelector(".window");
        modal.classList.remove("d-none")
    }
    function closeModal(){
        const modal = document.querySelector(".window");
        modal.classList.add("d-none");
    }
    function createStudent(){
        let nameInp = document.querySelector("input[name='ad']");
        let surnameInp = document.querySelector("input[name='soyad']");
        const tbody = document.querySelector("tbody");
        tbody.innerHTML += `<tr><td>1</td><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><p class="m-0" ind="">x</p></td></tr>`;
        nameInp.value = '';
        surnameInp.value = '';
        closeModal();
    }
    const inp= document.querySelector("input");
    let students = [];
    function clckBtn() {
        students.push(inp.value);
        console.log(students);
        
    }