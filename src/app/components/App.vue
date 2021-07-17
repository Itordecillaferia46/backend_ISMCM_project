<template>
  <div>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white" href="/">Ingreso de datos</h4>
          <span class="text-muted">Esta sección es para la alimentación de la base de datos que 
          almacenará toda el conjunto  de palabras y expresiones que caracterizan el léxico de 
          los grupos socioculturales de Montería.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <router-link :to="{ name: 'inicio' }"><button
                    
                    class="btn btn-primary btn-block"
                  >
                    home
                  </button></router-link>
    </div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendTask">
                <br />
                <div>
                  <select
                    class="form-select form"
                    v-model="task.communen"
                    placeholder="Inserte la comuna"
                  >
                    <option disabled value="">Seleccione la comuna</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    v-model="task.title"
                    placeholder="Inserte la jerga"
                    class="form-control"
                  />
                </div>
                <br />
                <div class="form-group">
                  <textarea
                    v-model="task.description"
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Inserte el significado o la descripción"
                  ></textarea>
                </div>
                <br />
                <template v-if="edit === false">
                  <button
                    data-toggle="modal"
                    data-target="#myModal"
                    class="btn btn-primary btn-block"
                  >
                    Guardar
                  </button>
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="alert alert-success alert-dismissible">
                        <a
                          class="close"
                          data-dismiss="modal"
                          aria-label="close"
                        ></a>
                        Guardado
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <button
                    data-toggle="modal"
                    data-target="#myModal"
                    class="btn btn-primary btn-block"
                  >
                    Actualizar
                  </button>
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="alert alert-primary alert-dismissible">
                        <a
                          class="close"
                          data-dismiss="modal"
                          aria-label="close"
                        ></a>
                        Actualizado
                      </div>
                    </div>
                  </div>
                </template>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="bg-primary">Comuna</th>
                <th class="bg-primary">Jerga</th>
                <th class="bg-primary">Significado o descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks">
                <td>{{ task.communen }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>
                  <button
                    @click="editTask(task._id)"
                    class="btn btn-outline-success"
                  >
                    Editar
                  </button>

                  <button
                    @click="deleteTask(task._id)"
                    class="btn btn-outline-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
class Task {
  constructor(communen, title, description) {
    this.communen = communen;
    this.title = title;
    this.description = description;
  }
}
export default {
  name: "App",
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
      taskToEdit: "",
      
  
  
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    sendTask() {
      if (this.edit === false) {
        fetch("/tasks", {
          method: "POST",
          body: JSON.stringify(this.task),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.getTasks();
          });
      } else {
        fetch("/tasks/" + this.taskToEdit, {
          method: "PUT",
          body: JSON.stringify(this.task),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.getTasks();
            this.edit = false;
          });
      }

      this.task = new Task();
    },
    getTasks() {
      fetch("/tasks")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id) {
      console.log(id);
      fetch("/tasks/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.getTasks();
        });
    },
    editTask(id) {
      fetch("/tasks/" + id)
        .then((res) => res.json())
        .then((data) => {
          this.task = new Task(data.communen, data.title, data.description);
          this.taskToEdit = data._id;
          this.edit = true;
        });
    },
  },
};



</script>
