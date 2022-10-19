export const alertError = {
    element : document.querySelector(`.alert-error`),

    open() {
        this.element.classList.add(`open`)
    },
    close() {
        this.element.classList.remove(`open`)
    }
}