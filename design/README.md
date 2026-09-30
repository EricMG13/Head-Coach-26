# Design images — for the owner's approval

Status: **v1, proposed, not yet approved.** Nothing else gets built until these are approved
(GOAL §0). v1 keeps v0's information architecture and adds game identity: every club brings its
own dress, match day is an event, and rare moments get the whole screen.

Every image shows the same save. **Coach Jordan Hale** takes the **Marlow State Lanterns** job in
the Tri-River Conference and gives his first press conference. It is then **Week 6 of 2026**, and the
week ends in a night game **at Sedalia A&M**. Images 03–09 and 11 follow that week in order: the
hub, the plan, the call on 4th and 2, the 27–24 win and its aftermath, recruiting, a player and
the depth chart, and job security afterwards. Image 10 is the same save seven seasons later, after
promotion, and it shows Okafor again. Every rule and number behind these images is in
`DESIGN.md`. An image never sets a fact.

Screens are iPhone 15 Pro class in landscape, 852 × 393 pt, rendered at 3x (2556 × 1179). The
Dynamic Island and the landscape safe areas (59 pt at each side, 21 pt at the bottom) are drawn in.

| Image | What it is for | The decision it hosts | Pillar |
|---|---|---|---|
| [01 Job offers](01-job-offers.png) | Three programmes as posters: helmet, wordmark, venue, last title. Below each, the AD's expectation as a finishing place and the job's catch | Which job, and so which expectation and constraint | 2 one career; 6 stakes; 7 identity |
| [02 Hired](02-hired.png) | A moment: the introductory press conference, with banners in the rafters and an empty one waiting | Your first words: each message wins one group and records a promise | 6 stakes from named people; 7 identity |
| [03 Week](03-week.png) | The hub: what still needs you, what changed, and a matchup card with both helmets, the venue and the home side's tradition | None of its own; it routes to the week's decisions | 3 the week is the heartbeat |
| [04 Prep](04-prep.png) | Film, game plan and practice on one surface; 20 practice hours are the plan's currency | Split the hours; attack two, take away two; three dials | 1 agency; 3 real decisions |
| [05 Match, call-in](05-match-call-in.png) | Gameday: Foundry Field in Sedalia's colours, helmets on the scorebug, a crowd plate whose noise has an effect | 4th and 2: three options with tries, risks and estimate ranges, or defer | 1, 4 watched and shaped; 5 credible |
| [06 Aftermath](06-aftermath.png) | A final card with both helmets and the play of the game, then what the plan and the calls did | None; cause and effect for the week | 3 consequences; 8 legible |
| [07 Recruiting](07-recruiting.png) | A shortlist with a budget. Evaluations are ranges; each recruit's wants explain his interest; his top three shown by helmet | Spend 12 contact points | 8 legible; 3 real decisions |
| [08 Player profile](08-player-profile.png) | A dossier: his number in Marlow's own typeface, ratings and their causes, traits, status | His family's NIL ask, beside its cause | 8 development has causes |
| [09 Depth chart](09-depth-chart.png) | The offense as a formation, with backups, fatigue and injury | Who starts at running back; a freshman's last spare redshirt game | 3, 5 credible football |
| [10 Cap ledger](10-cap-ledger.png) | The pro tier in Hartford's dress: integer dollars, proration, dead money, reserved picks, the compliance date | How to get under the cap before the league year opens | 2 the pro reset |
| [11 Job security](11-job-security.png) | Security against the expectation with this week's arithmetic, the four groups (including the fans' promise), and the banners in the rafters | None; it explains why security moved | 6 stakes; 8 legible |
| [12 Visual language](12-visual-language.png) | The three registers, the identity kit for four clubs, palette with measured contrast, type and components | — | 5, 7; accessibility |
| [13 Match at AX5](13-match-ax5.png) · [full scroll](13-match-ax5-full.png) | Image 05 at the largest accessibility text size | The same call; options first, then reasons, buttons, field and last snap | Accessibility |
| [14 Recruiting at AX5](14-recruiting-ax5.png) · [full scroll](14-recruiting-ax5-full.png) | Image 07 at the largest accessibility text size | The same facts per recruit, one block each | Accessibility |

## The look in five rules

1. **Every club brings its own dress.** Helmet, wordmark face, stripe pattern, venue and tradition
   come from one generator. Your club dresses the frame of every screen: the rail wears its deep
   colour and helmet, and its stripe pattern sits under every header.
2. **Three registers.** The office is calm and dense. Gameday is the stadium under lights, dressed
   in the home club's colours. A moment (hired, signing day, a trophy, promotion) is rare,
   full-bleed and still holds a real decision.
3. **Yellow is yours to decide**, and marks the line to gain. Nothing else is yellow.
4. **Blue is an estimate**, always a range and never a point. Facts are chalk.
5. **Earned things hang as banners**, in the club's colours, with an empty one waiting.

## How v1 found its identity

The owner asked for Forge Field's sense of pageantry and team identity without copying it. v1
takes patterns from it and from the reference games, and nothing else:
- the club carries through the whole product;
- registers of drama;
- the helmet as the team;
- stadium pageantry that changes a number;
- a reserved treatment for what has been earned.

`DECISIONS.md` lists where each pattern is seen, and what was deliberately left behind.

## Notes for reading the images

- Text is set in Inter as a stand-in for SF Pro, the system font the app will use. Barlow
  Condensed and the three wordmark faces (varsity, slab, block) will ship in the app under the SIL
  Open Font License, so they render as they will on the device. Rail icons are stand-ins for SF
  Symbols. Helmets are drawn by a committed generator, not by hand.
- UI copy is US English because the sport is American. The design documents keep the owner's
  spelling.
- At accessibility sizes, screens become one scrolling column. The rail keeps its icons and shows
  a label large on a long press, and Continue moves to the end of the column. The *full scroll*
  images show everything below the first screen.
- The field keeps its true length and is drawn at 88% of its true width, so the scorebug and the
  caption fit. During a call-in the panel covers the half of the field away from the ball.

## Regenerating

The source is in `design/src`: one HTML file per screen, with shared tokens, the identity kit
(helmet, wordmark, stripe rule, banners, matchup card) and the field renderer.

```
cd design/src && npm install && npm run render
```

`npm run render -- 05` renders only the screens whose names start with `05`. The script fails if
any page raises an error.
