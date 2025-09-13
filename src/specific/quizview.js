import { qpull } from "../main.js";


const update = async () => {
    const par = new URLSearchParams(window.location.search);
    const id = par.get('id');
    let arr = await qpull();
    let con = arr[id];
    document.querySelector('.title').querySelector('h1').innerHTML = con.title;
    document.querySelector('#topic').innerHTML = `วิชา: ${con.topic}`;
    document.querySelector('#author').innerHTML = `ผู้แต่ง: ${con.author}`;
    document.querySelector('#no').innerHTML = `จำนวนข้อ: ${2}`;

        const updateQ = (i) => {
        if(!con.qu || con.qu.length == 0){
            return;
        }
        document.querySelector(`#ans1`).style.backgroundColor = "whitesmoke";
        document.querySelector(`#ans2`).style.backgroundColor = "whitesmoke";
        document.querySelector(`#ans3`).style.backgroundColor = "whitesmoke";
        document.querySelector(`#ans4`).style.backgroundColor = "whitesmoke";
        document.querySelector(`#ans1`).style.color = "black";
        document.querySelector(`#ans2`).style.color = "black";
        document.querySelector(`#ans3`).style.color = "black";
        document.querySelector(`#ans4`).style.color = "black";
    
        document.querySelector('.quiz_').querySelector('h5').innerHTML = `ข้อที่ ${i + 1}`;
        document.querySelector('.quiz_').querySelector('p').innerHTML = con.qu[i].q;
        if(con.qu[i].qImg !== ""){
        document.querySelector('.quiz_').querySelector('img').src = `/imgs/quiz/${con.qu[i].qImg}`;
        }else{
            document.querySelector('.quiz_').querySelector('img').src = "";
        }
        if(con.qu[i].a1Img !== ""){
        document.querySelector("#a1i").src = `/imgs/quiz/${con.qu[i].a1Img}`;
        }else{
            document.querySelector("#a1i").src = "";
        }
        if(con.qu[i].a2Img !== ""){
            document.querySelector("#a2i").src = `/imgs/quiz/${con.qu[i].a2Img}`;
        }else{
            document.querySelector("#a2i").src = "";
        }
        if(con.qu[i].a3Img !== ""){
            document.querySelector("#a3i").src = `/imgs/quiz/${con.qu[i].a3Img}`;
        }else{
            document.querySelector("#a3i").src = "";
        }
        if(con.qu[i].a4Img !== ""){
            document.querySelector("#a4i").src = `/imgs/quiz/${con.qu[i].a4Img}`;
        }else{
            document.querySelector("#a4i").src = "";
        }
        if(con.qu[i].a1 !== ""){
            document.querySelector("#a1").innerHTML = `${con.qu[i].a1}`;
        }else{
            document.querySelector("#a1").innerHTML = "";
        }
        if(con.qu[i].a2 !== ""){
            document.querySelector("#a2").innerHTML = `${con.qu[i].a2}`;
        }else{
            document.querySelector("#a2").innerHTML = "";
        }
        if(con.qu[i].a3 !== ""){
            document.querySelector("#a3").innerHTML = `${con.qu[i].a3}`;
        }else{
            document.querySelector("#a3").innerHTML = "";
        }
        if(con.qu[i].a4 !== ""){
            document.querySelector("#a4").innerHTML = `${con.qu[i].a4}`;
        }else{
            document.querySelector("#a4").innerHTML = "";
        }
        document.querySelector('.soln').querySelector('p').innerHTML = con.qu[i].solnDec;
        document.querySelector('.soln').style.display = "none";

        if(i == 0){
            document.querySelector("#back").style.display = "none";
        }else{
            document.querySelector("#back").style.display = "block";
            document.querySelector("#back").addEventListener("click", () => back(), {once: true});
        }
        if(i == (con.qu.length - 1)){
            document.querySelector("#next").style.display = "none";
        }else{
            document.querySelector("#next").style.display = "block";
            document.querySelector("#next").addEventListener("click", () => next(), {once: true});
        }

        let click = 0;
        const check = (n) => {
        if(click > 0) { return; }
        click += 1;
        if(n == con.qu[i].soln){
            document.querySelector(`#ans${n}`).style.backgroundColor = '#0f371aff';
            document.querySelector(`#ans${n}`).style.color = 'whitesmoke';
        }else{
            document.querySelector(`#ans${n}`).style.backgroundColor = '#bc3a3aff';
            document.querySelector(`#ans${n}`).style.color = 'whitesmoke';
            document.querySelector(`#ans${con.qu[i].soln}`).style.backgroundColor = '#0f371aff';
            document.querySelector(`#ans${con.qu[i].soln}`).style.color = 'whitesmoke';            
        }
        document.querySelector('.soln').style.display = "block";
    }

    document.querySelector("#a1").addEventListener("click", () => (check(1)), {once: true});
        document.querySelector("#a2").addEventListener("click", () => (check(2)), {once: true});
        document.querySelector("#a3").addEventListener("click", () => (check(3)), {once: true});
        document.querySelector("#a4").addEventListener("click", () => (check(4)), {once: true});

        const next = () => {
        updateQ(i+1);
        return;
    }
    const back = () =>{
        updateQ(i-1);
        return;
    }

    }

    updateQ(0);
}

update();