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
      randLogo.addEventListener('click', () => {scoreDisp.textContent = score + 1});
      randLogo.addEventListener('click', () => {randLogo.style.display = 'none'});
      setTimeout(()=>{randLogo.style.display = 'none'}, randTime);
    }

    var timer = function() {
        var sixty = 60;
        var loop = function() {
            sixty--;
            innerFunc(sixty);
        };
        var innerFunc = function(param) {
          timeDisp.textContent = param;
          (param >= 0) ? start() : null;
          (param === 0) ? clearInterval(interval) : null;
        };
        let interval = setInterval(loop, 1000);
    };

    const myTimeIt = timer();

    startB.addEventListener('click', () => {myTimeIt()});
    exitB.addEventListener('click', ()=>{egg.style.display = 'none'; window.clearInterval(myTimeIt.interval);});

}

export default game;
