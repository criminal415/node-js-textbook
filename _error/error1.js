setInterval(() => {
  console.log('start');
  try {
    throw new Error('error1');
  } catch (err) {
    console.error(err);
  }
}, 1000);
