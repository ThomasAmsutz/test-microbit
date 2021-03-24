basic.forever(function () {
    if (150 < input.soundLevel()) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
