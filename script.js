class Writing {
    constructor(type){
        this.el = document.querySelector(type.el);
        this.text = this.el.innerHTML
        this.fullText = ""
        this.typing()
    }
    typing(i = 0){
        this.fullText += this.text[i]
        this.el.innerHTML = this.fullText
        if (i < this.text.length -1) {
            i++
            setTimeout(() => {
                this.typing(i)
            }, 500);
        }
    }
}

const write = new Writing({
    el:".header__content h1"
})
