require('ts-node/register');
module.exports = {
  default: {
    require: ['step_definitions/**/*.ts', 'src/support/**/*.ts'],
  },
};
