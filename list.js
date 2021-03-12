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
            let albumCover = document.createElement("img");
            albumCover.setAttribute("src", "./images/" + song.img);
            newDiv.append(albumCover);
            let songTitle = document.createElement("h3");
            songTitle.innerHTML = song.title;
            songTitle.classList.add("text")
            newDiv.append(songTitle);
            let songArtist = document.createElement("p")
            songArtist.innerHTML = song.artist;
            songArtist.classList.add("text")
            newDiv.append(songArtist);
            let songAlbum = document.createElement("p")
            songAlbum.innerHTML = song.album;
            songAlbum.classList.add("text")
            newDiv.append(songAlbum);
            let songDate = document.createElement("p")
            songDate.innerHTML = song.date;
            songDate.classList.add("text")
            newDiv.append(songDate);
            document.querySelector(".list").append(newDiv);
        });
    })