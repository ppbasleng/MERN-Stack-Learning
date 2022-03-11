import httpClient from '../utils/http';


async function createStudent(data) {
    return await httpClient.post('/students/create', data).then(res => console.log(res.data)).catch(err => console.log(err));
}

async function deleteStudent(id) {
    return await httpClient.delete('/students/delete/' + id).then(res => console.log(res.data)).catch(err => console.log(err));
}

async function editStudent(id,data) {
    return await httpClient.put('/students/edit/' + id,data).then(res => res.data).catch(err => console.log(err));
}

async function showStudent() {
    return await httpClient.get('/students').then(res => res.data).catch(err => console.log(err));
}

const StudentAPI = { createStudent, deleteStudent, editStudent, showStudent };

export default StudentAPI;





