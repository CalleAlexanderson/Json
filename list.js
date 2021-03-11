"using stricts";

fetch("./songs.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) =>{
        data.forEach(song => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("song")
            let songTitle = document.createElement("h3");
            songTitle.innerHTML = song.title;
            newDiv.append(songTitle);
            
            document.querySelector(".list").append(newDiv);
        });
    })