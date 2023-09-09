function generateRandomPassword(length, useLowercase, useUppercase, useDigits, useSpecialChars) {
  let characters = '';
  if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useDigits) characters += '0123456789';
  if (useSpecialChars) characters += '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

function generatePassword() {
  const passwordLength = parseInt(document.getElementById('passwordLength').value);
  if (isNaN(passwordLength) || passwordLength < 6 || passwordLength > 30) {
    alert('Please enter a valid password length between 6 and 30.');
    return;
  }

  const useLowercase = document.getElementById('lowercaseCheckbox').checked;
  const useUppercase = document.getElementById('uppercaseCheckbox').checked;
  const useDigits = document.getElementById('digitsCheckbox').checked;
  const useSpecialChars = document.getElementById('specialCharsCheckbox').checked;

  if (!useLowercase && !useUppercase && !useDigits && !useSpecialChars) {
    alert('Please select at least one character type.');
    return;
  }
  
  const randomPassword = generateRandomPassword(passwordLength, useLowercase, useUppercase, useDigits, useSpecialChars);
  document.getElementById('generatedPassword').textContent = randomPassword;
}

document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});

function copyPassword() {
  const generatedPassword = document.getElementById('generatedPassword').textContent;
  if (generatedPassword) {
    const textArea = document.createElement('textarea');
    textArea.value = generatedPassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Password copied to clipboard!');
  }
}