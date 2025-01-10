let listEl = document.querySelector('ul');
 let arr = [], data;
 let form = document.forms[0];
 let filmsDropdown = form.movie;
 let jsonData;
 let secondaryArr= [];
 var filmsArr ;
var filmOption ;

fetch('./FlatDango Db Data  (1).json')
.then(response => response.json())
.then(data => {
    //console.log(data);
    const films= data; // creating another data var to try iterate outside fetch
    document.querySelector('p').insertAdjacentElement = films.title;
    jsonData = data;
    const array2D = Object.entries(jsonData).map(([key,value])=>{
        secondaryArr
        
        return {row: key, value}
    })
    getFilms(jsonData);

    Object.keys(data).forEach(key => {
    const value = data[key];
});
})

function getFilms(jsonData){
    let out = "";
    out += `<option value= "">Choose a film </option> `;
    // filling dropdwon with json films
    
    filmsArr=jsonData.films;
    console.log(filmsArr);
    
    filmsArr.forEach(film =>{
        const option  = document.createElement("option");
        option.id = film.id;
        option.title= film.title;
        option.runtime = film.runtime ;
        option.capacity= film.capacity;
        option.showtime= film.showtime;
        option.tickets_sold= film.tickets_sold;
        option.description= film.description;
        option.poster = film.poster;
        // attempt store each film array object in tmp variable 
        //option to add the option to the dropdown list.

        console.log(option.description);
        console.log(film.title);
        out += `<option value= "${option.title}">${option.title} </option> `;

    })
    filmsDropdown.innerHTML=out;
}

// document.addEventListener("change", )
const dropChoice = document.getElementById("movie");

const selectedValue = dropChoice.value;
// const selectedText = dropChoice.options[dropChoice.selectedIndex].text;
// console.log(`Selected Value: ${selectedValue}`);
// console.log(`Selected Text: ${selectedText}`)
var chosenFilm = filmsDropdown.value;

function getSelectedOption() {
    // Get the dropdown element
    const dropdown = document.getElementById("movie");
    
    // Get the value of the selected option
    const selectedValue = dropdown.value;
    
    // Get the text of the selected option
    const selectedText = dropdown.options[dropdown.selectedIndex].text;
    
    // Log the result
    console.log(`Selected Value: ${selectedValue}`);
    console.log(`Selected Text: ${selectedText}`);
  }
  
  getSelectedOption();