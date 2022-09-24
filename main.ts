input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S5, 270)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(200)
    SuperBit.Servo2(SuperBit.enServo.S5, 0)
})
basic.showIcon(IconNames.Heart)
SuperBit.Servo2(SuperBit.enServo.S5, 0)
