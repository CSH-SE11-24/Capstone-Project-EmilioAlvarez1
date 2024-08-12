//Element selector
let image1 = document.getElementById("N")
let image2 = document.getElementById("N2")
let body = document.getElementById("MAIN")
let text = document.querySelectorAll(".Ssleep")
let text2 = document.querySelectorAll(".Tsleep")

console.log(image1)


//Event Listeners
image1.addEventListener("mouseover", function(event){
  image1.style.width = "55%"
  body.style.backgroundColor = "purple"
  text[1].textContent = "Click Image"
  for(let i=0;i<text.length;i++){
    text[i].style.color = "white"
  }
})

image1.addEventListener("mouseout", function(event){
  image1.style.width = "50%"
  body.style.backgroundColor = "black"
  text[1].textContent = "Still Sleep?"
  for(let h=0;h<text.length;h++){
    text[h].style.color = "#BB1AEA"
  }
})

image2.addEventListener("mouseover", function(event){
  image2.style.width = "55%"
  body.style.backgroundColor = "gray"
  text2[1].textContent = "Click Image"
  for(let q=0;q<text.length;q++){
    text2[q].style.color = "Black"
  }
})

image2.addEventListener("mouseout", function(event){
  image2.style.width = "50%"
  body.style.backgroundColor = "black"
  text2[1].textContent = "Don't Sleep"
  for(let r=0;r<text.length;r++){
    text2[r].style.color = "white"
  }
})



