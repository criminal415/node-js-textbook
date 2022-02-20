process.on('uncaughtException', (err) => {
  console.error('error!!', err);
});

setInterval(() => {
  throw new Error('error!!');
}, 1000);

setTimeout(() => {
  console.log('exec');
}, 2000);
