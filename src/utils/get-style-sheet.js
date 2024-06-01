import { defaultDefaultStyle } from "./class-list"

function parseStyleSheet(text = "") {
    const out = {}

    const lines = text.split(/\n|\r\n/g)

    var currentClass = false

    lines.forEach((line) => {

        //comments
        if (line.startsWith("//"))
            return

        if (line.startsWith("#")) {
            //find the class and remove the first character
            currentClass = line.split("").filter((char, i) => i != 0).join("")
            return
        }

        //parse
        var [type, value] = line.split(/:/)

        //check if this is a real property
        if (!defaultDefaultStyle[type])
            return

        //check if the value is set
        if (!value)
            return

        //check if more than one is requestet
        if (defaultDefaultStyle[type] instanceof Array) {
            value = value.split(/,| ,| ,/g)
        }

        //set the styles to the current class or the global style
        const key = currentClass || "*"

        out[key] = {
            //add the current property
            ...((out[key]) || {}),
            [type]: value
        }

    })

    return out
}

export default async function getStyleSheet(url) {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            return new Error("res is not ok")
        }

        const resText = await res.text()

        return parseStyleSheet(resText)
    } catch (error) {
        return new Error(error)
    }
}