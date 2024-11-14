const url = "https://api.pexels.com/v1/search? query=natura&per_pagina=1";
const apiKay = "FQguFphz3vqw1essZoArCu1L5mJoC7Hcnm1XeuKtcoF0rTVI88E8RrBi";

fetch(url,{
    method: "GET",
    headers:{Authorization: apiKay}
})
then((response) => {
    console.log(response);
    if (response.ok) {
        // restituiamo il dato convertito in array da JSON
        return response.json();}


})