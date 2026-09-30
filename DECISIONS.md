# Decisions

One short entry per significant decision. Gameplay departures from the reference answers in GOAL §5
are in `DESIGN.md` §9, each with its reason and how it would be shown wrong.

## 2026-09-30 · The look is proposed, not approved

- **Context.** GOAL §0: the owner approves the look as images before anything is built.
- **Choice.** "Chalkline" v0: 13 images in `design/` with their source. Status: **awaiting owner
  approval.** The approval, its date and its commit will be recorded here.
- **Cost of reversing.** Nothing is built on it yet.

## 2026-09-30 · Dark appearance only

- **Context.** A game needs one well-verified palette more than two half-verified ones.
- **Choice.** A single dark palette. The field, the marks and the yellow decision accent read best
  on a dark ground. Increase Contrast swaps the secondary text tokens for chalk.
- **Wrong if.** Testers or the owner find it hard to read in daylight, or accessibility feedback
  asks for a light mode.
- **Cost of reversing.** Medium. Colours are tokens in one place, so a light set is a token swap
  plus a contrast pass on every pair.

## 2026-09-30 · System text, bundled display face

- **Choice.** Body text uses SF Pro, the system font, so Dynamic Type behaves natively. Numbers
  that matter, screen titles and caps labels use Barlow Condensed (SIL Open Font License), which
  ships in the app and scales relative to a text style.
- **Why.** Condensed numerals fit dense landscape screens and look like football, not like a
  dashboard. Bundling a font file is an asset, not a runtime code dependency.
- **Wrong if.** The display face loses legibility at small sizes or at AX5.
- **Cost of reversing.** Low: one font token.

## 2026-09-30 · US English on screen

- **Choice.** Player-facing copy uses US English ("offense", "program"), because the sport and its
  vocabulary are American. Documents keep the owner's spelling.

## 2026-09-30 · Accessibility sizes reflow to one column

- **Choice.** At accessibility text sizes a screen becomes one scrolling column in the same reading
  order. The rail keeps its icons and shows each label large on a long press (Large Content
  Viewer), and Continue moves to the end of the column. A call-in lists its options first; the
  reason, what each option tries and risks, the buttons and the field follow.
- **Why.** At AX5 body text is 53 pt on a 372 pt-tall landscape screen; nothing fits side by side,
  and clipping would lose information.
- **Wrong if.** A VoiceOver or AX5 pass finds a decision whose key facts need more than one scroll
  to reach.

## 2026-09-30 · Match field geometry

- **Choice.** The field is drawn at its true length and 88% of its true width, so a scorebug above
  and a caption below fit in 372 pt. During a call-in the panel covers the half of the field away
  from the ball; the camera never pans.
- **Wrong if.** Players lose track of the situation during call-ins, or the compression reads as
  wrong on a device.
