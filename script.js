const allTrees=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
.then((res)=>res.json())
.then((json)=> displayDatas(json.plants))}

const displayDatas=(trees)=>{

const getContainer=document.getElementById("card-div")
getContainer.innerHTML="";

for(tree of trees){

const divForCard=document.createElement("div")
divForCard.innerHTML=`<div class="w-[230px] h-[330px] bg-white flex flex-col items-center justify-center p-3 gap-2 rounded-2xl lg:w-[250px] lg:h-[370px] shadow">

        <img class="w-[200px] h-[120px] lg:w-[220px] lg:h-[140px] rounded-2xl" src="${tree.image}">
        <div class="ml-1">
           <h1 class="font-bold font-inter lg:text-[17px]">${tree.name}</h1> 
           <p class="font-inter text-[10px] w-[200px]lg:w-[210px] lg:text-[12px]">${tree.description}</p>
        </div>
        <div class="flex items-center justify-between w-[200px] lg:w-[220px]">
            <button class="w-[140px] h-[25px]  rounded-2xl text-[13px] font-semibold font-inter bg-[#f0fdf4] text-[#15803d]lg:w-[90px] lg:h-[30px]">${tree.category}</button>
            <h2 class="font-bold font-inter">$ ${tree.price}</h2>
        </div>
        <button class="w-[200px] h-[35px] bg-[#15803d] text-white font-semibold rounded-2xl lg:w-[220px] lg:h-[40px]">Add to Cart</button>
     </div>`

getContainer.append(divForCard)


}
}



// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500











allTrees();