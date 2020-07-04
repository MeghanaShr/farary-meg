namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true, effects.bubbles)
})
let fefe = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. . f f f f f e e e e e f . f f 
. . f d b f e e f f e e f . e f 
. f f d d f e f f e e e f . e f 
. f f f f f f e b b f e f f e f 
. f d d f e e e d d b e f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
controller.moveSprite(fefe)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002050505050505050505050505050505030505050505050505050505050505050305050505050303030305050503030503050505050303050503050503030303030305050503050505030505030305030503030303030505050305050503050305050505050505050303050505030503050505050505050303050505050305030505050505050503050505030303050304050505050303030505030305050503030503030303050505050303050505030303050303050505050505030505050305030503030303030305030305050303050305050505050503030305050303050503050505030305050505050303050505030303030303030303030303050505`,
            img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 . . . . 2 2 2 . . 2 
. 2 2 2 2 . . 2 2 . 2 2 . . . . 
. . 2 2 2 . 2 2 2 . 2 2 . . 2 . 
2 . . . . . 2 2 2 . 2 2 2 . 2 . 
2 2 2 2 2 2 2 2 . . 2 2 2 . 2 . 
2 2 2 2 2 2 2 . . 2 2 2 2 . 2 . 
2 2 2 2 2 2 2 . 2 2 2 . . . 2 . 
. 2 2 2 2 . . . 2 2 . . 2 2 2 . 
. 2 . . . . 2 2 2 2 . . 2 2 2 . 
. . 2 . . 2 2 2 2 2 2 . 2 2 2 . 
2 . 2 . . . . . . 2 . . 2 2 . . 
2 . 2 2 2 2 2 2 . . . 2 2 . . 2 
2 . 2 2 2 . . 2 2 2 2 2 . . 2 2 
2 . . . . . . . . . . . . 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles29,sprites.builtin.forestTiles22,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(fefe, sprites.builtin.forestTiles22)
scene.cameraFollowSprite(fefe)
