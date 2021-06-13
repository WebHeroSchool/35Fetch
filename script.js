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

let getNewDate = new Promise((resolve, reject) => {
	let newDate = new Date();
	setTimeout(() => newDate ? resolve(newDate) : reject('Ошибка в вычислении времени'), 3000);
});

let getUserData = fetch(`https://api.github.com/users/${userName}`);

Promise.all([getUserData, getNewDate])
    .then(([oneUserData, oneNewDate]) => {
    	userData = oneUserData;
    	todayDate = oneNewDate;
    })

    .then(res => userData.json())
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

        if (name) {
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

            let addDate = () => {
            	let newTodayDate = document.createElement('p');
            	newTodayDate.innerHTML = todayDate;
            	document.body.appendChild(newTodayDate);
            }

            let preloader = document.getElementById('preloader');
            preloader.classList.add('hidden');

            modifyName();
            modifyBio();
            modifyAvatar();
            modifyUrl();
            addDate();
            } else {
                alert('Информация о пользователе не доступна');
            }
    })
    .catch(err => alert('Информация о пользователе не доступна!'));