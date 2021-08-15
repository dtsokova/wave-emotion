radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    radio.sendNumber(1)
})
radio.setGroup(60)
