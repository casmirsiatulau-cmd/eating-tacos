scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(ammy, effects.fire, 100)
})
let taco: Sprite = null
let ammy: Sprite = null
game.splash("'eat taco'", "Makecode Tutorial game'")
tiles.setCurrentTilemap(tilemap`level1`)
ammy = sprites.create(img`
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . f f f 3 3 f f f . . . . 
    . . . f f f 3 3 3 3 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . 3 3 3 2 2 2 2 2 2 3 3 3 . . 
    . . f 3 2 f f f f f f 2 3 f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 3 3 f b f e f f . 
    . f e e 4 1 f 3 3 f 1 4 e e f . 
    . . f e e d d 3 3 d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 3 f 2 2 3 3 2 2 f 3 e . . 
    . . 4 3 f 2 2 3 3 2 2 f 3 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ammy, 150, 0)
ammy.setPosition(80, 104)
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(500, function () {
    taco = sprites.create(img`
        ..............eeeeeee...........
        ............ee455662e2e.........
        ..........ee45556723e2688.......
        .........e46776677232e777668....
        ........e46745554772227776778...
        .......4448744444777766777678...
        ......4522e7777776777766676668..
        .....4523227766722e666eeeee888..
        ....455232e76672322e4555dddd48..
        ...44567777554623e455ddddddddd4.
        ...e66774554477e455dddd55554dd44
        ..e46777444677e55dd55555d55dddd4
        ..e5668677666e5dd555555555555dde
        .e45544e8776e5d555554555555555de
        .e554eeee66e5d5555d55555dddd54de
        .e55ee44fee5d5d555555d5d5dddddde
        e454eeeefe45d55555555555dd4ddde.
        e5e4eefffe5d55555555d5555dddde..
        e5ee4eeff45d555555555555dddde...
        e5eeeeffe5d55d555d5555d5ddde....
        e5ffefeee5d55545555555ddd4e.....
        e5ffffffe545555555d5d4ddee......
        e54efeff45d55d55555dddde........
        e5eeeffe5dd5555545dddee.........
        e4eeefff5d5555d55ddde...........
        e4efefff5d5d55555d4e............
        .e4efffe5d555555dee.............
        .e54eeee5d545dd4e...............
        ..e554ee5dddddee................
        ...ee5544dddee..................
        .....eeeeeee....................
        ................................
        `, SpriteKind.Food)
    taco.setPosition(randint(10, 145), 10)
    taco.setVelocity(0, 50)
})
