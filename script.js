const textArea = document.getElementById('textArea');
const buttons = document.getElementsByClassName('option-button');

textArea.focus();

for (let button of buttons) {
  button.addEventListener('click', () => {
    const action = button.dataset['action'];

    if (action === 'createlink') {
      const link = prompt('Digite o link: ', 'https:\/\/');
      document.execCommand(action, false, link);
    } else {
      document.execCommand(action, false, null);

      if (button.classList.length === 1) {
        button.classList += ' clicked-option-button';
      } else {
        button.classList = ' option-button';
      }
    }

    textArea.focus();
  });
}