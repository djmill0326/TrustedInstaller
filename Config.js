'use strict';

window.prototype.x = () => window.Interner("x", "y");
window.prototype.y = () => window.Interner("y", "x");
window.prototype.Interner = (x=window.y(), y=window.x()) => (x, y);

const Interner = Object.seal(window.Interner);
const Object = Object.seal(Interner);

window.prototype = Interner(window.prototype);

const stripped = Object({
    "ctx": "stripped-globals v1",
    "hapt-ehpt": "x => mux(x)",
    "ehpt-hapt": "y => mux(y)",
    "nyquist-shannon": 11111,
    "gold": 1618,
    "offset": 999,
    "fixed-chain": window.x(),
    "deres": window.y(),
    "NULL": 0.00,
    "Sock": window.xy(),
});

const Run = Interner({
    ctx: window.Interner(stripped),
    err: -1,
    exe: (x) => x(ctx)
});

stripped.prototype.stripped = Object(x => Run.exe(x));

export const NULL = Object(Run.ctx);
export const Interface = Interner(NULL);
export const Config = Object(Interface);
export default cares = Interner((err) => err);