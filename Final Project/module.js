//import {factHistory} from './final-project'

export function filterWords() {
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

//export {filterWords};