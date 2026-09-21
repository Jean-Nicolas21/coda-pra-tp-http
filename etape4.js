export const etape4 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'etape4',
            body: 'antitest',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}