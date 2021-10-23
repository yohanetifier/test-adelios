// Break lines

let p  = document.querySelector('#split')
let content = p.textContent
let firstSentence = content.slice(0,45);
let secondSentence = content.slice(45,87);
let thirdSentence = content.slice(87,132);
let fourthSentence = content.slice(132,179);
let fifthSentence = content.slice(179,219);
let sixthSentence = content.slice(219,259);
let seventhSentence = content.slice(259,305);
let eightSentence = content.slice(305, 311); 

// Clear the p

p.textContent = '';

// Add a br after each sentence

const sentence = [firstSentence, secondSentence, thirdSentence, fourthSentence, fifthSentence, sixthSentence, seventhSentence, eightSentence]

for (const element of sentence) {
    p.append(element)
    let br = document.createElement('br')
    p.appendChild(br)
}

// Split the text by lines, words and chars in div

let mySplitText = new SplitText("#split", {type:"lines, words, chars", position: "absolute" })

// Selection of the children of the p selector 

let div = document.querySelectorAll('p > div')

// Add atribute to the lines

const nameId = ["first", "second", "three", "four", "five", "six", "seven", "eight"]

// Boucle for animation

for (let i= 0; i < div.length; i++){
  div[i].setAttribute("id", nameId[i])
  
  if (i < 3){
    gsap.from(`#${nameId[i]} > div > div`, {opacity: 0, autoAlpha: 0, ease:Back.easeOut, stagger:{
    each: 0.04,
    from: "center"
}}, i === 0 ? null : i + 0.11)
  }
  
  if (i === 3){
    gsap.from(`#${nameId[i]} > div > div`, {opacity: 0, autoAlpha: 0, ease:Back.easeOut, stagger:{
  each: 0.04,
  from: "end"
}},i / 1.30)
  }
  
  if (i > 3 && i < 7){
    gsap.from(`#${nameId[i]} > div > div`, {opacity: 0, autoAlpha: 0, ease:Back.easeOut, stagger:{
  each: 0.04,
  from: "center"
}}, i / 1.4)
  }
  
  if( i >= 7){
    gsap.from(`#${nameId[i]} > div > div`, {opacity: 0, autoAlpha: 0, ease:Back.easeOut, stagger:{
  each: 0.04,
}}, i / 1.4)
  }
}
