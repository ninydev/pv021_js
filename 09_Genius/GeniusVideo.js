class GeniusVideo {
    constructor(el, songId) {
        this._divResult = el;
        this._songId = songId;
        this.isLoad = false;
        this.item = null;
        this.getFromServer();
        this.render();
    }

    getFromServer(){

        fetch("https://genius.p.rapidapi.com/songs/" + this._songId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "genius.p.rapidapi.com",
                "x-rapidapi-key": "7e2afce0b1msh7f5c23d92a82e63p15d2e7jsn1fb4d1a13ff8"
            }
        })
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data);
                this.isLoad = true;
                this.item = data.response;
                console.log(this.item);
                this._divResult.innerHTML = this.item.song.embed_content;
            })
            .catch(err => {
                console.error(err);
                this.error = err;
            });
    }

    render(){
        this._divResult.innerHTML = " Тут будет видео песни " + this._songId;
    }

}
