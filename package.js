Package.describe({
  name: '3stack:colour-picker',
  version: '0.1.1',
  summary: 'A basic, reactive colour picker component',
  git: 'https://github.com/3stack-software/meteor-colour-picker',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use([
    "underscore"
  ], ['client', 'server']);
  api.use([
    "less",
    "tracker",
    "templating",
    "spacebars"
  ], ['client']);


  api.export('ColourPickerPalate');
  api.export('ColourPickerPalatePrimary');

  api.addFiles([
     'colour-table-layout.js',
     'colour-picker-common.js'
  ], ['client', 'server']);

  api.addFiles([
    'colour-picker.html',
    'colour-picker.js',
    'colour-picker.less'
  ], 'client');
});
