// ----------For All Trees-----------

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

document.getElementById("all-trees").addEventListener("click",
    function(){
        getContainer.append(divForCard)
    }
)
}
}

// -------------For All Categories--------------

const allCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json)=>tenCategories(json.categories))


const tenCategories=(categories)=>{
    
const categoryContainer=document.getElementById("category-field")
categoryContainer.innerHTML="";

for(category of categories){

const divForCategories=document.createElement("div")
divForCategories.innerHTML=`<button onclick="loadCategories(${category.id})" class="w-[130px] h-[30px] lg:w-[200px] bg-white  text-[#15803d] text-center font-inter rounded-[7px] font-semibold hover:bg-[#15803d] hover:text-white mt-2">${category.category_name}</button>`

categoryContainer.append(divForCategories);

}
}
}

// --------For Each Categories----------

const loadCategories=(id)=>{
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>accordingCategory(json.plants))


const accordingCategory=(eachCategories)=>{

    const specificContainer=document.getElementById("card-div")
    specificContainer.innerHTML="";

    for(eachCategory of eachCategories){
   
        const divForEach=document.createElement("div")
        divForEach.innerHTML=`<div class="w-[230px] h-[330px] bg-white flex flex-col items-center justify-center p-3 gap-2 rounded-2xl lg:w-[250px] lg:h-[370px] shadow">

        <img class="w-[200px] h-[120px] lg:w-[220px] lg:h-[140px] rounded-2xl" src="${eachCategory.image}">
        <div class="ml-1">
           <h1 class="font-bold font-inter lg:text-[17px]">${eachCategory.name}</h1> 
           <p class="font-inter text-[10px] w-[200px]lg:w-[210px] lg:text-[12px]">${eachCategory.description}</p>
        </div>
        <div class="flex items-center justify-between w-[200px] lg:w-[220px]">
            <button class="w-[140px] h-[25px]  rounded-2xl text-[13px] font-semibold font-inter bg-[#f0fdf4] text-[#15803d]lg:w-[90px] lg:h-[30px]">${eachCategory.category}</button>
            <h2 class="font-bold font-inter">$ ${eachCategory.price}</h2>
        </div>
        <button class="w-[200px] h-[35px] bg-[#15803d] text-white font-semibold rounded-2xl lg:w-[220px] lg:h-[40px]">Add to Cart</button>
     </div>`

     specificContainer.append(divForEach)


    }
}
}









allCategories();



allTrees();