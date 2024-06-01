export var defaultDefaultStyle = {
    margin: [5, 5, 5, 5],
    padding: [5, 5, 5, 5],
    width: 0,
    height: 0,
    background: "white",
    color: "black"
}

export default class ClassList {
    defaultStyle = {}
    style = { ...this.defaultStyle }
    classes = []
    styleSheet = {}

    constructor(styleSheet = {}, defaultStyle = defaultDefaultStyle) {
        this.addStyleSheet(styleSheet)
        this.setDefaultStyle(defaultStyle)
        this.addClass("*")
    }

    addClass(id) {
        this.classes.push(id)
        this.style = {
            ...this.style,
            ...(this.styleSheet[id] || {})
        }
    }

    removeClass(id) {
        this.classes = this.classes.filter(it => it != id)
        this.style = { ...this.defaultStyle }
        this.classes.forEach(id => {
            this.style = {
                ...this.style,
                ...(this.styleSheet[id] || {})
            }
        })
    }

    addStyleSheet(newStyleSheet = {}) {
        this.styleSheet = {
            ...this.styleSheet,
            ...newStyleSheet
        }
    }

    setDefaultStyle(newDefaultStyle) {
        this.defaultStyle = newDefaultStyle
    }
}