const rating__form = document.getElementById("rating__form")
const rating_container = document.getElementById("rating__container")
const rating__item = document.querySelectorAll('.rating__item')
const rating__btn = document.getElementById("rating__btn")
const rbs = document.querySelectorAll('input[type="radio"]')
const thankyou__container = document.getElementById("thankyou__container")
const rating__result = document.getElementById("rating__result")

const ri_selected = document.getElementsByClassName("rating__item selected")

rating__btn.addEventListener('click', function(){
    if (ri_selected.length > 0) {
        rating__container.style.display = "none"
        thankyou__container.style.display = "block"
        rating__result.textContent = `You selected ${rating__form.rating.value} out of 5`
    }
})

/* Give each and every 'rating__item' function to click */
for (let i = 0; i < rating__item.length; i++) {
    rating__item[i].addEventListener('click', function(){
        /* If the 'rating__item selected' class name more than 0 */
        if (ri_selected.length > 0) {
            /* Remove the 'selected' class from the previous 'rating__item' that has been selected */
            ri_selected[0].style.color = "hsl(217, 12%, 63%)"
            ri_selected[0].style.background = "hsl(213, 15%, 25%)"
            ri_selected[0].classList.remove("selected")

            /* Add 'selected' class to the current 'rating__item' */
            rating__item[i].classList.add("selected")
            rating__item[i].style.color = "hsl(0, 0%, 100%)"
            rating__item[i].style.background = "hsl(217, 12%, 63%)"
            rbs[i].checked = true;

        /* Else add 'selected' class to the 'rating__item' */
        } else {
            rating__item[i].classList.add("selected")
            rating__item[i].style.color = "hsl(0, 0%, 100%)"
            rating__item[i].style.background = "hsl(217, 12%, 63%)"
            rbs[i].checked = true;
        }
    })
}
