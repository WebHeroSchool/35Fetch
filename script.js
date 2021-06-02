let url = window.location.toString();

let getUserName = (url) => {
  let getName = url.split("=");
  let userName = getName[1];  
  if (userName == undefined){
    userName = "SergeyN83";
  } 
    return userName;
};

let userName = getUserName(url);
console.log(userName);


fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        let avatar = json.avatar_url;
        let name = json.name;
        let bio = json.bio;
        let url = json.url;
        console.log(avatar);
        console.log(name);
        console.log(bio);
        console.log(url);

        if (name) {
        let modifyName = () => {
            let userName = document.createElement("h1") ;
            userName.innerHTML = name;
            document.body.append(userName);
          }
      
          let modifyBio = () => {
            let userBio = document.createElement("p");
            userBio.innerHTML = bio;
            document.body.appendChild(userBio);
            
          }
          let modifyAvatar = () => {
            let userAvatar = document.createElement("img");
            userAvatar.src = avatar;
            userAvatar.alt = "Avatar";
            document.body.appendChild(userAvatar);
          }
          let modifyUrl = () => {
            let userUrl = document.createElement("a");
            let text = document.createTextNode('Ссылка на страницу GitHub');
            let newString = document.createElement('br');
            userUrl.href = `https://github.com/${userName}`;
            userUrl.appendChild(text);
            document.body.appendChild(newString);
            document.body.appendChild(userUrl);
          }
          modifyName();
          modifyBio();
          modifyAvatar();
          modifyUrl();
        } else {
            alert('Информация о пользователе не доступна');
        }
    })
    .catch(err => alert('Информация о пользователе не доступна'));