window.prototype.x = "x";
window.prototype.y = "y";
window.prototype.Interner = (x, y) => (x, y);
window.prototype = Object.seal(window);

const stripped = Object.new({
    "ctx": "stripped-globals v1",
    "hapt-ehpt": "x => mux(x)",
    "ehpt-hapt": "x => Globals['hapt-ehpt'](x)",
    "nyquist-shannon": 11111,
    "gold": 1618,
    "offset": 999,
    "fixed-chain": window.x(),
    "deres": window.y(),
    "NULL": 0.00,
    "Sock": window.xy(),
});

const run = Object.seal({
    ctx: Object.seal(stripped),
    exe: (x) => x(ctx),
    err: 1,
    undefined: null
});

stripped.prototype.stripped = x => run.exe(x);

export const NULL = Object.seal(ctx);
export const Interface = Object.seal(NULL);
export const Config = stripped;
export const Run = run;
export default cares = Object.seal((err) => err);