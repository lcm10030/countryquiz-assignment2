let currentAnswer = "";
let correctCount = 0;
let wrongCount = 0;

const countries = [
    {
        name: "Colombia",
        fact: "This country is the world's largest producer of emeralds and is famous for coffee."
    },
    {
        name: "Indonesia",
        fact: "This country has over 17,000 islands and is home to many volcanoes."
    },
    {
        name: "South Africa",
        fact: "This country has 11 official languages and is home to Table Mountain."
    },
    {
        name: "Japan",
        fact: "This island nation lies along the Pacific Ring of Fire and experiences frequent seismic activity."
    },
    {
        name: "Vietnam",
        fact: "This S-shaped country borders the South China Sea and was reunified in 1975 after a prolonged conflict."
    },
    {
        name: "Egypt",
        fact: "This country controls a major canal connecting the Mediterranean Sea to the Red Sea."
    },
    {
        name: "Chile",
        fact: "This country contains the driest non-polar desert in the world and stretches over 4,000 km north to south."
    },
    {
        name: "Italy",
        fact: "This country surrounds two independent microstates and was the center of a vast ancient empire."
    },
    {
        name: "Mexico",
        fact: "This country is home to one of the world's largest pyramids by volume, located in Cholula."
    }
];

function startGame() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("gameControls").style.display = "block";

    correctCount = 0;
    wrongCount = 0;
    document.getElementById("correctCount").innerText = 0;
    document.getElementById("wrongCount").innerText = 0;

    nextQuestion();
}

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const selected = countries[randomIndex];

    currentAnswer = selected.name;
    currentDisplayName = selected.display || selected.name;

    document.getElementById("fact").innerText = selected.fact;
    document.getElementById("result").innerText = "";

    answered = false;
}


function guess(country) {
    if (!currentAnswer) {
        document.getElementById("result").innerText = "Click Start Game first!";
        return;
    }

    if (answered) return; // prevent multiple clicks

    if (country === currentAnswer) {
        correctCount++;

        document.getElementById("correctCount").innerText = correctCount;

        document.getElementById("result").innerText =
            "✅ Correct! The answer was " + currentDisplayName;

        answered = true;
        currentAnswer = "";
    } else {
        wrongCount++;
        document.getElementById("wrongCount").innerText = wrongCount;

        document.getElementById("result").innerText = "❌ Wrong! Try again.";
    }
}

document.getElementById("wrongCount").innerText = wrongCount;

document.getElementById("result").innerText = "❌ Wrong! Try again.";


function restartGame() {
    currentAnswer = "";
    correctCount = 0;
    wrongCount = 0;
    answered = false;

    document.getElementById("fact").innerText = 'Click "Start Game" to begin!';
    document.getElementById("result").innerText = "";

    document.getElementById("correctCount").innerText = 0;
    document.getElementById("wrongCount").innerText = 0;

    document.getElementById("startBtn").style.display = "inline-block";
    document.getElementById("gameControls").style.display = "none";
}
