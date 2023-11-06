let showDegrees = false
let showNavigation = false
let heading = 0
let direction = ""
let heading2 = 0
let heading3 = 0
let direction2 = ""
input.onButtonPressed(Button.A, function () {
    showDegrees = !(showDegrees)
    showNavigation = false
})
input.onButtonPressed(Button.AB, function () {
    showDegrees = false
    showNavigation = false
})
input.onButtonPressed(Button.B, function () {
    showDegrees = false
    showNavigation = !(showNavigation)
})
basic.forever(function () {
    if (!(showDegrees) && !(showNavigation)) {
        heading = input.compassHeading()
        direction = "N"
        if (heading < 22.5 || heading >= 337.5) {
            direction = "N"
        } else if (heading >= 22.5 && heading < 67.5) {
            direction = "NE"
        } else if (heading >= 67.5 && heading < 112.5) {
            direction = "E"
        } else if (heading >= 112.5 && heading < 157.5) {
            direction = "SE"
        } else if (heading >= 157.5 && heading < 202.5) {
            direction = "S"
        } else if (heading >= 202.5 && heading < 247.5) {
            direction = "SW"
        } else if (heading >= 247.5 && heading < 292.5) {
            direction = "W"
        } else {
            direction = "NW"
        }
        basic.showString(direction)
    } else if (showDegrees) {
        heading2 = input.compassHeading()
        basic.showNumber(heading2)
    } else if (showNavigation) {
        heading3 = input.compassHeading()
        direction2 = "N"
        if (heading3 < 22.5 || heading3 >= 337.5) {
            direction2 = "N"
        } else if (heading3 >= 22.5 && heading3 < 67.5) {
            direction2 = "NE"
        } else if (heading3 >= 67.5 && heading3 < 112.5) {
            direction2 = "E"
        } else if (heading3 >= 112.5 && heading3 < 157.5) {
            direction2 = "SE"
        } else if (heading3 >= 157.5 && heading3 < 202.5) {
            direction2 = "S"
        } else if (heading3 >= 202.5 && heading3 < 247.5) {
            direction2 = "SW"
        } else if (heading3 >= 247.5 && heading3 < 292.5) {
            direction2 = "W"
        } else {
            direction2 = "NW"
        }
        basic.showString(direction2)
    }
    basic.pause(300)
})
