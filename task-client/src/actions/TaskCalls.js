import axios from "axios";

export const createTask = (data, setUpdates) => {
    axios
        .post("http://localhost:5000/api/v1/tasks", data)
        .then(function (response) {
            console.log("Task successfully written", response);
            setUpdates(response.data.task._id + "C");
        })
        .catch(function (error) {
            console.log("Error during create task", error);
        });
};

export const getAllTasks = (setData) => {
    axios
        .get("http://localhost:5000/api/v1/tasks")
        .then(function (response) {
            console.log("Tasks successfully retrieved", response);
            return setData(response.data.tasks.reverse());
        })
        .catch(function (error) {
            return error;
        });
};

export const deleteTask = async (id, setUpdates) => {
    axios
        .delete("http://localhost:5000/api/v1/tasks/" + id)
        .then(function (response) {
            console.log(`Task ${id} successfully deleted `, response);
            setUpdates(response.data.task._id + "D");
        })
        .catch(function (error) {
            console.log("Error occured while deleting a task : ", error);
            return error;
        });
};
