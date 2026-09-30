# Head Coach

An offline iPhone game: one coach, one save, a career that starts in college football and earns a
promotion to the pro league. You coach, never play: you prepare the team each week and make the
calls that swing the game, watched on a 2D field.

The project is at its first step: the look is proposed as images and waits for the owner's
approval. See `STATUS.md`.

| File | What it holds |
|---|---|
| `GOAL.md` | The goal, pillars and quality bars (the owner's) |
| `DESIGN.md` | The game as designed: the only gameplay authority |
| `DECISIONS.md` | Significant decisions and departures |
| `STATUS.md` | The honest state of the build |
| `design/` | The images of the game, their source and an index |

## Regenerating the design images

Needs Node and a Chromium that Playwright can find.

```
cd design/src && npm install && npm run render
```

Building and testing the app will be documented here once the package exists.
