document.addEventListener('DOMContentLoaded', function () {

   if (confirm("Wanna play?")) {



    let runawayIcon = document.querySelector('img');
    let div = document.querySelector('div');

    let t = 60;
    let timerId = setInterval(() => {

        document.querySelector('h2').textContent = `You have ${t} sec`;
        t--;
        if (t == -1) {
            alert('Game Over');
            location.reload();
        }
    }
        , 1000);


    let count = 1;
    div.onclick = function () {
        document.querySelector('h1').textContent = `You caught me ${count} times`;
        if (count == 5) {
            alert('You win');
            location.reload();
        }
        count++;
    }



    runawayIcon.onmousemove = function (e) {


        maxElemLeft = document.documentElement.clientWidth - div.offsetWidth;
        maxElemTop = document.documentElement.clientHeight - div.offsetHeight;

        let previousX = localStorage.getItem('currentX') || [];

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        elemLeft = getRandomInt(0, maxElemLeft);

        if (previousX > elemLeft) {
            runawayIcon.style.transform = "scale(-1, 1)";
        } else if (previousX < elemLeft) {
            runawayIcon.style.transform = "none";
        }

        div.style.left = elemLeft + 'px';
        elemTop = getRandomInt(0, maxElemTop);
        div.style.top = elemTop + 'px';

        localStorage.setItem('currentX', elemLeft);

    }

   } else {
    document.querySelector('body').style.backgroundImage = `url(./img/giphy2.gif)`;
    document.querySelector('img').style.display = 'none';
    return false;
   }

});

