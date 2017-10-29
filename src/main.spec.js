"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills.tests");
// TestBed initialization
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// load all specs in ./src
var context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
