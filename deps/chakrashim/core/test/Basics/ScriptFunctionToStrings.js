//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.WScript && this.WScript.LoadScriptFile) { // Check for running in ch
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}
var tests = [
    {
        name: "function declaration test",
        body: function ()
        {
            eval("function \n\t\r foo() {var a = 5;}");
            assert.areEqual("function foo() {var a = 5;}", foo.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "function assignment test",
        body: function ()
        {
            eval("var a = function \t\n\r\t foo() {var a = 5;}");
            assert.areEqual("function foo() {var a = 5;}", a.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            a = function (i) { i++; }
            assert.areEqual("function (i) { i++; }", a.toString(), "toString should add a space if one does not exist");
        }
    },
    {
        name: "generator function declaration test",
        body: function ()
        {
            eval("function* \t\r\n  foo() {var a = 5;}");
            assert.areEqual("function* foo() {var a = 5;}", foo.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            eval("function \t\r\n*\n\r\n \t foo() {var a = 5;}");
            assert.areEqual("function* foo() {var a = 5;}", foo.toString(), "toString should remove all extra whitespace,  new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "generator function assignment test",
        body: function ()
        {
            eval("var a = function* \t\n\r  \t foo() {var a = 5;}");
            assert.areEqual("function* foo() {var a = 5;}", a.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            eval("var a = function \t\n\r  *  \t\n foo() {var a = 5;}");
            assert.areEqual("function* foo() {var a = 5;}", a.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "Named function expression tests",
        body: function ()
        {
            eval("var o = { foo : function \n\t bar \t () {}}");
            eval("o.e = function \t qui \t () {}");
            assert.areEqual("function bar() {}", o.foo.toString(), "confirm that the foo identifier does not override the name bar ");
            assert.areEqual("function qui() {}", o.e.toString(), "confirm that the foo identifier does not override the name qui");
        }
    },
    {
        name: "function expression tests without names",
        body: function ()
        {
            eval("var o = { foo : function \n\t  \t () {}}");
            eval("o.e = function \t  \t () {}");
            assert.areEqual("function () {}", o.foo.toString(), "confirm that the foo identifier does not override the name bar ");
            assert.areEqual("function () {}", o.e.toString(), "confirm that the foo identifier does not override the name qui");
        }
    },
    {
        name: "internal function test",
        body: function ()
        {
            eval("function foo() { return foo.toString(); }");
            var a = foo;
            assert.areEqual("function foo() { return foo.toString(); }", a(), "confirm that even if we call toString internally it has no effect on the name")
        }
    },
    {
        name: "class method test",
        body: function ()
        {
            eval("var qux = class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}");
            var quxObj = new qux();
            assert.areEqual("func(){}", qux.func.toString(), "the name should be func")
            assert.areEqual("method(){}", quxObj.method.toString(), "the name should be method")

            var oGet = Object.getOwnPropertyDescriptor(qux.prototype, "getter");
            var oSet = Object.getOwnPropertyDescriptor(qux.prototype, "setter");
            assert.areEqual("getter(){}", oGet.get.toString(), "the name should be getter");
            assert.areEqual("setter(v){}", oSet.set.toString(), "the name should be setter");
        }
    },
    {
        name: "class constructor test",
        body: function ()
        {
            // [19.2.3.5] Function.prototype.toString()
            // The string representation must have the syntax of a FunctionDeclaration, FunctionExpression, GeneratorDeclaration,
            //     GeneratorExpression, AsyncFunctionDeclaration, AsyncFunctionExpression, ClassDeclaration, ClassExpression, ArrowFunction,
            //     AsyncArrowFunction, or MethodDefinition depending upon the actual characteristics of the object.

            eval("var qux = class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}");
            var quxObj = new qux();
            assert.areEqual("class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}",
                quxObj.constructor.toString(), "The string representation must have the syntax of a ClassExpression");

            var qux = class { };
            var quxObj = new qux();
            assert.areEqual("class { }", quxObj.constructor.toString(), "The string representation must have the syntax of a ClassDeclaration")
        }
    },
    {
        name: "shorthand method function test",
        body: function ()
        {
            // TODO update this test after fixing output (see Microsoft/ChakraCore#2914: Incorrect Function toString for methods declared with string in brackets)
            var o = { ['f']() { }, g() { } };
            assert.areEqual("f() { }", o.f.toString());
        }
    },
    {
        name: "arrow function Test",
        body: function ()
        {
            var arrowDecl = () => { };
            assert.areEqual("() => { }", arrowDecl.toString(), "Make sure arrow functions remain unaffected by ie12 formatting");
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
