input.onButtonPressed(Button.A, function () {
    coin1 = randint(0, 1)
    coin2 = randint(0, 1)
    if (coin1 == coin2) {
        basic.showString("P1")
        basic.showNumber(player1_points)
    } else {
        basic.showString("P2")
        basic.showNumber(player2_points)
    }
})
let coin2 = 0
let coin1 = 0
let player2_points = 0
let player1_points = 0
player1_points = 0
player2_points = 0
basic.forever(function () {
	
})
