import Node from "./node";

export default class Dom {
    styleSheet = {}
    root = new Node("main", {}, [], [], this.styleSheet)

    render(ctx = new CanvasRenderingContext2D()) {

    }
}