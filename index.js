let arr = ["C#", "Avalonia", "HTML","CSS","Git"]
let skills = document.getElementById("skills")
arr.forEach((item) => {
    let card = document.createElement("div") 
    card.classList.add("skill-tag")
    card.innerHTML = `${item}`
    skills.appendChild(card)
})



