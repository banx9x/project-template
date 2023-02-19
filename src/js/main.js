import '@/css/style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
      <img src="avatar.jpeg" class="logo" alt="Ba đẹp trai" />
    <h1>Hello I'm Ba đẹp trai 😎!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
