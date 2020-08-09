(function() {
    var questionIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15;
    var loadQuestionProcess = function() {
        console.log("test");
        for (var i = 0, ilen = questionIndexes.length; i < ilen; i++) {
            questionIndexes.push(questionIndexes.splice(Math.floor(Math.random() * 15), 1));
        };
    };
    // Check for document to be in ready-state
    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && 
        !document.documentElement.doScroll)
    ) {
        loadQuestionProcess();
    } else {
        document.addEventListener("DOMContentLoaded", loadQuestionProcess);
    }    
})();