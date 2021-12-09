class GeniusVideo {
    constructor(el, songId) {
        this._divResult = el;
        this._songId = songId;

        this.render();
    }

    render(){
        this._divResult.innerHTML = " Тут будет видео песни " + this._songId ;
    }

}