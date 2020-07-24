const Child = require("../child");

describe("Child", () => {
    describe ("if child name isn't string return error", () => {
        const childName = "Gary";
        const obj = new Child (childName);
        expect(obj.childName)

    }
  
});
