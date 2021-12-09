class Genius{



    constructor() {
        this.baseId = "app_";
        this._items = [];
        this._isLoad = false;
        this._error = null;
        this.divResult = null;
    }

    get items() {  return this._items;}
    set items(value) {
        this._items = value;
        // console.log(this._items);
        if(this._items.length > 0){
            this.renderItems();
        } else {
            this.error = "No Result"
        }
    }

    // Генерация ответа
    renderItems(){
        let ul = document.createElement("ul");
        this._items.map( item => {
            let li = document.createElement("li");
            // Создание карточки поответу

            let title =document.createElement("h5");
            title.innerHTML = item.result.full_title;
            li.appendChild(title);

            let img =document.createElement("img");
            img.src = item.result.header_image_thumbnail_url;
            li.appendChild(img);

            ul.appendChild(li);
        });
        this.divResult.innerHTML = "";
        this.divResult.appendChild(ul);
    }




    getFromServer(){
        fetch("https://genius.p.rapidapi.com/search?q=" +
            encodeURI(document.getElementById(this.baseId + "txtSearch").value),
            {
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
                this.items = data.response.hits;
            })
            .catch(err => {
                console.error(err);
                this.error = err;
            });
    }

    doSearch(){
        this.isLoad = false;
        this.getFromServer();
    }

    render (homeElementId){
        this.baseId = "app" + "_";

        let txtSearch = document.createElement("input");
        txtSearch.id = this.baseId + "txtSearch";
        let btnSearch = document.createElement("button");
        btnSearch.onclick = this.doSearch.bind(this);
        btnSearch.type = "button";

        let divFormGroup = document.createElement("div");
        divFormGroup.className = "input-group";

        divFormGroup.appendChild(txtSearch);
        divFormGroup.appendChild(btnSearch);

        document.getElementById(homeElementId).appendChild(divFormGroup);

        this.divResult = document.createElement("div");
        this.divResult.id = this.baseId + "Result";

        document.getElementById(homeElementId).appendChild(this.divResult);
    }

    // Генерация сообщения об ошибке
    renderError(){
        this.divResult.innerHTML = "<h1>Error</h1>" + this._error;
    }

    // Генерация сообщения о загрузке
    renderLoading(){
        this.divResult.innerHTML = "Loading";
    }


    // Сеттеры и Геттеры с вызовами рендера
    get baseId() {  return this._baseId;}
    set baseId(value) {  this._baseId = value;}

    set error(value) {
        this._error = value;
        if(this._error !== null) {
            this.renderError();
        }
    }

    set isLoad(value) {
        this._isLoad = value;
        if(!this._isLoad) {
            this.renderLoading();
        }
    }
}
