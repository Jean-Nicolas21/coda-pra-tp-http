export const etapebonus = () => {
    fetch('https://jsonplaceholder.typicode.com/photos/418', {
        method: 'PUT',
        body: JSON.stringify({
            albumId: 9,
            id: 418,
            title: "ut assumenda facilis corrupti repudiandae suscipit rerum qui",
            url: 'https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg',
            thumbnailUrl: "https://via.placeholder.com/150/52961a"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    fetch('https://jsonplaceholder.typicode.com/photos/418', {
        method: 'PATCH',
        body: JSON.stringify({
            albumId: 42,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}