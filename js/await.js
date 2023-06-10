// await makes a sync function wait for a Promise

async function fileLoaded() {
  let loaded = true;
  if (loaded)
      return 'file loaded';
  else
      throw 'file not loaded';
  }

//* with "await" keyword there is no need to use then and catch
// fileLoaded().then(value => console.log(value))
//           .catch(err => console.log(err));

async function startProcess() {
  try {
    const load = await fileLoaded(); // it gotta be in async function tho
    console.log(load);
  }
  catch(err) {
    console.log(err);
  }
}

startProcess();