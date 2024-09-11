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

   // calc strength
   const strength = calculatePasswordStrength(password);
   const strengthElement = document.getElementById('password-strength');

   // update strength
   strengthElement.textContent = `Password Strength: ${strength}`;
   
   // colour apply based on strength
   if (strength === 'Strong') {
       strengthElement.style.color = 'green';
   } else if (strength === 'Moderate') {
       strengthElement.style.color = 'yellow';
   } else {
       strengthElement.style.color = 'red';
   }
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