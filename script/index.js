function loadLevels(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((dat)=>displayDat(dat.data))
    
}

function displayDat(datas){

    const firstContainer=document.getElementById('firstcontainer')

    for(let les of datas )
    {
        const  
    }

}

loadLevels()