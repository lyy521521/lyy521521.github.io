new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("WXT && LYY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第二个七夕...")
    .pause(3000)
	.delete(null, {
	    delay: 500,
	})
	.type("(其实第一个被某悦悦弄没了呢，哼唧唧)...")
	.pause(3000)
	.delete(null, {
	    delay: 200,
	})
	.type("下面有惊喜哦嘻嘻嘻...")
	.pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();