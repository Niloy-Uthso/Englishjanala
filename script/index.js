function loadLevels(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((dat)=>displayDat(dat.data))
    
}

function displayDat(datas){

    const firstContainer=document.getElementById('firstcontainer')

    for(let les of datas )
    {
        const  categoryDiv=document.createElement("div")
        categoryDiv.innerHTML=`
          <button onclick="loadLessons(${les.level_no})" class="flex msg border hover:bg-blue-500 gap-1 p-1 rounded-md " style="border-color: rgba(66, 42, 213, 1);">
     <img class="w-4" src="./styles/assets/fa-book-open.png" alt="">
     <p class="font-semibold text-xs " style="color: rgba(66, 42, 213, 1);">Lesson-${les.level_no}</p>
    </button>
        `
        firstContainer.append(categoryDiv)
    }

    

}

function loadLessons(les){

    const url=`https://openapi.programming-hero.com/api/level/${les}`
   console.log(url)
    fetch(url)
    .then((response)=>response.json())
    .then((dat)=>displayLesson(dat.data))
}

function displayLesson(lessons)
{
    const lessonContainer=document.getElementById('lessons')

     lessonContainer.innerHTML= ""
    for(let less of lessons)
    {
        const lessonCard=document.createElement('div')
       

        lessonCard.classList.add('w-80','h-40','bg-white','flex','items-center','flex-col','gap-2','justify-center','p-2','rounded-lg');
        // lessonCard.style.add('background-color=')
        lessonCard.innerHTML=`
        <h1 class="text-xl font-bold" style="color: rgba(30, 30, 30, 1);">${less.word}</h1>
        <p class="text-sm">Meaning/pronunciation</p>
        <p class="font-semibold text-xl"> ${less.meaning}/${less.pronunciation}</p>
        `
        lessonContainer.append(lessonCard)
    }
}

function loadId(id)
{
    fetch("https://openapi.programming-hero.com/api/word/5")
    .then((resp)=>resp.json())
    .then((da)=>console.log(da))
}

// {
//     "id": 4,
//     "level": 5,
//     "word": "Diligent",
//     "meaning": "পরিশ্রমী",
//     "pronunciation": "ডিলিজেন্ট"
//   },


 

 

loadLevels()
// loadLessons()