```javascript
function analyzeSentiment() {

    let text = document.getElementById("textInput").value
        .toLowerCase()
        .trim();

    let sentiment = document.getElementById("sentiment");
    let scoreText = document.getElementById("score");

    if (text === "") {
        sentiment.innerHTML = "Please enter some text.";
        scoreText.innerHTML = "";
        return;
    }

    // Positive and negative words
    let positiveWords = [
        "good",
        "great",
        "excellent",
        "amazing",
        "awesome",
        "happy",
        "love",
        "like",
        "best",
        "wonderful",
        "fantastic",
        "nice",
        "perfect",
        "enjoy",
        "enjoyed",
        "beautiful",
        "success",
        "successfully"
    ];

    let negativeWords = [
        "bad",
        "terrible",
        "worst",
        "hate",
        "dislike",
        "sad",
        "angry",
        "poor",
        "awful",
        "horrible",
        "boring",
        "problem",
        "failure",
        "fail",
        "disappointed",
        "disappointing"
    ];

    let words = text.split(/\s+/);

    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach(function(word) {

        // Remove punctuation
        word = word.replace(/[.,!?;:]/g, "");

        if (positiveWords.includes(word)) {
            positiveCount++;
        }

        if (negativeWords.includes(word)) {
            negativeCount++;
        }
    });

    let total = positiveCount + negativeCount;

    if (total === 0) {

        sentiment.innerHTML = "😐 Neutral Sentiment";
        scoreText.innerHTML = "No strong positive or negative words detected.";

    } else if (positiveCount > negativeCount) {

        let score = Math.round((positiveCount / total) * 100);

        sentiment.innerHTML = "😊 Positive Sentiment";
        scoreText.innerHTML =
            "Positive Score: " + score + "%";

    } else if (negativeCount > positiveCount) {

        let score = Math.round((negativeCount / total) * 100);

        sentiment.innerHTML = "😞 Negative Sentiment";
        scoreText.innerHTML =
            "Negative Score: " + score + "%";

    } else {

        sentiment.innerHTML = "😐 Neutral Sentiment";
        scoreText.innerHTML = "The text contains mixed feelings.";
    }
}


function clearText() {

    document.getElementById("textInput").value = "";

    document.getElementById("sentiment").innerHTML =
        "Enter some text to analyze.";

    document.getElementById("score").innerHTML = "";
}


function setExample(text) {

    document.getElementById("textInput").value = text;

    analyzeSentiment();
}
```
