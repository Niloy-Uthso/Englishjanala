document.getElementById('start').addEventListener('click',function(){
    
    if(document.getElementById('password').value==''&& document.getElementById('name').value=='')
        alert("Please put name and password")
        
    else if(document.getElementById('name').value=='')
        alert("Please put your name first")
   else if(document.getElementById('password').value==''&& document.getElementById('name').value!=='')
        alert("Please put your Password")

   else if(document.getElementById('password').value=='123456'&&document.getElementById('name').value!=='')

    {
        
         document.getElementById('khela').classList.remove('hidden')
         document.getElementById('khela1').classList.remove('hidden')
        // document.getElementById('ch').classList.remove('hidden')
         document.getElementById('msg').classList.remove('hidden')
         document.getElementById('faq').classList.remove('hidden')

         document.getElementById('he').classList.add('hidden')
         alert('WOW!!Log in successful!!!')
        
        
    }
   else  if(document.getElementById('password').value!=='123456'&& document.getElementById('password').value!==''){
        alert('Wrong password.Contact admin to get your login code')
    }
   
})

function met(sm)
{
    document.getElementById(sm).scrollIntoView({ behavior: "smooth" });
}
function meta()
{
    document.getElementById('khela').classList.add('hidden')
    document.getElementById('khela1').classList.add('hidden')
    document.getElementById('msg').classList.add('hidden')
    document.getElementById('faq').classList.add('hidden')
    document.getElementById('lessons').classList.add('hidden')
    document.getElementById('he').classList.remove('hidden')
}


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
          <button onclick="loadLessons(${les.level_no});setActive(this)" class="flex msg b border hover:bg-blue-500 gap-1 p-1 rounded-md mt-10" style="border-color: rgba(66, 42, 213, 1);">
     <img class="w-4" src="./styles/assets/fa-book-open.png" alt="">
     <p class="font-semibold text-xs " style="color: rgba(66, 42, 213, 1);">Lesson-${les.level_no}</p>
    </button>
        `
        firstContainer.append(categoryDiv)
    }

    

}

function setActive(thi){
    document.querySelectorAll('.b').forEach(btn => btn.classList.remove('active-btn'));

    thi.classList.add('active-btn');
}

function loadLessons(les){
   const r=document.getElementById('msg')
   r.style.display='none'
   document.getElementById('lessons').classList.remove('hidden')
    const url=`https://openapi.programming-hero.com/api/level/${les}`
 
    fetch(url)
    .then((response)=>response.json())
    .then((dat)=>displayLesson(dat.data))
}

function displayLesson(lessons)
{
    const lessonContainer=document.getElementById('lessons')
    lessonContainer.classList.remove('flex','items-center')
    lessonContainer.classList.add('grid','grid-cols-3')
    
     lessonContainer.innerHTML= ""
    
     
     if(lessons.length!=0)
     {
    lessonContainer.innerHTML=`<span id="spin" class="loading col-start-2 hidden loading-dots loading-xl"></span>`
     const sp =document.getElementById('spin')
      sp.classList.remove('hidden')

     setTimeout(() => {
        sp.classList.add("hidden");
         
    }, 150);
     
    for(let less of lessons)
    {
        const lessonCard=document.createElement('div')
       

        lessonCard.classList.add('w-80','h-40','bg-white','flex','items-center','flex-col','gap-2','justify-center','p-2','rounded-lg');
        // lessonCard.style.add('background-color=')
        lessonCard.innerHTML=`
        <h1 class="text-xl font-bold" style="color: rgba(30, 30, 30, 1);">${less.word}</h1>
        <p class="text-sm">Meaning/pronunciation</p>
        <p class="font-semibold text-xl"> ${less.meaning||"অর্থ নেই "}/${less.pronunciation}</p>
        <div class="flex item-center justify-between  w-full">
        <i id="info" class="fa-solid fa-circle-info" onclick="details(${less.id})"></i>
        <i class="fa-solid fa-volume-high"></i>
        </div>
        
        `

        lessonContainer.append(lessonCard)
        
    }
}
else
{
    
    lessonContainer.classList.remove('grid')
    lessonContainer.classList.add('flex','items-center')
    
    const lessonCard=document.createElement('div')
       

    lessonCard.classList.add('w-80','h-40','flex','items-center','flex-col','gap-2','justify-center','p-2','rounded-lg','mx-auto');
    // lessonCard.style.add('background-color=')
    lessonCard.innerHTML=`
     <span id="spin" class="loading  hidden loading-dots loading-xl"></span>
    <img class="w-14" src="./styles/assets/alert-error.png" alt="">
    
    <p class="text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h1 class="text-xl font-bold" style="color: rgba(30, 30, 30, 1);">নেক্সট Lesson এ যান</h1>
     
    `
    lessonContainer.append(lessonCard)
    const sp =document.getElementById('spin')
      sp.classList.remove('hidden')

     setTimeout(() => {
        sp.classList.add("hidden");
         
    }, 150);
}
}

 function details(w){

    const url=`https://openapi.programming-hero.com/api/word/${w}`
    fetch(url)
    .then((response)=>response.json())
    .then((dat)=>displayDetails(dat.data))

    // console.log(url)  
// console.log(w)
 }

 function displayDetails(wo)
 {

    document.getElementById('my_modal_1').showModal()
    // const r=document.getElementById('shobDetails')

    const shob=document.getElementById('shobDetails')

     shob.innerHTML=`
     
     <h1 class="font-bold">${wo.word}(<i class="fa-solid fa-microphone"></i>:${wo.pronunciation})</h1>
     <div>
     <p class="font-semibold text-sm">Meaning</p>

     <p class="text-sm">${wo.meaning||"অর্থ পাওয়া যায় নি"}</p>
     </div>

     <div>
     <p class="font-semibold text-sm">Example</p>
     <p class="font-light text-[12px]">${wo.sentence}</p>
     </div>
     <div>
<p class="font-semibold text-sm">সমার্থক শব্দ গুলো</p>
     <div class="flex gap-1 ">
     ${wo.synonyms.map(syn =>`<p class=" font-normal p-1  rounded-md"  style="background-color:rgba(237, 247, 255, 1);">${syn}</p>`).join("")}
     </div>
     </div>
     
     
     
     
     `

    //  {
    //     "status": true,
    //     "message": "successfully fetched a word details",
    //     "data": {
    //       "word": "Eager",
    //       "meaning": "আগ্রহী",
    //       "pronunciation": "ইগার",
    //       "level": 1,
    //       "sentence": "The kids were eager to open their gifts.",
    //       "points": 1,
    //       "partsOfSpeech": "adjective",
    //       "synonyms": [
    //         "enthusiastic",
    //         "excited",
    //         "keen"
    //       ],
    //       "id": 5
    //     }
    //   }
    // // r.append(shob)
    // // const h=document.createElement('h1')





 }

//    function dis(a)
//  {

//     for(let i=0;i<a.length;i++)

//  }

// {
//     "id": 4,
//     "level": 5,
//     "word": "Diligent",
//     "meaning": "পরিশ্রমী",
//     "pronunciation": "ডিলিজেন্ট"
//   },


 

 

loadLevels()
// loadLessons()