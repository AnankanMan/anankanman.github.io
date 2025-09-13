import { pull, search } from "../main.js";

// Declaration
const holder = document.querySelector(".conveyorAnn");
const template = document.querySelector(".box1_ann");
// Load
const load = async () => {
    clear();
    let arr = await pull();
    for(let i = 0; i<arr.length; i++){
        let clone = template.cloneNode(true);
        clone.querySelector('h5').innerHTML = arr[i].title;
        clone.querySelector('p').innerHTML = `เป็น note รายวิชา ${arr[i].topic} ในหัวข้อ ${arr[i].title} โดย ${arr[i].author} ${arr[i].detail}`
        clone.querySelector('a').href = `/noteview.html?id=${arr[i].id}`;
        holder.appendChild(clone);
    }
}

const clear = () => {
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

load();

// Search
const displaySearch = async () => {
    let sTitle = document.querySelector('#searchBox').value.toString().toLowerCase();
    let sTopic = document.querySelector('#topicBox').value.toString().toLowerCase();

    let response = await search([sTitle, sTopic]);
    clear();
    for(let i = 0; i<response.length; i++){
        let clone = template.cloneNode(true);
        clone.querySelector('h5').innerHTML = response[i].title;
        clone.querySelector('p').innerHTML = `เป็น note รายวิชา ${response[i].topic} ในหัวข้อ ${response[i].title} โดย ${response[i].author} ${response[i].detail}`
        clone.querySelector('a').href = `/noteview.html?id=${response[i].id}`;
        holder.appendChild(clone);
    }
}

// Event listener
const button = document.querySelector("#submit");
button.addEventListener("click", displaySearch);
