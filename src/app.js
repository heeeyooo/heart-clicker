const $circle = document.querySelector("#heart-icon");
const $score = document.querySelector("#score");
const powerBtn = document.querySelector(".power-btn");

powerBtn.addEventListener("click", () => {
    document.querySelector(".loading").style.animation =
        "loadingAnimation 1s forwards";
    powerBtn.style.animation = "powerOn 0.5s 1.5s forwards";
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".wrapper").style.display = "flex";
    }, 3000);
});

function getScore() {
    return Number(localStorage.getItem("score")) ?? 0;
}

setScore(getScore());

function checkLevel() {
    if (getScore() >= 50) {
        $circle.setAttribute("class", "fa-solid fa-heart-pulse");
    }
    if (getScore() >= 100) {
        $circle.setAttribute("class", "fa-solid fa-heart");
    }
    if (getScore() >= 150) {
        $circle.style.color = "green";
    }
    if (getScore() >= 200) {
        $circle.style.color = "blue";
    }
    if (getScore() >= 250) {
        $circle.style.color = "pink";
    }
    if (getScore() >= 300) {
        $circle.style.color = "yellow";
    }
    if (getScore() >= 350) {
        $circle.style.color = "orange";
    }
    if (getScore() >= 400) {
        $circle.style.color = "gray";
    }
    if (getScore() >= 450) {
        $circle.style.color = "#f68fff";
        $circle.classList.add("gradient");
    }
}
checkLevel();

$circle.addEventListener("click", (event) => {
    const rect = event.target.getBoundingClientRect();
    $circle.style.transform = "scale(1.2)";

    setTimeout(() => {
        $circle.style.transform = "scale(1)";
    }, 100);

    const plusOne = document.createElement("div");
    plusOne.classList = "plus-one";
    plusOne.textContent = "+1";
    plusOne.style.left = `${event.clientX - rect.left}px`;
    plusOne.style.top = `${event.clientY - rect.top}px`;
    $circle.parentElement.appendChild(plusOne);

    addOne();

    setTimeout(() => {
        plusOne.remove();
    }, 2000);
});

function addOne() {
    setScore(getScore() + 1);
    checkLevel();
}

function setScore(score) {
    localStorage.setItem("score", score);
    $score.textContent = score;
}

function resetScore() {
    localStorage.clear();
    $score.textContent = 0;
    $circle.setAttribute("class", "fa-solid fa-heart-crack");
    $circle.style.color = "red";
}

const clearBtn = document.querySelector(".js-clear-btn");
clearBtn.addEventListener("click", () => {
    resetScore();
});
