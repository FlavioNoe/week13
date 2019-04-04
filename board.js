let aux = 0
aux = 0
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showNumber(0)

function increase() {
    aux = aux + 1;
    basic.showNumber(aux);

}

function decrease() {
    aux = aux - 1;
    basic.showNumber(aux);

}
basic.forever(function () {


    input.onButtonPressed(Button.B, function () {
        increase();
    })


    input.onButtonPressed(Button.A, function () {
        decrease();
    })
})
