//Michael Mcginnis
//This code shows that html can be generated from JSON. 
//I cannot make a request to the API without hosting a webserver so this is just proof of concept

const fs = require('fs')
fs.readFile('political.txt', (err, inputD) => {
   if (err) throw err;
    //This parses JSON in the text file and outputs into formatted html

      const json_obj = JSON.parse(inputD.toString());
      /* For Testing */
      //console.log(json_obj.articles[0].source.name);
      //console.log(json_obj.articles[0].title)
      //console.log(json_obj.articles[0].url)
      //console.log(json_obj.articles[0].urlToImage)
      //console.log((json_obj.articles[0].content).substring(0,250))
      //var formattedContent = JSON.stringify(json_obj.articles[0].content).replace(/ \[(.*?)\] */g, "");
      //formattedContent = formattedContent.replace(/\\n/g, '');
      //formattedContent = formattedContent.replace(/\\r/g, '');
      //console.log(formattedContent);

      //Articles to html
      for(let i = 0; i < 20; i++){
        //Removes MOST unneccessary parts of the string
        var formattedContent = JSON.stringify(json_obj.articles[i].content).replace(/ \[(.*?)\] */g, "");
        formattedContent = formattedContent.replace(/\\n/g, '');
        formattedContent = formattedContent.replace(/\\r/g, '');

        //First article
        if(i == 0 || i == 1 || i == 2){
            var first_article = 
            `
            <div>
            <h1 class="news_header">${json_obj.articles[i].source.name}</h1>
            <img class="news_image" src="${json_obj.articles[i].urlToImage}">
            <br>
            <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
            <p class="news_p_first">${formattedContent}</p>
            </div>
            `
            console.log(first_article);
        } else{
            //The rest of the articles
            var article =
            `
            <div class="in">
            <h2>${json_obj.articles[i].source.name}</h2>
            <img class="news_image" src="${json_obj.articles[i].urlToImage}">
            <br>
            <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
            <p>${formattedContent}</p>
            </div>
            `
            console.log(article);
        }
    }


})


function fillArticles(){
    for(let i = 0; i < 20; i++){
        //Removes MOST unneccessary parts of the string
        var formattedContent = JSON.stringify(json_obj.articles[i].content).replace(/ \[(.*?)\] */g, "");
        formattedContent = formattedContent.replace(/\\n/g, '');
        formattedContent = formattedContent.replace(/\\r/g, '');

        //First articles for display in carousel
        if(i == 0 || i == 1 || i == 2){
            var first_article = 
            `
            <div>
            <h1>${json_obj.articles[i].source.name}</h1>
            <img class="news_image" src="${json_obj.articles[i].urlToImage}">
            <br>
            <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
            <p>${formattedContent}</p>
            </div>
            `
            console.log(first_article);
        } else{
            //The rest of the articles
            var article =
            `
            <div>
            <h2>${json_obj.articles[i].source.name}</h2>
            <img class="news_image" src="${json_obj.articles[i].urlToImage}">
            <br>
            <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
            <p>${formattedContent}</p>
            </div>
            `
            console.log(article);
        }
    }
}

/*Here is html examples for filling in ... subject to change
<div>
    <h1 class="news_header_first">Mirror Online</h1>
    <img class="news_image_first" width="500px" height="auto" src="https://i2-prod.mirror.co.uk/incoming/article29741979.ece/ALTERNATES/s1200/0_Tu95-5_east2west-news.jpg">
    <br>
    <a class="news_desc_first" href="https://www.mirror.co.uk/news/world-news/vladimir-putin-orders-two-bear-29741435">Vladimir Putin orders two 'Bear' nuclear bomber jets to border in chilling threat</a>
    <p class="news_p_first">"Vladimir Putin has ordered two Tu-95MS nuclear bombers to the border as part of surprise drills believed to be a new show of strength to the West. Footage shows the noisy \"Bears\" flying over Russia…"</p>
</div>

<div>
    <h1 class="news_header_first">Mirror Online</h1>
    <a class="news_desc_first" href="https://www.mirror.co.uk/news/world-news/vladimir-putin-orders-two-bear-29741435">Vladimir Putin orders two 'Bear' nuclear bomber jets to border in chilling threat</a>
    <p class="news_p_first">"Vladimir Putin has ordered two Tu-95MS nuclear bombers to the border as part of surprise drills believed to be a new show of strength to the West. Footage shows the noisy \"Bears\" flying over Russia…"</p>
</div>

<div>
    <h2>Mirror Online</h2>
    <img class="news_image" src="https://i2-prod.mirror.co.uk/incoming/article29741979.ece/ALTERNATES/s1200/0_Tu95-5_east2west-news.jpg">
    <br>
    <a class="news_desc" href="https://www.mirror.co.uk/news/world-news/vladimir-putin-orders-two-bear-29741435">Vladimir Putin orders two 'Bear' nuclear bomber jets to border in chilling threat</a>
    <p>"Vladimir Putin has ordered two Tu-95MS nuclear bombers to the border as part of surprise drills believed to be a new show of strength to the West. Footage shows the noisy \"Bears\" flying over Russia…"</p>
</div>

<div class="news">
    <h2>Mirror Online</h2>
    <a class="news_desc" href="https://www.mirror.co.uk/news/world-news/vladimir-putin-orders-two-bear-29741435">Vladimir Putin orders two 'Bear' nuclear bomber jets to border in chilling threat</a>
    <p>"Vladimir Putin has ordered two Tu-95MS nuclear bombers to the border as part of surprise drills believed to be a new show of strength to the West. Footage shows the noisy \"Bears\" flying over Russia…"</p>
</div>
*/