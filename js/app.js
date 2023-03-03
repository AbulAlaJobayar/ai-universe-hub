
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
    console.log(data)
    const card = document.getElementById('card');
    card.innerHTML="";

    data.forEach(singleData => {
      const {image, features,published_in,name,id}=singleData;
      const div = document.createElement('div');
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
 
 const {description,pricing,features, integrations,image_link,input_output_examples} =data;

const modalBody=document.getElementById("modeel-body");
modalBody.innerHTML="";
const div=document.createElement("div");
div.classList.add('d-md-flex', 'justify-content-between', 'flex-sm-column','flex-md-row', 'gap-3',  'align-items-center')


div.innerHTML=`
<div class="border border-danger bg-warning-subtle gap-2 p-4 rounded">
<h5 id="descript">${description}</h5>
<div id="${pricing}" class=" prric d-flex flex-sm-row justify-content-between gap-3">
</div>
<div class="d-flex flex-sm-row justify-content-between gap-5">
    <div>
        <h5 class="fw-bold">Features</h5>


        <ul id="features"> 
        <li>${features[1].feature_name}</li>
        <li>${features[2].feature_name}</li>
        <li>${features[3].feature_name}</li>
        </ul>
    </div>

    <div>
        <h5>Integrations</h5>
        <ul id="${integrations}"> </ul>
    </div>
</div>
</div>

<div class="position-relative">

<img class="img-fluid mt-4 rounded" src="${image_link[0]}" alt="">
<div id="curency">

<span class="badge text-bg-danger p-2 fw-bold  position-absolute top-0 end-0" style="margin-top: 2rem; margin-right:1rem">${data.accuracy.score?data.accuracy.score*100:""} % accuracy</span>
</div>

<div id="${input_output_examples}">
</div>
</div>

`
modalBody.appendChild(div)

const orderList=document.getElementById(pricing);
    orderList.innerText= "";
    pricing.forEach(Element => {
        const p =document.createElement('p')
        p.classList.add('fw-bold', 'bg-white','p-2')
        p.innerText= Element.price? Element.price:"free of cost" ;
        orderList.appendChild(p)
      });


// integrations-ui
const integrationsList=document.getElementById(integrations);
integrationsList.innerText="";
integrations.forEach(Element => {

        const li =document.createElement('li')
        li.innerText= integrations ? Element : "No data found";
        integrationsList.appendChild(li)
      });

// input_output_examples-ui
const welcome=document.getElementById(input_output_examples);
welcome.innerHTML="";
input_output_examples.forEach(element => {

    welcome.innerHTML=`
    <h3 class="mt-4 text-center">${input_output_examples ? element.input : "Can you give any example?"}</h3>
    <p class="mt-4 text-center">${element.output ? element.output :"free of cost" }</p>
    `
});


if(description===null){
    document.getElementById('descript').innerText="Facebook Ai is a collection of tools and technologies developed by Facebook to advance the field of artificial intelligence."
    return;
}


}

// modal
sixCard()
