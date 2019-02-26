const API_URL = process.env.API_URL || "http://localhost:8080";

export default {

    put: (todo) => fetch(`${API_URL}/todo/${todo.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    }).then(response => response.json()),

    getAll: () => fetch(`${API_URL}/todo`)
        .then(response => response.json()),
        
    post: (todo) => fetch(`${API_URL}/todo`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    }).then(response => response.json())
}