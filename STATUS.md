# Status

## Where the project is

Milestone 0, the look (GOAL §0). **Waiting for the owner to approve the images.** Nothing else is
built until then.

## What exists

- `GOAL.md`: the owner's goal prompt.
- `DESIGN.md` v0: what the coach does instead of pressing buttons, the week, both tiers, stakes,
  people, the world, and a table of every departure from the reference design.
- `DECISIONS.md`: decisions so far, including the pending approval of the look.
- `design/`: 13 screen images (plus full-scroll images for the two AX5 screens), their HTML
  source, and a one-page index.

## What is verified, and how

- Every image was rendered in this session from the committed source by headless Chromium
  (`design/src/render.mjs`), and each one was looked at after rendering. The render script fails
  if a page raises an error.
- Contrast ratios on the visual-language sheet are computed by the page itself from the token
  values with the WCAG formula; they are not typed in by hand.
- The numbers shared across images (score, record, job security, points spent, cap arithmetic)
  were checked against each other and against the rules in `DESIGN.md`.

## What is not built or verified

- No Swift code, package, app shell or CI exists yet. Nothing about the game has been compiled or
  run.
- The images are proposals. None has been checked on a device.

## Environment notes for the next session

- The container has no Swift toolchain, and the network policy blocks `download.swift.org`.
  Docker Hub is reachable: the official `swift:6.2-noble` image's layers can be downloaded and
  unpacked into a chroot, which gave a working Swift 6.2.4 for Linux. That can verify the headless
  simulation package. The app itself needs macOS CI.

## Next, once the look is approved

1. Record the approval in `DECISIONS.md`.
2. Write `ARCHITECTURE.md` v0.
3. Set up the package, the app shell and macOS CI running the fast suite.
4. Milestone 1: resolve one game headless with a seeded RNG, print the box score, and prove it
   identical across two processes.
