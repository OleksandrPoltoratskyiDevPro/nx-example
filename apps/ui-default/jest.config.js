module.exports = {
  name: 'ui-default',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui-default',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
