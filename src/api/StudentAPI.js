import httpClient from '../utils/http';


async function createStudent(data) {
    return await httpClient.post('/students/create', data).then(res => console.log(res.data)).catch(err => console.log(err));
}

async function deleteStudent(data) {
    return await httpClient.post('/students/create', data).then(res => console.log(res.data)).catch(err => console.log(err));
}

const StudentAPI = {createStudent, deleteStudent};

export default StudentAPI;





