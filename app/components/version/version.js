'use strict';

angular.module('capstoneApp.version', [
  'capstoneApp.version.interpolate-filter',
  'capstoneApp.version.version-directive'
])

.value('version', '0.1');
