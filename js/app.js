const sixCard=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
	.then(res => res.json())
	.then(data => uiSixCard(data.data.tools.slice(0 , 6)))
	.catch(err => console.error(err));
}
// first ui card
const uiSixCard = data=>{
    // console.log(data)
    const card = document.getElementById('card');
    data.forEach(singleData => {
    console.log(singleData)

      const {image, features,published_in,name}=singleData;

      const div = document.createElement('div');
      
      div.classList.add='col';
      div.innerHTML=`
    <div class="card">
        <img src="${image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body border-bottom">
            <div>
                <h4 class="card-title">Features</h4>
                <ol type="number">
                  <li>${features[0]? features[0]:'No Feather'}</li>
                  <li>${features[1]? features[1]:'No Feather'}</li>
                  <li>${features[2]? features[2]:'Text generation'}</li>
                </ol>
             </div>
             <div class="card-footer d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-3">${name}</h5>
                    <div class="d-flex flex-row                  align-items-center  gap-2">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p class="m-0">${published_in}</P>
                    </div>
                </div>
                <div>
                <i class="fa-solid fa-arrow-right text-danger"></i>
                </div>

            </div>
    </div>        
      ` 
      card.appendChild(div)
      
    });
}
sixCard()