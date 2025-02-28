import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

//GET
export const getAllTasks = () => {
    //return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
    return tasksApi.get('/')
}

export const getTask = (id) => tasksApi.get(`/${id}/`);

//POST
export const createTask = (task) => {
    //return axios.post('http://localhost:8000/tasks/api/v1/tasks/')
    return tasksApi.post('/', task);
}

//DELETE
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);

//UPDATE
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);