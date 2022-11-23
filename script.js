let count = document.getElementById('counter');
let counter = 0;

document.addEventListener('keypress', function(k){

    if(k.key === "z"){
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        if (t > 0)
        document.getElementById('kenny').style.top = t + 'px';
    }
    else if(k.key === "q"){
        let l = parseInt(document.getElementById('kenny').style.left);
        l = l - 10;
        if (l > 0)
            document.getElementById('kenny').style.left = l  + 'px';
        if(l < 45){

            // restart kenny + death count

            alert('kenny est mort');
            console.log(typeof counter)
            document.getElementById('kenny').style.left = '200px'
            document.getElementById('kenny').style.top = '200px'
            ++counter
            count.innerHTML = "Morts : " + counter;
            console.log(counter)
        }
    }
    else if (k.key === "s"){
        let t = parseInt(document.getElementById('kenny').style.top)
        t = t + 10;
        if (t <= 470)
            document.getElementById('kenny').style.top = t + 'px'
    }
    else if (k.key === "d"){
        let l = parseInt(document.getElementById('kenny').style.left);
        l = l + 10;
        if (l <= 470)
            document.getElementById('kenny').style.left = l + 'px';
    }
})

let container = document.getElementById('viewport');

let deathZone = document.createElement('div');
deathZone.style.width = "50px";
deathZone.style.height = "500px";
deathZone.style.backgroundColor = "red";

container.appendChild(deathZone);
