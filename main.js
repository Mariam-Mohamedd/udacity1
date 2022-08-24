

const navlist=document.getElementById("navbar__list");
const section=Array.from(document.querySelectorAll("section"));

function createListItem(){
    for(section of sections){
        listItem=document.createElement("li")
        listItem.innerHTML=`<li><a href="#${sec.id}"data-nav="${sec.id}" class=:"menu__link">${sec.dataset.nav}</a></li>`
        navList.appendChild(listItem);
    }
}

createListItem();

window.onscroll=function(){
    document.querySelectorAll('section').forEach(function(active){
        if(
            active.getBoundingClientRect().top>=-400&&
            active.getBoundingClientRect().top<=150
        ){
            active.classList.add("your-active-class");
    }else{
        active.classList.remove("your-active-class");
    }
   });
};

navList.addeventlistener("click",(toSec)=>{
    toSec.preventDefault();
    if(toSec.targe.dataset.nav){
        document
        .getElementById(`${toSec.targe.dataset.nav}`)
        .scrollIntoView({behavior:"smooth"});
        setTimeout(()=>{
            location.hash=`${toSec.targe.dataset.nav}`;
        },170);
    }
});