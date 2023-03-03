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
 
 const {description,pricing,features, integrations,image_link,input_output_examples} =data

 console.log(data)
const modalBody=document.getElementById("modeel-body");
modalBody.innerHTML="";
const div=document.createElement("div");
div.classList.add('d-flex', 'justify-content-between', 'gap-3',  'align-items-center')


div.innerHTML=`
<div class="border border-danger bg-warning-subtle gap-2 p-4 rounded">
<h5>${description}</h5>
<div id="${pricing}" class="d-flex justify-content-between gap-3">
</div>
<div class="d-flex justify-content-between gap-5">
    <div>
        <h5 class="fw-bold">Features</h5>


        <ul id="features"> skip featchers</ul>
    </div>

    <div>
        <h5>Integrations</h5>
        <ul id="${integrations}"> </ul>
    </div>
</div>
</div>

<div>
<img class="img-fluid mt-4 rounded" src="${image_link[0]? image_link[0]: image_link[1]}" alt="">
<h5id="${input_output_examples}"></h5>
<p>lkfdnbln</p>
</div>

`
modalBody.appendChild(div)

const orderList=document.getElementById(pricing);
    orderList.innerText="";
    pricing.forEach(Element => {
    // console.log(Element)
        const p =document.createElement('p')
        p.classList.add('fw-bold', 'bg-white','p-2')
        p.innerText= Element.price + Element.plan? Element.price + Element.plan :'Free of Cost';
        orderList.appendChild(p)
      });


// const fetcherList=document.getElementById("features"); 
//   console.log(features)
//   for (const fow in features ) {
//     console.log(fow.feature_name);
//   }

// integrations-ui
// console.log(integrations)
const integrationsList=document.getElementById(integrations);
integrationsList.innerText="";
integrations.forEach(Element => {
    console.log(Element)
        const li =document.createElement('li')
        li.innerText= Element? Element :'No data Found';
        integrationsList.appendChild(li)
      });



      
}


// modal


sixCard()