document.getElementById('generate-btn').addEventListener('click', function() {
    const letters = parseInt(document.getElementById('letters').value) || 0;
    const symbols = parseInt(document.getElementById('symbols').value) || 0;
    const numbers = parseInt(document.getElementById('numbers').value) || 0;

    const lettersArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const symbolsArray = '!#$%&()*+'.split('');
    const numbersArray = '0123456789'.split('');

    let passwordList = [];

    for (let i = 0; i < letters; i++) {
        passwordList.push(lettersArray[Math.floor(Math.random() * lettersArray.length)]);
    }

    for (let i = 0; i < symbols; i++) {
        passwordList.push(symbolsArray[Math.floor(Math.random() * symbolsArray.length)]);
    }

    for (let i = 0; i < numbers; i++) {
        passwordList.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
    }

    passwordList.sort(() => Math.random() - 0.5);

    const password = passwordList.join('');
    document.getElementById('password-output').textContent = password;

    // Calculate password strength
    const strength = calculatePasswordStrength(password);
    document.getElementById('password-strength').textContent = `Password Strength: ${strength}`;
});

function calculatePasswordStrength(password) {
    let strength = 'Weak';
    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            strength = 'Strong';
        } else if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
            strength = 'Moderate';
        }
    }
    return strength;
}
