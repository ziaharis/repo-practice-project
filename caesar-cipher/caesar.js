const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

document.getElementById('process-btn').addEventListener('click', function() {
    const direction = document.getElementById('direction').value.toLowerCase();
    const text = document.getElementById('text').value.toLowerCase();
    const shift = parseInt(document.getElementById('shift').value);

    if (direction !== 'encode' && direction !== 'decode') {
        alert('Please type "encode" to encrypt or "decode" to decrypt.');
        return;
    }

    function encrypt(originalText, shiftAmount) {
        let cipherText = "";
        for (let letter of originalText) {
            if (alphabet.includes(letter)) {
                let shiftedPosition = (alphabet.indexOf(letter) + shiftAmount) % alphabet.length;
                shiftedPosition = shiftedPosition < 0 ? alphabet.length + shiftedPosition : shiftedPosition;
                cipherText += alphabet[shiftedPosition];
            } else {
                cipherText += letter; // keep non alphabet stuff
            }
        }
        return cipherText;
    }

    function decrypt(originalText, shiftAmount) {
        return encrypt(originalText, -shiftAmount); // the inverse
    }

    const result = direction === 'encode' ? encrypt(text, shift) : decrypt(text, shift);
    document.getElementById('result-output').textContent = `Here is the ${direction}d result: ${result}`;
});
