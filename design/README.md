# Design images — for the owner's approval

Status: **proposed, not yet approved.** Nothing else gets built until these are approved (GOAL §0).

Every image shows the same save. **Coach Jordan Hale** (wide zone, 4-2-5 quarters) takes the
**Marlow State Lanterns** job in the Tri-River Conference. It is **Week 6 of 2026**, and the week
ends in a game **at Sedalia A&M**. Images 02–08 and 10 follow that week in order: the hub, the
plan, the depth chart and a player's profile before kickoff; the fourth-down call in the fourth
quarter; the aftermath and job security after the 27–24 win. Image 01 is the same save's first
screen. Image 09 is the same save seven seasons later, after promotion, and it shows Okafor again.
Every rule and number behind these images is in `DESIGN.md`. An image never sets a fact.

Screens are iPhone 15 Pro class in landscape, 852 × 393 pt, rendered at 3x (2556 × 1179). The
Dynamic Island and the landscape safe areas (59 pt at each side, 21 pt at the bottom) are drawn in.

| Image | What it is for | The decision it hosts | Pillar |
|---|---|---|---|
| [01 Job offers](01-job-offers.png) | The first screen of a career. Three jobs, each with the AD's expectation stated as a finishing place, and the job's catch | Which job, and so which expectation and which constraint you accept | 2 one career; 6 stakes from named people |
| [02 Week](02-week.png) | The weekly hub: where you stand, what changed, and what still needs you. Continue names the next obligation | None of its own. It routes to the week's four decisions and flags them | 3 the week is the heartbeat; 10 fits a life |
| [03 Prep](03-prep.png) | Film, game plan and practice on one surface. 20 practice hours are the plan's currency | Split the 20 hours; attack two things, take away two; set three dials | 1 the coach's agency; 3 real decisions |
| [04 Match, call-in](04-match-call-in.png) | The match on the whole field. The coordinator has called in the coach on 4th and 2, and the selected play is drawn on the field | Three options with what each tries and risks, estimate ranges, a recommendation and its reason, or defer | 1, 4 watched, understood, shaped |
| [05 Aftermath](05-aftermath.png) | What the plan and the calls did: the game's flow with your calls marked, a scorecard for each plan choice, and the consequences | None. It shows cause and effect for the week's decisions | 3 consequences visible; 8 legible |
| [06 Recruiting](06-recruiting.png) | A shortlist with a budget, not a database. Your evaluations are ranges, and each recruit's three wants explain his interest | Spend 12 contact points: call, evaluate, home visit, host a visit | 8 legible; 3 real decisions |
| [07 Player profile](07-player-profile.png) | One player's dossier: ratings and their change, the causes of his development, his traits and his status | His family's NIL ask, answered beside its cause | 8 development has causes |
| [08 Depth chart](08-depth-chart.png) | The offense as a formation, with backups, fatigue and injury status | Who starts at running back; whether a freshman spends his last spare redshirt game | 3, 5 credible football |
| [09 Cap ledger](09-cap-ledger.png) | The pro tier's money model in integer dollars: proration, dead money, reserved draft picks, the compliance date | How to get under the cap before the league year opens | 2 the pro reset |
| [10 Job security](10-job-security.png) | Security against the expectation, the arithmetic of this week's move, and the four groups with their wants | None. It explains why security moved and what each group wants next | 6 stakes that move weekly; 8 legible |
| [11 Visual language](11-visual-language.png) | Palette with measured contrast, type, spacing, key components and how club colours are applied | — | 5 credibility; accessibility |
| [12 Match at AX5](12-match-ax5.png) · [full scroll](12-match-ax5-full.png) | Image 04 at the largest accessibility text size | The same call. The options come first; reasons, buttons, field and last snap follow on scroll | Accessibility |
| [13 Recruiting at AX5](13-recruiting-ax5.png) · [full scroll](13-recruiting-ax5-full.png) | Image 06 at the largest accessibility text size | The same facts per recruit, one block each; the dossier opens as its own page | Accessibility |

## The look in four rules

1. **Night field, chalk lines.** A dark ground, thin chalk rules, and hash marks after section
   headers.
2. **Yellow is yours to decide**, and marks the line to gain. The pennant marks a decision that is
   yours. Nothing else is yellow.
3. **Blue is an estimate**, always a range and never a point. Facts are chalk.
4. **Club colours stay in their places:** the rail stripe, the monogram, the scorebug plate and
   the player marks. Offense is a disc and defense a chevron, so colour is never the only cue.

## Notes for reading the images

- Text is set in Inter as a stand-in for SF Pro, the system font the app will use. Barlow
  Condensed is the display face and will ship in the app (SIL Open Font License), so it renders
  as it will on the device. Rail icons are stand-ins for SF Symbols.
- UI copy is US English because the sport is American ("offense", "programs"). The design documents
  keep the owner's spelling.
- At accessibility sizes, screens become one scrolling column. The rail keeps its icons and shows
  a label large on a long press, and Continue moves to the end of the column. The *full scroll*
  images show everything below the first screen, so you can check that nothing is lost.
- The field keeps its true length and is drawn at 88% of its true width, so the scorebug and the
  caption fit. During a call-in the panel covers the half of the field away from the ball.

## Regenerating

The source is in `design/src`: one HTML file per screen, with shared tokens, components and the
field renderer. To render every screen:

```
cd design/src && npm install && npm run render
```

`npm run render -- 04` renders only the screens whose names start with `04`. The script fails
if any page raises an error.
