const dropdownBtns = document.querySelectorAll('.dropdown');
const dropdownLink = document.querySelectorAll('.dropdown__menu');

dropdownBtns.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
        e.preventDefault();

        const targetBtn = e.target;



        targetBtn.parentNode.childNodes[3].classList.remove('hide');
        targetBtn.parentNode.childNodes[3].classList.add('active-menu');
        console.log(targetBtn.parentNode.childNodes[3]);
    })

    btn.addEventListener('mouseleave', () => {
        dropdownLink.forEach(link => {
            link.classList.remove('active-menu');
            link.classList.add('hide');
        })
    })
})