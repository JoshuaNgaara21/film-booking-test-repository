let listEl = document.querySelector('ul');
 let arr = [], data;
 let form = document.forms[0];
 let filmsDropdown = form.movie;
 let jsonData;
 let secondaryArr= [];
 var filmsArr ;
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
    
    
    filmsArr=jsonData.films;
    console.log(filmsArr);
    
    filmsArr.forEach(film =>{
        console.log(film.title);
        out += `<option value= "${film.title}">${film.title} </option> `;

    })
    

    filmsDropdown.innerHTML=out;


}
