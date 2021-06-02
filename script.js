fetch('https://api.github.com/users/SergeyN83')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
