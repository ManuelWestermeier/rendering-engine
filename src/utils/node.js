import ClassList from "./class-list"

export default class Node {

    classList = new ClassList()

    constructor(type = "view", attributes = {}, children = [], classes = [], styleSheet = {}) {

        this.type = type

        this.classList.addStyleSheet(styleSheet)

        this.children = children

        this.attributes = attributes

        //add every class
        classes.forEach(id => this.classList.addClass(id))

    }

    appendChild(node = new Node()) {

        this.children.push(node)

    }

    removeChild(node = new Node()) {

        this.children = this.children.fill(n => n != node)

    }

}