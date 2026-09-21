export const etape5 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({
            completed: true,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}