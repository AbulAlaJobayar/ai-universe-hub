const sixCard=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
	.then(res => res.json())
	.then(data => uiSixCard(data.data.tools.slice(0 , 6)))
	.catch(err => console.error(err));
}
// first ui card
const uiSixCard = data=>{
    console.log(data)
    const card = document.getElementById('card');
    data.forEach(singleData => {
      const {image} =singleData;
      const div = document.createElement('div');
      
      div.classList.add='col';
      div.innerHTML=`
    <div class="card">
        <img src="${image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features
            
            
            </h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
      ` 
      card.appendChild(div) 
    });
}
sixCard()