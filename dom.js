let tasks = [
  {
    id: 1,
    entitled: 'Hello world',
    completed: false
  },
  {
    id: 2,
    entitled: 'Seconde tache',
    completed: false
  },
  {
    id: 3,
    entitled: 'Faire du fufu',
    completed: false
  }
]

const listTbody = document.getElementsByTagName('tbody')
const tbodyInprogress = document.getElementById('tbody-tasks-inprogress')
const inputTask = document.getElementById('task')
const form = document.querySelector('#form')

for (const task of tasks) {
  const trTemplate = `<tr>
    <td>${task.entitled}</td>
    <td>
      <button onclick="editTask(event, ${task.id})">Modifier</button>
    </td>
  </tr>
  `
  tbodyInprogress.innerHTML += trTemplate
}

function editTask(event, id) {
  const task = tasks.find(t => t.id == id)

  inputTask.value = task.entitled
  inputTask.setAttribute('data-id', id)
  form.setAttribute('data-action', 'update')
  inputTask.focus()
}

const myFunction = function () {
 console.log();
}



form.addEventListener('submit', function (event) {
  event.preventDefault()
  
  const trEl = document.createElement('tr')
  const action = form.getAttribute('data-action')

  if (action === 'create') {
    const trTemplate = `
      <td>${inputTask.value}</td>
      <td>
        <button>Modifier</button>
      </td>
    `

    trEl.innerHTML = trTemplate

    tbodyInprogress.prepend(trEl)
  } else {
    const idTask = inputTask.getAttribute('data-id')

    tasks = tasks.map((task) => {
      if (task.id == idTask) {
        
      }
    })

    console.log(idTask);
  }
})