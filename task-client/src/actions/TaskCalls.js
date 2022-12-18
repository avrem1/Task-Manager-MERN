import axios from "axios";

export const createTask = (data, setUpdates) => {
    axios
        .post("http://ec2-65-0-93-210.ap-south-1.compute.amazonaws.com:5000/v1/tasks", data)
        .then(function (response) {
            if (response.status === 201) {
                setUpdates(response.data.task._id + "C");
            } else {
                return Error("Unable to create a new task, please try later.");
            }
        })
        .catch(function (error) {
            return error;
        });
};

export const getAllTasks = (setData) => {
    axios
        .get("http://ec2-65-0-93-210.ap-south-1.compute.amazonaws.com:5000/api/v1/tasks")
        .then(function (response) {
            if (response.status === 200) {
                return setData(response.data.tasks.reverse());
            } else {
                return Error("Unable to retrieve tasks, please try later.");
            }
        })
        .catch(function (error) {
            return error;
        });
};

export const deleteTask = async (id, setUpdates) => {
    axios
        .delete("http://ec2-65-0-93-210.ap-south-1.compute.amazonaws.com:5000/api/v1/tasks/" + id)
        .then(function (response) {
            if (response.status === 200) {
                setUpdates(response.data.task._id + "D");
            } else {
                return Error("Unable to delete task, please try later.");
            }
        })
        .catch(function (error) {
            return error;
        });
};

export const getTask = async (id, setUpdates) => {
    axios
        .get("http://ec2-65-0-93-210.ap-south-1.compute.amazonaws.com:5000/api/v1/tasks/" + id)
        .then(function (response) {
            console.log(`Task ${id} successfully retrieved `, response);
            if (response.status === 200) {
                setUpdates(response.data.task);
            } else {
                return Error("Unable to retrieve the task, please try later.");
            }
        })
        .catch(function (error) {
            return error;
        });
};

export const updateTask = (id, data) => {
    axios
        .patch(
            "http://ec2-65-0-93-210.ap-south-1.compute.amazonaws.com:5000/api/v1/tasks/" + id,
            data
        )
        .then(function (response) {
            if (response.status === 200) {
                console.log(`Task ${id} successfully updates`);
            } else {
                return Error("Unable to update task, please try later.");
            }
        })
        .catch(function (error) {
            return error;
        });
};
