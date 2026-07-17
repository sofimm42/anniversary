const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach(card => {

    card.addEventListener("click", () => {

        if (!card.classList.contains("flipped")) {

            polaroids.forEach(other => {
                other.classList.remove("flipped");
            });

            card.classList.add("flipped");

        } else {

            card.classList.remove("flipped");

        }

    });

});

// Match the back height to the front height
window.addEventListener("load", () => {

    document.querySelectorAll(".polaroid").forEach(card => {

        const front = card.querySelector(".polaroid-front");
        const back = card.querySelector(".polaroid-back");
        const inner = card.querySelector(".polaroid-inner");

        const height = front.offsetHeight;

        inner.style.height = `${height}px`;
        back.style.height = `${height}px`;

    });

});

const counter = document.getElementById("love-counter");

if (counter) {

    const anniversary = new Date(2023, 7, 26); // August = 7

    function updateCounter() {

        const today = new Date();

        let years = today.getFullYear() - anniversary.getFullYear();
        let months = today.getMonth() - anniversary.getMonth();
        let days = today.getDate() - anniversary.getDate();

        if (days < 0) {
            months--;

            const previousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        counter.innerHTML =
            `${years} Year${years !== 1 ? "s" : ""}<br>
             ${months} Month${months !== 1 ? "s" : ""}<br>
             ${days} Day${days !== 1 ? "s" : ""}`;
    }

    updateCounter();
}
function updateAnniversary() {

    const start = new Date("2023-08-26");
    const today = new Date();


    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();


    if (days < 0) {

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;
        months += 12;

    }


    const text =
    `♡ ${years} years ${months} months ${days} days of loving you ♡ ✿ since August 26, 2023 ✿ ♡ forever & always ♡`;


    const counter = document.getElementById("anniversary-counter");
    const copy = document.getElementById("anniversary-counter-copy");


    if (counter && copy) {
        counter.textContent = text;
        copy.textContent = text;
    }

}


updateAnniversary();