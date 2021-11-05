namespace SpriteKind {
    export const Rocket = SpriteKind.create()
    export const store = SpriteKind.create()
    export const npc = SpriteKind.create()
}
function rocketMove () {
    controller.moveSprite(RollingStone, 100, 100)
    RollingStone.setStayInScreen(false)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    RollingStone = sprites.create(assets.image`Rocket`, SpriteKind.Rocket)
    RollingStone.setPosition(78, 110)
})
function tostore () {
    stones = sprites.create(assets.image`StoneFam`, SpriteKind.Player)
    stones.setPosition(121, 105)
    stones.follow(DDan)
    pause(2000)
}
function InDDan () {
    scene.setBackgroundImage(assets.image`DDans`)
    RollingStone.destroy()
    stones.destroy()
    RollingStone.destroy()
    DDan.destroy()
    dans = sprites.create(assets.image`dan`, SpriteKind.npc)
    dans.setPosition(102, 105)
    dans.sayText("I'm Dealer Dan!", 1000, false)
    pause(1000)
    dans.sayText("I'd be happy to sell you that ship!", 1000, false)
    pause(2000)
    dans.destroy()
}
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
let dans: Sprite = null
let DDan: Sprite = null
let stones: Sprite = null
let RollingStone: Sprite = null
moonscape()
tostore()
InDDan()
moonscape()
forever(function () {
    if (10 > RollingStone.y) {
        RollingStone.destroy()
    }
})
