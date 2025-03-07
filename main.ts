RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    Num += 0 - 50
})
RotaryEncoder.onPressEvent(function () {
    Num = 150
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    Num += 0 + 50
})
let Num = 0
Num = 150
RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0)
loops.everyInterval(500, function () {
    if (Num <= 0) {
        Num = 50
    }
    music.setVolume(Num)
    basic.showNumber(Num)
    music.play(music.stringPlayable("F G A B C D F F ", 120), music.PlaybackMode.UntilDone)
})
