let leon, canvas, ctx;

const sw = 800;
const sh = 100;
const pixelRatio = 2;

function init() {
    canvas = document.createElement('canvas');
    document.getElementById("canvas").appendChild(canvas);
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        text: 'classy',
        color: ['#e88d67'],
        size: 100,
        weight: 600
    });

    let i, total = leon.drawing.length;
    for (i = 0; i < total; i++) {
        TweenMax.fromTo(leon.drawing[i], 1.6, {
            value: 0
        }, {
            delay: i * 0.25,
            value: 1,
            ease: Circ.easeOut
        });
    }

    requestAnimationFrame(animate);
}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.draw(ctx);
}

init();