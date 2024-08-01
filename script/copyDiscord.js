const discrodBtn = document.getElementById('copyBtnDiscord')

discrodBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('stavarachi_')
    alert('Дискорд скопирован в буфер обмена.')
})
