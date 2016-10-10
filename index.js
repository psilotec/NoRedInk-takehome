/**
 * Created by Scott on 10/10/2016.
 */
//https://github.com/psilotec/NoRedInk-takehome



function questions () {
    // Import question data
    var taxonimy = [
        ["nouns", "verbs"],
        ["common nouns", "abstract nouns", "proper nouns", "action verbs", "transitive verbs", "reflexive verbs"],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ];



// Import usage data
    // Will come back to this if enough time


// Student is prompted for the number of questions they would like to answer
    // create function numQuestions
    // (must be > 0)
    function selectNumQuestions () {
        // Stubbed for now
        return 3;
    }

    console.log("Please select how many questions you would like.");
    var numQuestions = selectNumQuestions();


// Based on numQuestions, decide how many strands to give
    //solve first, test this function (question_ids defined, question_ids === numQuestions)
    function decideQuestions (numQuestions) {
        var i = 0,
            question_ids;

        for(i; i < numQuestions; i++) {

            taxonimy[][]
        }

        return question_ids;
    }

    decideQuestions(numQuestions);
// Prefer questions that have not been assigned yet
    // create variable "hasBeenAssigned"


// Use an equal number of strands for the number of questions (2 types: nouns, verbs)
// Use an equal number of standards as possible (6 types: common nouns, abstract nouns, proper nouns, action verbs, transitive verbs, reflexive verbs)


// Return list of question_ids


}