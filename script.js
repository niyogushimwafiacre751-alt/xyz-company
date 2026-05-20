
function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let rate = 1462; // example rate
    let result = 0;

    if (from === "USD" && to === "RWF") {
        result = amount * rate;
    } else if (from === "RWF" && to === "USD") {
        result = amount / rate;
    } else {
        result = amount;
    }

    document.getElementById("result").innerText =
        "Result: " + result.toLocaleString();
}
