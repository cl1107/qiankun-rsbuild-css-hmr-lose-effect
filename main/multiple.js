import { loadMicroApp } from 'qiankun';

// let app;

// function mount() {
//   console.log('mount');
//   app = loadMicroApp(
//     { name: 'vue', entry: '//localhost:7101', container: '#vue' },
//     { sandbox: { experimentalStyleIsolation: true } }
//   );
// }

// function unmount() {
//   app.unmount();
// }

// document.querySelector('#mount').addEventListener('click', mount);
// document.querySelector('#unmount').addEventListener('click', unmount);

loadMicroApp(
  { name: 'vue', entry: '//localhost:7101', container: '#vue' },
  { sandbox: { experimentalStyleIsolation: true } }
);

loadMicroApp(
  { name: 'vue3', entry: '//localhost:7105', container: '#vue3' },
  { sandbox: { experimentalStyleIsolation: true } }
);
