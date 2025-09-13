export { qpull, pull, search, qsearch };

const pull = () => {
    return fetch(`data/notes.json`)
        .then((response) => response.json() )
        .then((array) => {
      return array;
    });
}

const qpull = () => {
    return fetch(`data/archive.json`)
        .then((response) => response.json() )
        .then((array) => {
      return array;
    });
}


const search = async ([title, topic]) => {
    let arr = await pull();
    let match2 = [];
    let match1 = [];
    let match0 = [];
    for(let i=0; i<arr.length; i++){
        let point = 0;
        if(arr[i].title.toLowerCase() == title.toLowerCase()){
            point+= 1;
        }
        if(arr[i].topic.toLowerCase() == topic.toLowerCase()){
            point += 1
        }
        if(point == 2){
            match2.push(arr[i]);
        }else if(point ==1){
            match1.push(arr[i]);
        }else{
            match0.push(arr[i]);
        }
    }
    return (match2.concat(match1.concat(match0))).slice(0,10);
}

const qsearch = async ([title, topic]) => {
    let arr = await qpull();
    let match2 = [];
    let match1 = [];
    let match0 = [];
    for(let i=0; i<arr.length; i++){
        let point = 0;
        console.log(title);
        console.log(arr[i].title)
        if(arr[i].title.toLowerCase() == title.toLowerCase()){
            point+= 1;
        }
        if(arr[i].topic.toLowerCase() == topic.toLowerCase()){
            point += 1
        }
        console.log(point)
        if(point == 2){
            match2.push(arr[i]);
        }else if(point ==1){
            match1.push(arr[i]);
        }else{
            match0.push(arr[i]);
        }
    }
    return (match2.concat(match1.concat(match0))).slice(0,10);
}