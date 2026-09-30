# Decisions

One short entry per significant decision. Gameplay departures from the reference answers in GOAL §5
are in `DESIGN.md` §9, each with its reason and how it would be shown wrong.

## 2026-09-30 · The look is proposed, not approved

- **Context.** GOAL §0: the owner approves the look as images before anything is built.
- **Choice.** "Chalkline" v1: 14 images in `design/` with their source. Status: **awaiting owner
  approval.** The approval, its date and its commit will be recorded here.
- **History.** v0 was reviewed the same day. The owner kept its information architecture and
  asked for more game identity (pageantry and team identity), learning from patterns in the
  earlier Forge Field design and the reference games without copying anything. v1 is that
  revision.
- **Cost of reversing.** Nothing is built on it yet.

## 2026-09-30 · Where the identity comes from: patterns, not copies

- **Context.** v0 kept club colours "in their places" and read as a well-organised tool, not a
  game. The owner pointed at the earlier project's Forge Field design as having more pageantry and
  team identity, with the instruction to take patterns only.
- **Patterns taken, and where they are seen.**
  - *The club carries through the whole product* (Forge Field; Football Manager and OOTP club
    skins). Here: the rail wears your club's deep colour and helmet, and its stripe pattern sits
    under every header.
  - *Registers of drama* (Forge Field; Madden and FM match days). Here: the office, gameday, and a
    moment.
  - *The helmet is the team* (Retro Bowl, College Football, Madden). Here: a generated helmet on
    every team reference.
  - *Stadium pageantry with a mechanical bite* (College Football's home-field and traditions).
    Here: end zones, the midfield mark, the crowd plate, and traditions that change a number.
  - *A reserved "earned" treatment* (Forge Field). Here: banners in the rafters, in the club's own
    colours.
  - *Named people carry the voice* (Forge Field, FM). Kept from v0.
- **Deliberately not taken from Forge Field.** Its fonts, colour values, hue-derived grounds, gold,
  ember accent, ghost marks, scanlines, glass plates and its no-icon rule. The information
  architecture is v0's, which the owner preferred.
- **Wrong if.** The owner or testers still find the screens generic, or the identity costs
  legibility (a contrast or AX5 check fails).

## 2026-09-30 · Dark appearance only

- **Context.** A game needs one well-verified palette more than two half-verified ones.
- **Choice.** A single dark palette. The field, the marks and the yellow decision accent read best
  on a dark ground. Increase Contrast swaps the secondary text tokens for chalk.
- **Wrong if.** Testers or the owner find it hard to read in daylight, or accessibility feedback
  asks for a light mode.
- **Cost of reversing.** Medium. Colours are tokens in one place, so a light set is a token swap
  plus a contrast pass on every pair.

## 2026-09-30 · System text, bundled display and wordmark faces

- **Choice.** Body text uses SF Pro, the system font, so Dynamic Type behaves natively. Numbers
  that matter, screen titles and caps labels use Barlow Condensed. Club wordmarks, jersey numbers
  and end zones use one of three generated wordmark faces: Graduate ("varsity"), Alfa Slab One
  ("slab") and Big Shoulders Display ("block"). All four ship in the app under the SIL Open Font
  License and scale relative to a text style.
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
