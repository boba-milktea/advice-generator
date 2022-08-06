const textSection = document.querySelector('section');
const adviceOutput = document.querySelector(".adviceText");
const idSpan = document.querySelector("span");
const dice = document.querySelector(".btn");

// ==========  Using fetch and no cache 

dice.addEventListener("click", async function getAdvice() {

    try {
        const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
            .then((res) => res.json());
        const advice = res.slip;
        showAdvice(advice);
    }
    catch (e) {
        console.log("error", e);
    }
}
);

// =========  Using axios 


// dice.addEventListener("click", async function getAdvice() {
//     const random = Math.floor(Math.random() * 200);
//     try {
//         const res = await axios.get(`https://api.adviceslip.com/advice/${random}`);
//         let advice = res.data.slip;
//         showAdvice(advice);
//         // console.log(advice);
//     }
//     catch (e) {
//         console.log("error", e)
//     }
// }
// );

const showAdvice = (advice) => {
    idSpan.innerText = advice.id;
    adviceOutput.textContent = `${String.fromCodePoint(0x201C)}${advice.advice}${String.fromCodePoint(0x201D)}`;
    adjustFontSize(adviceOutput);
}

function adjustFontSize(adviceOutput) {
    let adviceTextHeight = adviceOutput.offsetHeight;
    const textSectionHeight = textSection.offsetHeight;
    let styles = window.getComputedStyle(adviceOutput);
    let fontSize = parseInt(styles.getPropertyValue('font-size'));
    if (adviceTextHeight > (textSectionHeight)) {
        let scale = textSectionHeight / adviceTextHeight;
        adviceOutput.style.fontSize = `${fontSize * scale}px`;
    }
}
