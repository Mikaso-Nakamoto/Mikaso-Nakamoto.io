let arr = ["C#", "Avalonia", "HTML","CSS","Git"]
let skills = document.getElementById("skills")
arr.forEach((item) => {
    let card = document.createElement("div") 
    card.classList.add("skill-tag")
    card.innerHTML = `${item}`
    skills.appendChild(card)
})

document.getElementById('copyMail').addEventListener('click', async () => {
  const text = document.getElementById('copyMail').textContent;

  try {
    await navigator.clipboard.writeText(text);
    alert('Текст скопирован в буфер обмена!');
  } catch (err) {
    console.error('Ошибка при копировании: ', err);
    alert('Не удалось скопировать текст');
  }
});


