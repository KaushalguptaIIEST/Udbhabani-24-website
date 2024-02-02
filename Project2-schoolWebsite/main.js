// Hide/Show Faq questions answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelectorAll('faq_icon i');
        if(icon.classList === '<i class="bi bi-plus-square-fill"></i>'){
            icon.classList = '<i class="bi bi-dash-square-fill"></i>'
        } else{
            icon.classList = '<i class="bi bi-plus-square-fill"></i>'
        }
    })
})
