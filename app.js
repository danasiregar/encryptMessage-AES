const chatBox1 = document.getElementById("chatBox1");
const chatBox2 = document.getElementById("chatBox2");
const messageInput1 = document.getElementById("messageInput1");
const messageInput2 = document.getElementById("messageInput2");
const isiPesan = document.getElementById("isi_pesan");
const hasilEnkripsi = document.getElementById("hasil_enkripsi");
const key = "keamananCyber_12";

function displayMessage1(encryptedMessage, sender) {
  let message = decryptMessage(key, encryptedMessage);
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = `${sender}: ${message}`;
  chatBox1.appendChild(messageElement);
  chatBox1.scrollTop = chatBox1.scrollHeight;
}
function displayMessage2(encryptedMessage, sender) {
  let message = decryptMessage(key, encryptedMessage);
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = `${sender}: ${message}`;
  chatBox2.appendChild(messageElement);
  chatBox2.scrollTop = chatBox2.scrollHeight;
}

async function sendMessage1() {
  const message = messageInput1.value.trim();
  if (message !== "") {
    let encryptedMessage = encryptMessage(key, message);
    isiPesan.innerHTML = message;
    hasilEnkripsi.innerHTML = encryptedMessage;
    messageInput1.value = "";
    displayMessage1(encryptedMessage, "You");
    await sleep(1000);
    displayMessage2(encryptedMessage, "Him");
  }
}
async function sendMessage2() {
  const message = messageInput2.value.trim();
  if (message !== "") {
    let encryptedMessage = encryptMessage(key, message);
    isiPesan.innerHTML = message;
    hasilEnkripsi.innerHTML = encryptedMessage;
    messageInput2.value = "";
    displayMessage2(encryptedMessage, "You");
    await sleep(1000);
    displayMessage1(encryptedMessage, "Him");
  }
}

// Fungsi untuk mengambil input dari keyboard
messageInput1.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sendMessage1();
  }
});
messageInput2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sendMessage2();
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
