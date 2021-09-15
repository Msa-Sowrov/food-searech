const searchFiled = document.getElementById('search-filed');
const searchBtn = document.getElementById('search-btn');

searchFiled.addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    searchBtn.click()
  }
})

document.getElementById('search-btn').addEventListener('click', ()=>{
    const search = document.getElementById('search-filed').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=> res.json())
    .then(data => displayData(data.meals))
    const menyDiv = document.getElementById('menu');
    menyDiv.textContent="";
    
   const load= document.getElementById('load')
   load.innerHTML=`
          <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>`
        document.getElementById('search-filed').value="";
})
const displayData = data => {
    const menyDiv = document.getElementById('menu');
    menyDiv.textContent="";
    data.forEach(data => {
        const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card">
    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    `

    menyDiv.appendChild(div)
    const load= document.getElementById('load')
    load.textContent="";
 
    });
}