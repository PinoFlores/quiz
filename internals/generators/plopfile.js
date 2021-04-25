const componentGenerator = require('./component').componentGenerator;
const sliceGenerator = require('./slice').sliceGenerator;
const shell = require('shelljs');

function plop(plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}

module.exports = plop;
