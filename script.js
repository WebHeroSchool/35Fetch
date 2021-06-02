let url = window.location.toString();

let getUserName = (url) => {
  let getName = url.split("=");
  let userName = getName[1];  
  if (userName == undefined){
    userName = "SergeyN83";
  }
    return userName;
}

let userName = getUserName(url);
console.log(userName);


fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        let avatar = json.avatar_url;
        let name = json.name;
        let bio = json.bio;
        let url = `https://github.com/${name}`;
        console.log(avatar);
        console.log(name);
        console.log(bio);
        console.log(url);
    })
    .catch(err => document.write("Информация о пользователе не доступна"));
