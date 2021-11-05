namespace SpriteKind {
    export const Rocket = SpriteKind.create()
    export const store = SpriteKind.create()
}
function rocketMove () {
    controller.moveSprite(RollingStone, 100, 100)
    RollingStone.setStayInScreen(false)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    RollingStone = sprites.create(assets.image`Rocket`, SpriteKind.Rocket)
    RollingStone.setPosition(78, 110)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rocketMove()
})
function moonscape () {
    scene.setBackgroundImage(assets.image`Moonscape`)
    DDan = sprites.create(assets.image`DealerDan`, SpriteKind.store)
    DDan.setPosition(41, 110)
    RollingStone = sprites.create(assets.image`Rocket`, SpriteKind.Rocket)
    RollingStone.setPosition(78, 110)
}
let DDan: Sprite = null
let RollingStone: Sprite = null
moonscape()
forever(function () {
    if (10 > RollingStone.y) {
        RollingStone.destroy()
    }
})
