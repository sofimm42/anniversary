document.addEventListener("DOMContentLoaded", () => {

    // ------------------------
    // Flip Polaroids
    // ------------------------

    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(card => {

        card.addEventListener("click", () => {

            if (!card.classList.contains("flipped")) {

                polaroids.forEach(other =>
                    other.classList.remove("flipped")
                );

                card.classList.add("flipped");

            } else {

                card.classList.remove("flipped");

            }

        });

    });

    // ------------------------
    // Resize Polaroids
    // ------------------------

    function resizePolaroids() {

        document.querySelectorAll(".polaroid").forEach(card => {

            const front = card.querySelector(".polaroid-front");
            const back = card.querySelector(".polaroid-back");
            const inner = card.querySelector(".polaroid-inner");

            if (!front || !back || !inner) return;

            const height = front.getBoundingClientRect().height;

            inner.style.height = height + "px";
            back.style.height = height + "px";

        });

    }

    // Run immediately
    resizePolaroids();

    // Run again after images finish loading
    window.addEventListener("load", resizePolaroids);
    window.addEventListener("resize", resizePolaroids);
    window.addEventListener("orientationchange", resizePolaroids);

    document.querySelectorAll(".polaroid img").forEach(img => {

        if (img.complete) {
            resizePolaroids();
        } else {
            img.addEventListener("load", resizePolaroids);
        }

    });

    // ------------------------
    // Anniversary ticker
    // ------------------------

    function updateAnniversary() {

        const start = new Date(2023, 7, 26); // August 26, 2023
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

        if (counter) counter.textContent = text;
        if (copy) copy.textContent = text;

    }

    updateAnniversary();

    setInterval(updateAnniversary, 60000);

});