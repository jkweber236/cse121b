const catElement = document.getElementById('fact');
let factHistory = [];

async function fetchAsync () {

    let response = await fetch('https://meowfacts.herokuapp.com/?count=100');

    let facts = await response.json();
  
    let temp = [];
    let index = Math.floor(Math.random() * 90);
    temp.push(facts["data"][index]);
    catList = temp[0];
    catElement.innerHTML = catList;
    
    factHistory.push(facts["data"][index])
}

function filterWords() {
    document.getElementById("listOfFacts").innerHTML = ""
    let word = prompt`Enter a word to search for in past cat facts for or type "all" to print all (case sensitive).`
    if (word == 'all') {
        factHistory.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerHTML = item;
        document.getElementById("listOfFacts").appendChild(listItem);
    })
}
    
    else {
        const result = factHistory.filter(fact => {
            return fact.includes(word);
        })
        if (word != null) {
            result.forEach(item => {
                let listItem = document.createElement("li");
                listItem.innerHTML = item;
                document.getElementById("listOfFacts").appendChild(listItem);
                })
            }
    }
}

function generateFact() {

    fetchAsync()
}