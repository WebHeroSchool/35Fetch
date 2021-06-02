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
        console.log(json);
        let avatar = json.avatar_url;
        let name = json.name;
        let bio = json.bio;
        let url = json.html_url;
        console.log(avatar);
        console.log(name);
        console.log(bio);
        console.log(url);

        if (avatar) {
            let modifyName = () => {
                let userUrl = document.createElement("a");
                let userName = document.createElement("h1");
                userName.innerText = name;
                userName.style.color = 'black';
                userUrl.href = url;
                // userUrl.style.text-decoration = none;
                document.body.append(userUrl);
                userUrl.appendChild(userName);
            };
        
            let modifyBio = () => {
                let userBio = document.createElement("p");
                userBio.innerHTML = bio;
                document.body.appendChild(userBio);
            };

            let modifyAvatar = () => {
                let userAvatar = document.createElement("img");
                userAvatar.src = avatar;
                userAvatar.alt = "Avatar";
                document.body.appendChild(userAvatar);
            };

            let modifyUrl = () => {
                let userUrl = document.createElement("a");
                let text = document.createTextNode('Ссылка на страницу GitHub');
                let newString = document.createElement('br');
                userUrl.href = url;
                userUrl.appendChild(text);
                document.body.appendChild(newString);
                document.body.appendChild(userUrl);
            };

            modifyName();
            modifyBio();
            modifyAvatar();
            modifyUrl();
            } else {
                alert('Информация о пользователе не доступна');
            }
    })
    .catch(err => alert('Информация о пользователе не доступна!'));