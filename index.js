/**
 * Created by Scott on 10/10/2016.
 */

// I tried implementing a different data structure. I believe there's an easier way to do something like this but i'm
// not sure what it is.

function questions () {
    // Import question data
    var taxonomy = [
        [[1, 2], [3], [4, 5, 6]],
        [[7, 8], [9, 10], [11], [12]]
    ];

/* intended output
[0][0][0] 1 iteration
[1][0][0] 2 iterations
[0][0][1] etc...
[1][0][1]
[0][1][0]
[1][1][0]
*/

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
            noun = 0,
            verb = 0,
            question_ids = [];

        for(i; i < numQuestions; i++) {
            (i % 2 == 0) ? noun++ : '';
            question_ids.push(taxonomy [0][noun][i]);

            for(; i < numQuestions;) {
                (i % 2 == 0) ? verb++ : '';
                question_ids.push(taxonomy[1][verb][i]);
            }
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