window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');
    fetch('https://api.topmediagroups.com/api/v1/tasks', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem('jwt')
        },

        body: JSON.stringify({
            "name": localStorage.getItem('name'),
            "description": "я успешно прошел тестовое задание"
        })

    })
        .then(res => res.json())
        .then(data => console.log(data))

    document.getElementById('user_name').innerText = localStorage.getItem("name")

});