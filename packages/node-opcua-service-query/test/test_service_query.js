"use strict";
 const service = require("..");
 describe("Query Service",function() {
     it("should create a QueryFirstRequest",function() {
         new service.QueryFirstRequest({});
     });
 });