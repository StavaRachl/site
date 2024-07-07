const discrodBtn = document.getElementById('copyBtnDiscord')

discrodBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('SALAT#4889')
    alert('Дискорд скопирован в буфер обмена.')
})