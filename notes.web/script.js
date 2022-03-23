let post_btn = document.querySelector(".post");
let title = document.querySelector(".title");
let note_content = document.querySelector(".note-content");
let card_area = document.querySelector(".card-area");
display_card();

post_btn.addEventListener("click", () => {
  let title_value = title.value;
  let note_content_value = note_content.value;
  
  let getData = localStorage.getItem("notes");
  
  if (getData == null) {
    storage_array = [];
  } else {
    storage_array = JSON.parse(getData);
  }
  
  storage_array.push([title_value, note_content_value]);
  localStorage.setItem("notes", JSON.stringify(storage_array));
  title.value = ""
  note_content.value = ""
  display_card();
});

function display_card() {
  
  let getData = localStorage.getItem("notes");
  if (getData == null) {
    storage_array = [];
  } else {
    storage_array = JSON.parse(getData);
  }
  let html = "";
  storage_array.forEach((element, index) => {
    let card = ` <div class="card">
    <div class="heading">
    <h3>${element[0]}</h3>
    </div>
    <hr>
    <div class="note">
    <p>
    ${element[1]}
    </p>
    </div>
    <div class="buttons">
    <button id="${index}" onclick="deleteFunc(this.id)" >Delete</button>
    </div>
    </div>`  
    
    html+=card;
  });
  card_area.innerHTML = html;
}

function deleteFunc(index){
  let getData = localStorage.getItem("notes");
  if (getData == null) {
    storage_array = [];
  } else {
    storage_array = JSON.parse(getData);
  }
  storage_array.splice(index, 1);
  console.log(storage_array)
  localStorage.setItem("notes", JSON.stringify(storage_array));
  display_card();
}

let search_input = document.querySelector(".search-input");

search_input.addEventListener('input', ()=>{
  let inp = search_input.value;
  let note_card = document.querySelectorAll(".card");
  note_card.forEach((element)=>{
    let note_txt = element.getElementsByTagName("h3")[0].innerText;
    if(note_txt.includes(inp)){
      element.style.display = "block"
    }else{
      element.style.display = "none"
    }
  })
})