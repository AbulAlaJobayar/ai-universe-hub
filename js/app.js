const sixCard=()=>{
    document.getElementById("spinner").classList.remove("d-none");
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
	.then(res => res.json())
	.then(data=>{
        document.getElementById("spinner").classList.add("d-none");
        uiSixCard(data.data.tools.slice(0 , 6))
    })
	.catch(err => console.error(err));
}
// first ui card
const uiSixCard = data=>{
    // console.log(data)
    const card = document.getElementById('card');
    card.innerHTML="";

    data.forEach(singleData => {
    // console.log(singleData)

      const {image, features,published_in,name,id}=singleData;
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
                <i onclick="details('${id}')" class="fa-solid fa-arrow-right text-danger"data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"></i>
                </div>

            </div>
    </div>        
      ` 
      card.appendChild(div)
      
    });
}
// show all option
const allCard=()=>{
    document.getElementById("spinner").classList.remove("d-none");
    document.getElementById("btn").classList.add("d-none");
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
	.then(res => res.json())
	.then(data => {
        document.getElementById("spinner").classList.add("d-none");
        uiSixCard(data.data.tools)})
	.catch(err => console.error(err));
}

const details =id=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>modalDetails(data.data))
    .catch(err=>console.error(err))
}
const modalDetails=(data)=>{
    console.log(data.image_link[0])
    const{description,tool_name,pricing,features,integrations,image_link
    }=data
const section=document.getElementById('modal-section');
section.innerHTML=`

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close outline-" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-between align-items-center">
                <div  class="border border-danger bg-warning-subtle  gap-2  p-4 rounded">
                    <h5>${description}</h5>
                    <div class="d-flex justify-content-between gap-3">
                        <p class=" fw-bold bg-white text-success p-2">${pricing[0].price + "/ "+ pricing[0].plan ?pricing[0].price + " /"+ pricing[0].plan  :'Free of Cost/Basic'}</p>
                        <p class="fw-bold bg-white p-2 text-warning">${pricing[1].price + " "+ pricing[1].plan ? pricing[1].price + " "+ pricing[1].plan:'Free Of Cost/Pro'}</p>
                        <p class="bg-white p-2 text-danger fw-bold">${pricing[2].price + " "+ pricing[2].plan ? pricing[2].price + " "+ pricing[2].plan :'Free of Cost /Enterprise'}</p>
                    </div>
                    <div class="d-flex justify-content-between gap-5">
                        <div >
                            <h5>featcher</h5>
                        </div>
                        <div>
                            <h5>introgation</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="${image_link[0]? image_link[0]: image_link[1]}" alt="">
                    <h5>iuhgsh</h5>
                    <p>lkfdnbln</p>
                </div>
            </div>
        </div>
    </div>
</div>


`

}

sixCard()