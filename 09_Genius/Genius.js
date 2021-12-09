class Genius{

    get baseId() {  return this._baseId;}
    set baseId(value) {  this._baseId = value;}

    constructor() {
        this.baseId = "app_";
        console.log(this.baseId + "Result");
    }

    doSearch(){
        console.log(this.baseId + "Result");
        document.getElementById(this.baseId + "Result").innerHTML = " Ready to Search";
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
