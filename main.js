keyword.oninput = (e)=> {
    if (keyword.value) {
        suggestion.classList.add('active')
    } else {
        suggestion.classList.remove('active')
    }
}