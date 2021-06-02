fetch('https://api.github.com/users/SergeyN83')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));



let img = document.createElement('img');
// document.write("https://kcfortuna.lenobl.muzkult.ru/media/2020/07/23/1257905151/IMG_7590_-_kopiya111.jpg");
img.src = "https://kcfortuna.lenobl.muzkult.ru/media/2020/07/23/1257905151/IMG_7590_-_kopiya111.jpg";

// function attachImageTo(element,src){
//     var img=document.createElement("img");
//     img.src="https://kcfortuna.lenobl.muzkult.ru/media/2020/07/23/1257905151/IMG_7590_-_kopiya111.jpg";
//     element.appendChild(img);
//     }

// document.getElementById('image').innerHTML = avatars.githubusercontent.com/u/58532624?v=4