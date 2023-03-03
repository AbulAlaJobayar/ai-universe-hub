// firstSixCard
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
    // console.log(singleData.features)

      const {image, features,published_in,name,id}=singleData;
      const div = document.createElement('div');
     console.log(id)
      div.classList.add='col';
      div.innerHTML=`
    <div class="card">
        <img src="${image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body border-bottom">
            <div>
                <h4 class="card-title">Features</h4>
                <ol id="${singleData.id}"></ol>
             </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-3">${name}</h5>
                    <div class="d-flex flex-row                  align-items-center  gap-2">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p class="m-0">${published_in}</P>
                    </div>
                </div>
                
               <div class="model-Open-Section">
               <button onclick="modelDetails('${id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               <i class="fa-solid fa-arrow-right"></i>
             </button>
                
                </div>

            </div>
    </div>        
      ` 
      card.appendChild(div);
      const orderList=document.getElementById(singleData.id)
      features.forEach(Element => {
        const li=document.createElement('li')
        li.innerText=Element
        orderList.appendChild(li)
      }); 
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

// modal-Data
const modelDetails= id =>{
const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>modalDetails(data.data))
.catch(err=>console.error(err))
}

const modalDetails=(data)=>{
 console.log(data.pricing.id)
 const {description,pricing} =data


const modalBody=document.getElementById("modeel-body");
modalBody.innerHTML="";
const div=document.createElement("div");
div.classList.add('border', 'border-danger', 'bg-warning-subtle',  'gap-2',  'p-4', 'rounded')


div.innerHTML=`
<h5>${description}</h5>
<div id="${pricing}" class="d-flex justify-content-between gap-3">
     
</div>

`
modalBody.appendChild(div)

const orderList=document.getElementById(pricing);
    orderList.innerText="";
    pricing.forEach(Element => {
    console.log(Element)
        const p =document.createElement('p')
        p.classList.add('fw-bold', 'bg-white','p-2')
        p.innerText= Element.price + Element.plan? Element.price + Element.plan :'Free of Cost';
        orderList.appendChild(p)
      }); 


}


// modal


sixCard()