let angle = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(200)
basic.forever(function () {
    angle = input.acceleration(Dimension.Z)
    if (angle < 200) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (angle < 500) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (angle < 800) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (angle < 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
