Package.describe({
  summary: "My Meteor Package"
});

/**
 * Ex: Some NPM Dependencies
 */
Npm.depends({
  'async': '0.2.9',
  'debug': '0.7.2',
});

/**
 * On use we'll add files and export our tool
 */
Package.on_use(function (api) {
  /**
   * Add all the files, in the order of their dependence (eg, if A.js depends on B.js, B.js must be before A.js)
   */
  api.add_files([
    'lib/my.js' // <-- include all the necessary files in the package
    ],
    'server'); // Can be 'server', 'client' , ['client','server']

  /**
   * Only expose the My constructor, only export if meteor > 6.5
   */
  if (typeof api.export !== 'undefined') {
    api.export(['my'], 'server'); // 1st arg can be array of exported constructors/objects, 2nd can be 'server', 'client', ['client', 'server']
  }
});
