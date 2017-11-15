Package.describe({
  name: '3stack:colour-picker',
  version: '0.5.0',
  summary: 'A basic, reactive colour picker component',
  git: 'https://github.com/3stack-software/meteor-colour-picker',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
    "underscore"
  ], ['client', 'server']);
  api.use([
    "less",
    "tracker",
    "templating",
    "spacebars",
    "ecmascript",
    "react@15.0.1"
  ], ['client']);

  api.export([
    'ColourPickerPalate',
    'ColourPickerPalatePrimary',
    'ColourPickerControl',
    'ColourPickerButton'
  ]);

  api.addFiles([
     'colour-table-layout.js',
     'colour-picker-common.js'
  ], ['client', 'server']);

  api.addFiles([
    'colour-picker.html',
    'colour-picker.js',
    'colour-picker.jsx',
    'colour-picker.less'
  ], 'client');
});
