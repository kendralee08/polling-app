import Conference from "../src/conference";
import Questions from "../src/questions";
import Scoreboard from "../src/scoreboard";
import Participants from "../src/participants";
let should = require('should');
describe("Polling Application", runtests);

function runtests() {
    it("Should create an event.", CreateConference);
}

function CreateConference() {
    let questions = new Questions();
    let scoreboard = new Scoreboard();
    let participants = new Participants();
    let conference = new Conference("Event Name", questions, scoreboard, participants);
    conference.should.not.be.Null();
    conference.Name.should.equal("Event Name");
    conference.Questions.should.not.be.Null();
    conference.Scoreboard.should.not.be.Null();
    conference.Participants.should.not.be.Null();
}

// Question
// each question has an answer
// there is a score board for answer
// multiple people answer a question at one time
// Each question belongs to an event
// Each question has three answers

/**
 * Event consists of questions and a scoreboard
 * Questions have only three answers
 * Scoreboard can show multiple people scores
 * The only answers for th question are yes, no, and maybe
 * Scoreboard shows how many people answered yes, no, or maybe
 * Be able to change answers to other answers in the future.
 */

