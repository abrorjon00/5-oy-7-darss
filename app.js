


// 3-api
document.getElementById("generateFact").addEventListener("click", async () => {
    try {
        const response = await fetch("http://numbersapi.com/random/trivia");
        const fact = await response.text();
        document.getElementById("fact").textContent = fact;
    } catch (error) {
        document.getElementById("fact").textContent = "Faktni olib bo'lmadi!";
    }
});

// 4-api
document.getElementById("convertCurrency").addEventListener("click", async () => {
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        document.getElementById("conversionResult").textContent = "Iltimos, miqdorni to'g'ri kiriting.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
        const data = await response.json();
        document.getElementById("conversionResult").textContent = 
            `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
    } catch (error) {
        document.getElementById("conversionResult").textContent = "Valyuta kursini olib bo'lmadi!";
    }
});

// 5-api
document.getElementById("generateBirthdayFact").addEventListener("click", async () => {
    const birthDate = document.getElementById("birthDate").value;

    if (!birthDate) {
        document.getElementById("birthdayFact").textContent = "Iltimos, sanani kiriting.";
        return;
    }

    const [year, month, day] = birthDate.split("-");
    try {
        const response = await fetch(`http://numbersapi.com/${month}/${day}/date`);
        const fact = await response.text();
        document.getElementById("birthdayFact").textContent = fact;
    } catch (error) {
        document.getElementById("birthdayFact").textContent = "Faktni olib bo'lmadi!";
    }
});