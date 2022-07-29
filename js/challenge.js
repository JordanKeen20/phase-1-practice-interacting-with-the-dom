// clock;
const count = document.getElementById('counter');
let interval = setInterval(function incrementCounter(event){
    counter.innerText = parseInt(counter.innerText) + 1
  }, 1000)
// let i = 0
// const interval = setInterval(()=>{
//     if (i == 1000) clearInterval(interval);
//     count.innerHTML = i; 
//     i++;
//     for (let i = 1; i <= 1000; i++)
//     setInterval (i);

//     }, 1000);

//  plus button;

document.querySelector('#plus');
plus.addEventListener('click', function incrementCounter(event){
    count.innerText = parseInt(count.innerText) + 1
  });

// minus button;

document.getElementById('minus');
minus.addEventListener('click',  function decrementCounter(){
    count.innerText = parseInt(count.innerText) - 1
  });

//   like button;
let numberTracker = {}
const heart = document.getElementById('heart');
heart.addEventListener('click', function addHearts(){
    let hearts = count.innerText
    numberTracker[hearts] =
    numberTracker[hearts] || 0
    numberTracker[hearts] += 1
    renderLikes()
})

// logs Likes;
const likes = document.querySelector('ul.likes')
function renderLikes(){
    likes.innerHTML = ""
    for (let key in numberTracker){
      const li = document.createElement("li")
      li.innerText = `${key} has been liked ${numberTracker[key]} times.`
      likes.append(li)
    }
}

// pause button
let paused = false
const pause = document.getElementById('pause');
pause.addEventListener('click', function buttonPaused (){
    paused = !paused
    if (paused){
        clearInterval(interval)
        pause.innerText = 'resume'
    }else{
        interval =
        setInterval(function incrementCounter(event){
            counter.innerText = parseInt(counter.innerText) + 1
          }, 1000)
        pause.innerText ='pause'
    }
})

// Leaving comment
const comments = document.querySelector('#list');
const form = document.querySelector('#comment-form');
form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault()
    const comment = event.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    event.target.reset()
  })