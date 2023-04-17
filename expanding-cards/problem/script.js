const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', (event) => {
        const activePanel = document.querySelector('.panel.active')
        activePanel.classList.remove('active');
        event.currentTarget.classList.add('active');
    })
})