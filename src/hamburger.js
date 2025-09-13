function openMenu() {
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    const nav = document.getElementsByTagName('nav')[0];
    const side = document.getElementsByClassName('sideMenu')[0];
    const li = document.getElementsByClassName('liMenu');

    bar1.classList.toggle('bar1Trans');
    bar2.classList.toggle('bar2Trans');
    bar3.classList.toggle('bar3Trans');
    side.classList.toggle('slide');
    if(li[0].style.opacity == '1'){
        for(let i=0; i<li.length;  i++){
            li[i].style.opacity = '0'
        }
    }else{
        for(let i=0; i<li.length;  i++){
            li[i].style.opacity = '1'
            console.log('hi')
        }
    }

    if (!nav.classList.contains('sticky')) {
        nav.classList.add('sticky');
    }

    if (window.scrollY < 100 && !side.classList.contains('slide')) {
        nav.classList.remove('sticky');
    }
}