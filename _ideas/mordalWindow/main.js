'use strict';

{
    const open = document.getElementById('modal-open');
    const m_container = document.getElementById('modal-container');
    const m_bg = document.getElementById('modal-bg');
    const close = document.getElementById('modal-close');

    open.addEventListener('click', () => {
        m_container.classList.add('active');
        m_bg.classList.add('active');
    });

    close.addEventListener('click', () => {
        m_container.classList.remove('active');
        m_bg.classList.remove('active');
    });
    m_bg.addEventListener('click', () => {
        m_container.classList.remove('active');
        m_bg.classList.remove('active');
    });
}