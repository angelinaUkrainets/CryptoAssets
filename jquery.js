function FillTable(json){
    let counter = 0;
    for(let i in json){
        let row = document.createElement("tr"); 
        let td1 = document.createElement("td");
        td1.innerHTML = counter++;
        let td2 = document.createElement("td");
        td2.innerHTML = i;
        let td3 = document.createElement("td");
        td3.innerHTML = json[i].name;
        let td4 = document.createElement("td");
        td4.innerHTML = json[i].humanType;
        let td5 = document.createElement("td");
        td5.innerHTML = json[i].currencyType;
        let td6 = document.createElement("td");
        td6.innerHTML = json[i].txFee;
        let td7 = document.createElement("td");
        td7.innerHTML = json[i].minConf;
        let td8 =document.createElement("button");
        td8.innerHTML = "Delete";
        td8.addEventListener("click", function(){
            DeleteClick(json[i].id);
        })

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    row.appendChild(td8);

    tblBody.appendChild(row);
        
    }
}

function DeleteClick(id){
    console.log(id);
}

async function GetApi(){
    let apiUrl = "https://poloniex.com/public?command=returnCurrencies";
    let response = await fetch(apiUrl);
    let result =await response.json();
    console.log(result);
    FillTable(result);
}


GetApi();