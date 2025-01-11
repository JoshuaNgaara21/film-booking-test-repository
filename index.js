let listEl = document.querySelector('ul');
 let arr = [], data;
 let form = document.forms[0];
 let filmsDropdown = form.movie;
 let jsonData;
 let secondaryArr= [];
 var filmsArr ;
var thirdArray ;
var userChosenMovie;
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
    
    //calling get films
    getFilms(jsonData);

    

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

        // console.log(option.description);
        // console.log(film.title);
        out += `<option id = "${option.id}" title= "${option.title}">${option.title} </option> `;
        // OUT WAS ONE ARRAY OF ALL THE FILMS STORED AS ONE ARAY ELEMENT
        
        secondaryArr.push(`<option id = "${option.id}" > ${option.title} 
            runtime = ${option.runtime} capacity = ${option.capacity} showtime = ${option.showtime} tickects_sold = ${option.tickets_sold}
            description = ${option.description} poster = ${option.poster}
            </option> `);
        //SECONDARY ARR HAS ALL THE FILMS STORED INDIVIDUALLY with each film property as its owwn data type elements
        
    })
    filmsDropdown.innerHTML=out;
}
outputChoice = document.getElementById("outputmovie");

function displayMovieChosen(){
    filmsDropdown.addEventListener("change", function(){
    const selectedFilmName = filmsDropdown.value;
    console.log(selectedFilmName);
    for(item in filmsArr){
        console.log(item)
    }
     
})
}
displayMovieChosen();



// document.addEventListener("change", )
const dropChoice = document.getElementById("movie");

const selectedValue = dropChoice.value;

var chosenFilm = filmsDropdown.value;

function getSelectedOption() {
    // Get the dropdown element
    const dropdown = document.getElementById("movie");
    
    // Get the value of the selected option
    const selectedValue = dropdown.value;
    
    
    
    // Log the result
  }
  
  getSelectedOption();