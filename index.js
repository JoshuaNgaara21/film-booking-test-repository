let listEl = document.querySelector('ul');
 let arr = [], data;
fetch('./FlatDango Db Data  (1).json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const films= data; // creating another data var to try iterate outside fetch
    document.querySelector('p').insertAdjacentElement = films.title;
    
    // for (const element of data) {
    // arr
        
    // }
    Object.keys(data).forEach(key => {
    const value = data[key];
    console.log(`${key}: ${value}`)
});
})