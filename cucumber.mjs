export default {
  default: {
    require: ['features/step_defenitions/**/*.ts'],
    publishQuiet: true,
    format: ['progress'],
    parallel: 1,
  },
};
