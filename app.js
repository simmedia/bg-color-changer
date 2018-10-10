let input = document.getElementById("input");

input.addEventListener( 'keyup', () => {
    let value = input.value;
    document.documentElement.style.setProperty('--bg', value);
})