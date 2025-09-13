import { pull, qpull } from "../main.js";

const holder = document.querySelector(".conveyorAnn");
const template = document.querySelector(".box1_ann");

const clear = () => {
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

clear(); 

const update = async () => {
    let a = await pull();
    let b = await qpull();
    let c = a.reverse().concat(b.reverse());
    let d = c.slice(0,10);
    for(let i=0; i<d.length; i++){
        let clone = template.cloneNode(true);
        clone.querySelector('h5').innerHTML = d[i].title;
        clone.querySelector('p').innerHTML = `เป็น note รายวิชา ${d[i].topic} ในหัวข้อ ${d[i].title} โดย ${d[i].author} ${d[i].detail}`
        if(d[i].qu){
            clone.querySelector('a').href = `/quizview.html?id=${d[i].id}`;
        }else{
            clone.querySelector('a').href = `/noteview.html?id=${d[i].id}`;
        }
        holder.appendChild(clone);
    }
}

update();
