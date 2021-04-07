const game = () => {
    const x = document.querySelector('.x');
    const egg = document.querySelector('.egg');
    const logos = [document.querySelector('.logo1'), document.querySelector('.logo2')]
    const startB = document.querySelector('div.egg>button:first-of-type');
    const exitB = document.querySelector('div.egg>button:nth-of-type(2)');
    const scoreDisp = document.querySelector('.score');
    const timeDisp = document.querySelector('.time');
    let score = 0;
    let interval;

    scoreDisp.textContent = score;
    timeDisp.textContent = 60;
    egg.style.display = 'flex';

    const start = () => {
      const randLogo = logos[logos.length * Math.random() | 0];
      const randTime = Math.floor(Math.random() * 2000) + 500;
      const randPosL = Math.floor(Math.random() * 100) + 10;
      const randPosT = Math.floor(Math.random() * 100) + 10;
      randLogo.style.display = 'flex';
      randLogo.style.left =`${randPosL}%`;
      randLogo.style.top = `${randPosT}%`;
      randLogo.addEventListener('click', () => {score += 1});
      randLogo.addEventListener('click', () => {scoreDisp.textContent = score});
      randLogo.addEventListener('click', () => {randLogo.style.display = 'none'});
      setTimeout(()=>{randLogo.style.display = 'none'}, randTime);
    }

    async function timer(){
      let sixty = 60;
      let time;
      const count = () => {return sixty -= 1};
      const clock = () => {timeDisp.textContent = sixty};
      // const clockOff = () => {if(sixty === 0){clearInterval(interval)}};
      // interval = setInterval(() => {count();clock();clockOff();}, 1000);
      while(sixty >= 0){
        count();
        clock();
        await new Promise(r => setTimeout(r, 1000));
        setTimeout(() => {console.log(sixty)}, 20000);
      }

      while(sixty >= 0){
        start();
      }
    }

    startB.addEventListener('click', () => {timer()});
    exitB.addEventListener('click', ()=>{egg.style.display = 'none'; window.clearInterval(interval);});

}

export default game;
