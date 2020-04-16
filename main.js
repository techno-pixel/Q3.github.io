let button = document.querySelector("button");

button.addEventListener("click", cats);

function cats(json) {
    let cats = json.cats;
    let section = document.querySelector('section');
    for(let i = 0; i < cats.length; i++)
    {
        // build HTML elements dynamically
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        // set the image to the source
        img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets/' + cats[i].photo);
        img.setAttribute('alt', cats[i].name);

        // create the product information details
        h2.textContent = cats[i].name;
        p1.textContent = 'Species: ' + cats[i].species;
        p2.textContent = 'Age: ' + cats[i].age;

        let favFoods = cats[i].favFoods;
        for(let j = 0; j< cats.length; j++)
        {
            let listItem = document.createElement('li');
            listItem.textContent = favFoods[j];
            ul.appendChild(listItem);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);
    }
};

fetch('https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json')
.then((response) => {
    return response.json();
})
.then((json) => {
    cats(json);
})