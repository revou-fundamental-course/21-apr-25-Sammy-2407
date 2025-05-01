
//  default  Celsius ke Fahrenheit
let isCelsiusToFahrenheit = true;

// Mengambil elemen yang dibutuhkan
const inputField = document.querySelector('input[name="convertion"]');
const resultField = document.getElementById("result-input");
const calcDetailField = document.getElementById("calculate-detail");
const buttons = document.querySelectorAll('.button');



// Fungsi konversi suhu

function convertTemperature() {
    const inputValue = parseFloat(inputField.value);

    // kalau tidak ada input
    if (isNaN(inputValue)) { 
        resultField.value = "There is no input, please enter an input!";
        calcDetailField.value = "";
        return;
    }
    // kalau ada input
    let result, detail;

    // celcius ke fahrenheit
    if (isCelsiusToFahrenheit) {
        result = (inputValue * 1.8) + 32;
        detail = `${inputValue}°C x 1.8 + 32 = ${result.toFixed(2)}°F`;
    } 
    // fahrenheit ke celcius
    else {
        result = (inputValue - 32) / 1.8;
        detail = `(${inputValue}°F - 32) ÷ 1.8 = ${result.toFixed(2)}°C`;
    }

    resultField.value = result.toFixed(2);
    calcDetailField.value = detail;
}

// reset

function resetFields() {
    inputField.value = "";
    resultField.value = "";
    calcDetailField.value = "";
}

// reverse

function reverseConversion() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

    document.querySelector('label[for="konfersi-input"]').innerHTML = 
        isCelsiusToFahrenheit ? 'Celcius (&deg;C):' : 'Fahrenheit (&deg;F):';
    document.querySelector('label[for="result-input"]').innerHTML = 
        isCelsiusToFahrenheit ? 'Fahrenheit (&deg;F):' : 'Celcius (&deg;C):';

    // placeholder input sesuai arah konversi
    inputField.placeholder = isCelsiusToFahrenheit ? "Celcius" : "Fahrenheit";

    resetFields();
}

// tombol convert
buttons[0].addEventListener('click', function (e) {
    e.preventDefault();
    convertTemperature();
});

// tombol reset
buttons[1].addEventListener('click', function (e) {
    e.preventDefault();
    resetFields();
});

// tombol reverse
buttons[2].addEventListener('click', function (e) {
    e.preventDefault();
    reverseConversion();
});


// Ambil elemen tombol toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Cek apakah dark mode sudah aktif
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Fungsi untuk mengaktifkan dan menonaktifkan dark mode
function toggleDarkMode() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    }
}

// Set mode berdasarkan preferensi pengguna yang disimpan di localStorage
if (isDarkMode) {
    document.body.classList.add("dark");
}

// Event listener untuk tombol toggle dark mode
darkModeToggle.addEventListener("click", toggleDarkMode);