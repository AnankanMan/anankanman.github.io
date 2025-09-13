import { pull } from "../main.js";

const update = async () => {
    const par = new URLSearchParams(window.location.search);
    const id = par.get('id');
    let arr = await pull();
    let con = arr[id];
    document.querySelector('.title').querySelector('h1').innerHTML = con.title;
    document.querySelector('#topic').innerHTML = `วิชา: ${con.topic}`;
    document.querySelector('#author').innerHTML = `ผู้แต่ง: ${con.author}`;
    document.querySelector('#linkA').innerHTML = con.link;
    document.querySelector('#linkA').href = con.link;
    document.querySelector('#drive').src = `${con.link}/preview`
}

update();