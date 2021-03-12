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
            albumCover.setAttribute("src", "./img/" + song.img);
            newDiv.append(albumCover);
            let songTitle = document.createElement("h2");
            songTitle.innerHTML = song.title;
            newDiv.append(songTitle);
            let songArtist = document.createElement("h3")
            songArtist.innerHTML = song.artist;
            newDiv.append(songArtist);
            let songAlbum = document.createElement("p")
            songAlbum.innerHTML = song.album;
            newDiv.append(songAlbum);
            let songDate = document.createElement("p")
            songDate.innerHTML = song.date;
            newDiv.append(songDate);
            document.querySelector(".list").append(newDiv);
        });
    })