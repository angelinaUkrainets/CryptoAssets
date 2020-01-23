async function GetApi(){
    let url = "https://poloniex.com/public?command=returnCurrencies";
    let response = await fetch(url);
    let result =await response.json();
    console.log(result);
}