let listContainer = document.querySelector('.list-container')
let input = document.querySelector('input')
let addBtn = document.querySelector('.add-btn')

function addTask() {
    if (input.value!=="") {
        
        listContainer.innerHTML+=`
         <li>
          <label for="chx-${new Date().getTime()}" onclick="addChecked(this)">
            <input type="checkbox" id="chx-${new Date().getTime()}" />
            ${input.value}
          </label>

          <button class="delete-btn" onclick="deleteTask(this)">
            <i class="bx bxs-trash-alt"></i>
          </button>
        </li>
        ` 
    }
    input.value=""
    saveData()
}

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML=localStorage.getItem('data')
}

showTask()

addBtn.addEventListener('click',addTask)

function deleteTask(element) {
    element.parentElement.remove()
    saveData()
}

function addChecked(element) {
 element.classList.toggle('checked')
  saveData()
}