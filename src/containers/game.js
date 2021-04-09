const game = () => {
    const x = document.querySelector('.x');
    const egg = document.querySelector('.egg');
    const logos = [document.querySelector('.logo1'), document.querySelector('.logo2')]
    const startB = document.querySelector('div.egg>button:first-of-type');
    const exitB = document.querySelector('div.egg>button:nth-of-type(2)');
    const scoreDisp = document.querySelector('.score');
    const timeDisp = document.querySelector('.time');
    let score = 0;



    scoreDisp.textContent = score;
    timeDisp.textContent = 60;
    egg.style.display = 'flex';

    function start(){
      const randLogo = logos[logos.length * Math.random() | 0];
      const randTime = Math.floor(Math.random() * 3000) + 1000;
      const randPosL = Math.floor(Math.random() * 100) + 10;
      const randPosT = Math.floor(Math.random() * 100) + 10;
      randLogo.style.display = 'flex';
      randLogo.style.left =`${randPosL}%`;
      randLogo.style.top = `${randPosT}%`;
      setTimeout(()=>{randLogo.style.display = 'none'}, randTime);
    }

    const timer = function() {
        let sixty = 60;
        const loop = function() {
            console.log(timeDisp.textContent);
            console.log(typeof(timeDisp.textContent));
            parseInt(timeDisp.textContent) > 1 ? timeDisp.textContent = sixty : 0;
            sixty--;
            (logos[0].style.display === 'none' && logos[1].style.display === 'none') ? innerFunc(sixty) : sixty;
        };
        const innerFunc = function(p) {
          (p > 0) ? start() : null;
          for (var i = logos.length - 1; i >= 0; i--) {
            function writeScore(p){scoreDisp.textContent = p}
            logos[i].addEventListener('click', () => {score++; writeScore(score)});
          }
          for (var i = logos.length - 1; i >= 0; i--) {
            logos[i].addEventListener('click', () => {logos[i].style.display = 'none'});
          }
          (p <= 0) ? clearInterval(interval) : null;
        };
        let interval = setInterval(loop, 1000);
    };

    const myTimeIt = timer();

    startB.addEventListener('click', () => {myTimeIt});
    exitB.addEventListener('click', ()=>{egg.style.display = 'none'; window.clearInterval(timer.interval);});

}

export default game;
