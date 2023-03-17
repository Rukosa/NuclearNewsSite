/* Michael Mcginnis/Rukosa 03/9/2023 */
/* This makes requests using NewsAPI to recieve articles in JSON 
Example Request
var url = 'https://newsapi.org/v2/everything?' + --newsapi url--
          'q=Apple&' + --The query--
          'from=2023-03-10&' + --dates of relevance--
          'sortBy=popularity&' + --sorting--
          'apiKey=d875e80c9a86487994b3289c87de3efe'; --my api key--
          https://newsapi.org/docs/endpoints/everything
*/
//TODO
//Nuclear news search
//Quantum news search
//Pass the json to a json decoder
//Maybe add categories the user can choose to see news they want to see?

//Gets current date and formats into ISO 8601 yyyy-mm-dd
function getDate(dateSet){ //dateSet ex: "December 19, 2015"
    var date = "";
    if(dateSet == ""){
        date = new Date();
    } else {
        date = new Date(dateSet);
    }

    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    if(month.length == 1){
        month = "0" + month;
    }
    if(day.length == 1){
        day = "0" + day;
    }

    let date_str = `from=${date.getFullYear()}-${month}-${day}&`;
    //console.log(date_str);
    return date_str;
}

//Formats search into url string format
function formatSearch(searchSet){
    return `q=${searchSet}&`
}

let newsapi_url = 'https://newsapi.org/v2/everything?';
let popular_sorting_key = 'sortBy=popularity&';
let api_key = 'apiKey=d875e80c9a86487994b3289c87de3efe';
var date_key = getDate("");
var search_key = formatSearch("Nuclear");

var nuclear_url = newsapi_url + search_key + date_key + popular_sorting_key + api_key;
nuclear_url = "https://newsapi.org/v2/everything?q=Nuclear&from=2023-02-16&sortBy=publishedAt&apiKey=d875e80c9a86487994b3289c87de3efe";

var req = new Request(nuclear_url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })