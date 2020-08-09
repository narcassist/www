(function() {
    var questionIndex = 0;
    var questionYesCount = 0;
    var questionNoCount = 0;
    var questionIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    };
    var pad = function(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
    var loadQuestionProcess = function() {
        shuffle(questionIndexes);
        document.getElementById("buttonStartQuestions").addEventListener("click", nextQuestion);
        var yesButtons = document.getElementsByClassName("response-yes");
        for (var i = 0, ilen = yesButtons.length; i < ilen; i++) {
            yesButtons[i].addEventListener("click", yesAnswer);
        };
        var noButtons = document.getElementsByClassName("response-no");
        for (var j = 0, jlen = noButtons.length; j < jlen; j++) {
            noButtons[j].addEventListener("click", noAnswer);
        };
    };
    var yesAnswer = function() {
        questionYesCount++;
        animateCSS("#question" + pad(questionIndexes[questionIndex], 2), "fadeOut").then((message) => {
            document.getElementById("question" + pad(questionIndexes[questionIndex], 2)).classList.add('d-none');
            if (questionYesCount === 6) {
                document.getElementById("yesResponse").classList.remove('d-none');
                animateCSS("#yesResponse", "fadeIn").then((message) => {

                });                    
            } else {
                questionIndex++;
                nextQuestion(); 
            };           
        });
    };        
    var noAnswer = function() {
        questionNoCount++;
        animateCSS("#question" + pad(questionIndexes[questionIndex], 2), "fadeOut").then((message) => {
            document.getElementById("question" + pad(questionIndexes[questionIndex], 2)).classList.add('d-none');
            questionIndex++;
            nextQuestion();            
        });
    };        
    var nextQuestion = function() {
        if (questionIndex === 0) {
            animateCSS("#buttonStartQuestions", "fadeOut").then((message) => {
                document.getElementById("buttonStartQuestions").classList.add('d-none');
                document.getElementById("question" + pad(questionIndexes[questionIndex], 2)).classList.remove('d-none');
                animateCSS("#question" + pad(questionIndexes[questionIndex], 2), "fadeIn").then((message) => {

                });    
            });
        } else {
            document.getElementById("question" + pad(questionIndexes[questionIndex], 2)).classList.remove('d-none');
            animateCSS("#question" + pad(questionIndexes[questionIndex], 2), "fadeIn").then((message) => {

            });
        }
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
console.log("test");