// Copyright 2015, Renasar Technologies Inc.
/* jshint node:true */

'use strict';

describe(require('path').basename(__filename), function () {
    var base = require('./base-graph-spec');

    base.before(function (context) {
            context.taskdefinition = helper.require('/lib/graphs/switch-discovery-graph.js');
        });

    describe('graph', function () {
            base.examples();
        });

});