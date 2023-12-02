import { getData } from 'node-edge-library';

// Same code outputs 2 different things 
// when called with `node run.js` and `node --conditions=edge run.js`
console.log(getData());