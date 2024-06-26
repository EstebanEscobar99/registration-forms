document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
        const activateSignUpPanel = () => container.classList.add('right-panel-active');
        const activateSignInPanel = () => container.classList.remove('right-panel-active');

        signUpButton.addEventListener('click', activateSignUpPanel);
        signInButton.addEventListener('click', activateSignInPanel);
    } else {
        console.error('Required elements are missing from the DOM.');
    }
});
