class Genius{

    get baseId() {  return this._baseId;}
    set baseId(value) {  this._baseId = value;}

    constructor() {
        this.baseId = "app_";
        this._items = [];
        this._isLoad = false;
        this._error = null;
    }

    get items() {  return this._items;}
    set items(value) {
        this._items = value;
    }


    renderError(){}
    renderItems(){}
    renderLoading(){}

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
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.items = data;
            })
            .catch(err => {
                console.error(err);
            });
    }

    doSearch(){
        this.getFromServer();
        //document.getElementById(this.baseId + "Result").innerHTML = " Ready to Search";
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

        let divResult = document.createElement("div");
        divResult.id = this.baseId + "Result";

        document.getElementById(homeElementId).appendChild(divResult);
    }
}
