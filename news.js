//Michael Mcginnis
//This code shows that html can be generated from JSON. 
//I cannot make a request to the API without hosting a webserver so this is just proof of concept
//TODO:
/* 
Update variables in news_page.js
Fix generation bugs in the html
Auto update the html
Move this to a server and automate
*/

//Constants
const fs = require('fs').promises;
const categories = ["news", "nuclear", "political", "quantum"];
const json_txt_file = '/home/tina/Documents/Workspace/NuclearNewsSite/json_txt_files/';
const filtered_html_txt_file = '/home/tina/Documents/Workspace/NuclearNewsSite/filtered_html.txt';

//Appends html to a file
async function writeFilteredHtml(text_html, filepath) {
    try {
        //Think about changing this to making a write stream for scaling..
        /*
    var stream = fs.createWriteStream(filepath, {flags:'a'});
    stream.write(text_html);
    stream.end();*/
        await fs.appendFile(filepath, text_html)
    } catch (err) {
        console.log(err)
    }
}

//Removes uneeded files for replacement
async function removeFile(filepath) {
    try {
        await fs.unlink(filepath);
        console.log("Removed " + filepath);
    } catch (err) {
        console.log(err)
    }
}

//Generates html given a category. Uses the JSON txt files
async function generate_html(category, filepath) {
    try {
        //Reads files then parses JSON into string
        const inputD = await fs.readFile(filepath + category + '.txt');
        const json_obj = JSON.parse(inputD.toString());

        //Convert articles to html
        for (let i = 0; i < 20; i++) {
            //Removes MOST unneccessary parts of the string
            var formattedContent = JSON.stringify(json_obj.articles[i].content).replace(/ \[(.*?)\] */g, "");
            formattedContent = formattedContent.replace(/\\n/g, '');
            formattedContent = formattedContent.replace(/\\r/g, '');


            if (i < 3) {
                //First articles styling
                var first_article =
                    `
                <!--${category}-->
                <div class="${category}">
                <h1 class="news_header">${json_obj.articles[i].source.name}</h1>
                <img class="news_image" src="${json_obj.articles[i].urlToImage}">
                <br>
                <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
                <p class="news_p_first">${formattedContent}</p>
                </div>
                `
                await writeFilteredHtml(first_article, filtered_html_txt_file);
                //console.log(first_article);
            } else {
                //The rest of the articles styling
                var article =
                    `
                <div class="in ${category}">
                <h2>${json_obj.articles[i].source.name}</h2>
                <img class="news_image" src="${json_obj.articles[i].urlToImage}">
                <br>
                <a class="news_desc" href="${json_obj.articles[i].url}">${json_obj.articles[i].title}</a>
                <p>${formattedContent}</p>
                </div>
                `
                await writeFilteredHtml(article, filtered_html_txt_file);
                //console.log(article);
            }
        }
        console.log(category + " written successfully");
    } catch (err) {
        console.log(err);
    }
}



//Driver code
async function processCategories() {
    try {
        await removeFile(filtered_html_txt_file);

        console.log("Attempting write..");

        for (const category of categories) {
            await generate_html(category, json_txt_file);
        }
        //categories.forEach((category)=> generate_html(category, json_txt_file));
    } catch (err) {
        console.log(err);
    }
}

processCategories();