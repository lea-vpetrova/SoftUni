import { expect } from 'chai'
import { planYourTrip } from './planYourTrip.js'
describe("Tests for planYourTrip object",  () => {
    describe("choosingDestination function", ()=> {
        it("should return a message for a valid destination and season in 2024",  () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });
        it("should return a message for an invalid destination",  ()=> {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });
        it("should throw an error for an invalid year",  ()=> {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });
    });

    describe("exploreOptions function",  ()=> {
        it("should return an array of activities with the specified activity removed",  () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });
        it("should throw an error for invalid input",  () =>{
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 1.5)).to.throw("Invalid Information!");
        });
    });

    describe("estimateExpenses function",  () => {
        it("should return a budget-friendly message for total cost less than or equal to $500",  () => {
            expect(planYourTrip.estimateExpenses(200, 2)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });
        it("should return a message for total cost more than $500",  () =>{
            expect(planYourTrip.estimateExpenses(300, 3)).to.equal("The estimated cost for the trip is $900.00, plan accordingly.");
        });
        it("should throw an error for invalid input",  ()=> {
            expect(() => planYourTrip.estimateExpenses("200", 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(200, -2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw("Invalid Information!");
        });
    });
});
