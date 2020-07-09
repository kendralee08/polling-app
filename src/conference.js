export default class Conference {

    constructor(name, questions, scoreboard, participants) {
        this.name = name;
        this.questions = questions;
        this.scoreboard = scoreboard;
        this.participants = participants;
    }

    get Name() {
        return this.name;
    }

    get Questions() {
        return this.questions;
    }

    get Participants() {
        return this.participants;
    }

    get Scoreboard() {
        return this.scoreboard;
    }

}