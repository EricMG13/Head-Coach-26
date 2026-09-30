# Head Coach — Design v0

The only gameplay authority. Written before the look is approved; every number here is a starting
value that the rules module will own. `GOAL.md` holds the pillars; this file says how the game
meets them.

## 1. What the coach does instead of pressing buttons

**You choose what your team is ready for, then make the calls that swing the game.** Three verbs:

1. **Prepare.** Each week you split 20 practice hours between Film, Install, Develop and Recover,
   and you build a plan: two things to attack and two to take away, chosen from what film
   revealed about this opponent, plus three dials. Your coordinators call the match inside it.
2. **Call.** The coordinator calls most snaps. You are called in at the snaps where the game
   swings. A call-in offers at most three options, each saying what it tries, what it risks and
   the coordinator's estimate as a range, with a recommendation and its reason. Deferring to the
   coordinator is a legitimate call.
3. **Answer.** The people around the programme ask for things: the athletic director, boosters,
   players, recruits, the press. Every answer pleases someone and costs something.

The idea that ties them together: **preparation sets the odds, the call picks among them, and the
caption shows why.** Install level changes the ratings in the matchups a package uses. Film hours
narrow the ranges the coordinator quotes in a call-in. Every snap records its *deciding duel*
(the matchup that moved the result most), and the caption names it. So a Tuesday decision is
visible on Saturday and attributable in the aftermath.

**Time arithmetic (college, about 150 snaps a game, both teams).** 22 call-ins × 10 s to read and
decide = 220 s; those 22 snaps play in full at about 5 s = 110 s; the other 128 snaps condense to
about 1.8 s = 230 s; kicks, drive changes and halftime about 30 s. Total about 590 s, under
10 minutes. A season of about 14 games × (10 min match + 6 min week) plus a 90-minute offseason is
about 5.2 hours, inside the 8-hour ceiling. Wrong if: the median match runs over 11.5 minutes, a
season over 8 hours, or a default match presents fewer than 15 or more than 40 decisions.

## 2. The week

| Beat | Mandatory | Budget | What the coach decides |
|---|---|---|---|
| Inbox | At least one item needs an answer | 90 s | 2–3 responses per item; each names who it pleases and what it costs (often contact points or practice hours) |
| Prep | Yes | 150 s | Practice hours; attack two, take away two; tempo, 4th-down stance, run–pass lean |
| Recruiting (college) / Front office (pro) | Yes | 90 s | 12 contact points (college) or 12 scouting points (pro) |
| Squad | Only when flagged (injury, redshirt, discipline, NIL ask) | 45 s | Depth chart, redshirts, NIL |
| Match | Yes | about 10 min | Call-ins, timeouts, challenges, take over or hand off, halftime edit |
| Aftermath | Brief | 30 s | Nothing to decide: what the plan and the calls did, injuries, one development flag, one stakeholder reaction |

**Navigation** is a rail of six places: Week, Prep, Squad, Recruit (pro: Office), Program (pro:
Club) and League. **Continue** sits bottom right, always goes to the next unresolved obligation
and names it. Any beat can be
**delegated** to a named staff member, who uses the same rules and budgets with their own ratings;
delegation carries no hidden penalty, and a test holds that. **Cruise** advances to the next
match or the next flagged decision.

Every mandatory decision passes the three-part test:

| Decision | Two defensible answers | Seen within three weeks | What it costs |
|---|---|---|---|
| Practice hours | Film, Install, Develop and Recover all help | Match execution, estimate width, rating ticks, injuries | Every hour comes from another use |
| Attack / take away | Pick 2 of up to 5 on each side | The aftermath plan scorecard | The options not picked, and install hours |
| Contact points | Who, and with which action | Interest rank moves weekly; commitments | Points spent elsewhere |
| Inbox answers | 2–3 responses | Stakeholder and player dispositions | Points, hours or another group's goodwill |
| A call-in | Up to 3 options plus defer | The next snap | The options not taken |
| First words (once) | Three messages, each winning one group | That group's disposition, and its promise on the Program screen | The other two groups, and a promise you are held to |

**Onboarding is the first real week**, with no tutorial cards. You choose one of three jobs, each
showing the AD's expectation and the job's catch. Then comes the **introductory press conference**:
one decision, your first words. Each of three messages raises one group's starting disposition by 5
and records a promise that group holds you to, such as "8 in-state signees in your first class". A
kept promise lifts that group at season end; a broken one drops it. Then the first week runs as
normal.

## 3. The match

### 3.1 The plan

- **Attack two, take away two.** Film offers candidate matchups: 2 on each side with no film, one
  more per 2 film hours, at most 5. Each becomes a package the coordinator leans on.
- **Install level** per package (four packages): under 2 hours *Walkthrough* (−3 to the ratings in
  its matchups), 2–3 hours *Repped* (0), 4 hours or more *Sharp* (+3).
- **Film** narrows the opponent's tendency ranges and the coordinator's in-match estimates. The
  floor on that width is set by the coordinator's game-planning rating.
- **Develop** hours go to one position group's development. **Recover** hours shed fatigue; under
  3 hours raises soft-tissue injury risk for starters who are running hot.
- **Dials:** tempo (Huddle, Normal, Hurry-up); 4th-down stance (Cautious, By the numbers,
  Aggressive, measured against an expected-points baseline); run–pass lean (35–65% run, in 5s).
- **Halftime** is a full plan edit among installed packages; hours are already spent.

### 3.2 Call-ins

- Every snap gets a **leverage** score: the swing in the sim's own win model between a good and a
  bad outcome. A threshold adapts through the game to land near the **involvement** target:
  Hands-off about 12, **Head coach about 22 (default)**, Play caller about 36.
- **Always a call-in**, whatever the budget: a 4th down where going and kicking are within
  0.5 expected points, a two-point decision, a timeout or challenge the coordinator recommends, and
  a **tell** (the opponent shows something the plan did not anticipate; at most 3 a game).
- **Take over** lowers the threshold for the rest of the drive; **hand off** raises it.
- A call-in shows: situation, up to three options (name, *Tries*, *Risks*, estimate range), the
  recommendation and its reason, and Defer. No timer. Selecting an option draws its play on the
  field.

### 3.3 Resolution

Each snap resolves as matchups (protection, route against coverage, throw, run lane, carrier
against pursuit, kick), each scored by a logistic on the rating gap after scheme fit, install
level, fatigue, traits and situation, plus one seeded draw per matchup in a fixed order. **The home crowd** is part of the situation: its
noise level (from attendance, what is at stake, and the home club's tradition) raises the visitors'
pre-snap penalty and missed-block rates, and the home-win calibration band keeps it honest. The whole
sport: kickoffs and onside kicks, punts, field goals, extra points, two-point tries, penalties
(accepted or declined by rule), timeouts, the two-minute warning (pro), halves that alternate
possession, and each tier's clock and overtime rules (college: the clock runs after a first down
except in the last two minutes of a half, overtime alternates possessions from the 25; pro: a
10-minute overtime in which both teams possess before sudden death). Off-screen games use a
drive-level model held statistically equivalent to the snap model (GOAL §8).

### 3.4 Presentation

Match day is the **gameday register**: the stadium dresses in the home club's colours (end zones
in its wordmark face, a painted midfield mark, sideline paint), both helmets sit on the scorebug,
and a plate shows the venue, the attendance and the crowd's noise with its effect. The whole field
stays in frame; the camera never pans. Scorebug above, caption below. Offence is
drawn as discs, defence as chevrons: shape carries the role, colour carries the club. All 22
players are present; at most four marks are emphasised (the deciding duel and the ball). Recorded
facts are inviolable; other players move by deterministic templates that never assert a fact. A
call-in panel docks over the half of the field away from the ball. Snaps you called play in full;
the rest condense. Controls: speed, pause, skip to the next call, key moments.

## 4. College tier

- **World:** 134 programmes: four power conferences (16, 16, 14, 14), six conferences of 12, two
  independents. A 12-game season, conference championship games, an 8-team bracket.
- **Recruiting.** A shortlist of up to 40. **12 contact points a week**: Call 1; Evaluate 2
  (narrows your estimate); Home visit 4 (once per recruit per cycle); Host an official visit 3
  (home weeks only, at most 4 per weekend). Offers are free, at most twice your open
  scholarships. A recruit ranks up to five programmes and shows **three wants** from seven
  (playing time, winning, prestige, close to home, NIL, scheme fit, development); interest moves
  weekly with contact and with how well you meet his wants. You see your **rank in his list and a
  band** (Cold, Cool, Warm, Hot), not a hidden number. **Fog:** your evaluation is a range that
  each Evaluate narrows; consensus stars and a national rank are a separate, coarser public signal.
- **Throughput.** Standing orders repeat last week's spend. If a recruit you invested in signs
  elsewhere, half of your last four weeks' points on him come back the next week. A commitment
  holds without spend until a rival attempts a flip, which arrives in the inbox. On signing day
  your recruiting coordinator fills any open scholarships from the unsigned pool, so a class is
  never short. AI programmes recruit with the same wants model and a cheaper spend policy.
- **Signing day** is the second Wednesday of December, a hard deadline.
- **Portal:** two windows, after the bracket and in spring. Every player with a reason to leave
  shows it, and you answer each (NIL, a role promise, or let him go). Arrivals are a market with
  visible competing interest.
- **NIL:** a yearly pot in integer dollars, set by the programme. Each player's market value shows
  as a range; paying below it raises portal risk.
- **Eligibility:** four seasons within five years. A player keeps his redshirt year if he plays
  four games or fewer. 85 scholarships, 105 on the roster. Practice: 20 hours a week in season.

## 5. Pro tier

- 32 teams, two conferences of four divisions of four. 17 games and a bye, an 8-team bracket.
  53 active, 48 dress, 16 on the practice squad.
- **Cap** in integer dollars: $255,000,000 in the save's first season, +6% a year rounded to the
  nearest $100,000. Contracts run 1–7 years; signing bonuses prorate over up to 5 years; a release
  accelerates remaining proration into dead money; a restructure converts base salary to prorated
  bonus. The **cap-compliance date** is the start of the league year in March; your calendar
  cannot pass it while you are over.
- **The offseason is a flow that completes every season:** expiries and retirements, the
  compliance date (the ledger reserves cap for your draft picks), free agency in three waves with competing bids and repricing (AI teams sign
  only up to 53 minus their draft picks), the draft (7 rounds, pick by pick; a pick nobody can
  seat passes), camp cuts to 53, the season.
- **Front office** replaces recruiting as the weekly beat: 12 scouting points buy draft-prospect
  evaluations (ranges narrow) and pro scouting of trade and free-agent targets.
- The pro league runs from the save's first day, so the coach is promoted into a league with
  history.

## 6. Stakes and the career

- **Expectation:** before the season the AD (college) or GM (pro) sets a finishing place:
  conference place in college, division place in pro. Its unit is *places*.
- **Projection:** the sim's projected finish from the standings and the remaining schedule, shown
  as a range.
- **Job security (0–100)** moves each week halfway toward a target:
  `50 + 10 × (expected place − projected place)`, plus stakeholder pressure (+3 for each other
  group at 70 or above, −5 for each below 40), clamped to 0–100, rounded half up. Bands: hot seat
  under 30, watched 30–49, steady 50–69, secure 70 and up. The AD reviews the job below 15 in
  season and below 30 at season end. A game margin is never compared with a season target.
- **Four groups**, each 0–100 with visible wants and triggers: AD or GM (the expectation);
  boosters or owner (rivalry results, NIL or cap discipline); fans (home wins, points, tempo; attendance shows their mood);
  locker room (fair playing time, practice load, promises kept). Bands: Hostile under 25, Uneasy
  25–44, Neutral 45–59, Supportive 60–79, Devoted 80 and up.
- **The carousel never dead-ends:** a fired coach always has at least one offer at season end, at
  worst the lowest-prestige opening. Arriving after a firing resets every group to 60; a promotion
  carries dispositions over.
- **Promotion:** reputation (0–100) grows from results against expectation, titles, players
  developed and drafted, and class rankings. A pro offer arrives when reputation clears a bar set
  by that year's pro openings. Target: 4–12 college seasons at median play, never before season 4.
  Carried across: reputation, scheme, the four coordinators, the record book and the career line.
  Left behind: players, recruits, NIL and contact points. A fired pro coach can go back to college.

## 7. People, staff and scheme

- **Ratings** are integers from 40 to 99: four position attributes, four physical (Speed,
  Strength, Agility, Stamina) and three mental (Awareness, Composure, Discipline). Overall is a
  position-weighted composite used for sorting. **Potential** is hidden and shown as a range that
  narrows with each season of evidence.
- **Development** is weekly and caused, never rolled: age, Develop hours for his group, snaps
  played, his position coach's development rating, scheme fit and traits add integer progress
  points; a rating ticks at 10 points. The profile lists each cause. **Decline** starts at RB 27;
  WR, CB and edge 29; TE, LB, DT and S 30; OL 31; QB 34; K and P 36, and shows before it bites.
- **Traits** each do one thing in one named system: Ironman (injury time ×0.6), Ice in veins (+4
  on high-leverage snaps), Front runner (−4 on the road), Mentor (development for younger players
  at his position), Restless (portal risk), Adaptable (scheme fit), Volatile (discipline
  incidents), Film junkie (Film hours count toward his development), Steady (half the pre-snap
  penalty rate).
- **Scheme** is the spine: six offensive (Wide zone, Air raid, Spread option, Power, West coast,
  Pro style) and six defensive (4-3 over, 3-4, 4-2-5 quarters, Tampa 2, 3-3-5, Multiple pressure).
  Each names the attributes it rewards; fit modifies every matchup. Changing scheme drops every
  package one install level for four weeks and resets fit.
- **Staff:** offensive, defensive and special-teams coordinators and a recruiting coordinator
  (personnel director in pro), plus position coaches, rated for development, recruiting, game
  planning and scheme affinity. Good staff get poached at season end. The four coordinators follow
  the coach on promotion.

## 8. The world

**Every club has an identity kit**, generated through the same seam as its name: two colours; a
wordmark face from a bank of three (varsity, slab, block), also used for its jersey numbers and end
zones; a helmet (shell, stripe pattern, facemask and decal); a stripe rule taken from the helmet; a
venue and capacity; and one **tradition with a mechanical effect**. Examples: Lantern Walk (official
visits on that weekend count double), Foundry Bell (the home crowd stays loud for a series after a
home score), Chapel Bells (a home win lifts the locker room a step). Your club dresses the frame of
every screen. Earned titles and bowls hang as banners on the Program screen.

Real US geography with fictional programmes placed in real towns; distance drives recruiting
reach, travel and rivalry candidates. Fourteen archetypes set priors, and each programme carries
one constraint from its archetype (an academic floor, a recruiting radius, thin facilities,
volatile boosters). Names and colours come from one generation seam; colour pairs are checked at
generation (text on a club plate at least 4.5:1, a player mark's ring on turf at least 3:1).
Prestige is 0–100 and ranks every programme. Rivalries, traditions, prestige movement (a target
with a one-step move each season), realignment (pair
swaps) and history (typed events, headlines generated at display time) arrive in milestone 5.

## 9. Departures from the reference (GOAL §5)

| # | Reference | This design | Why | Wrong if |
|---|---|---|---|---|
| 1 | Separate opponent report, game plan and practice beats | One Prep screen; practice hours are the plan's currency; film buys information | Three disconnected forms become one trade-off | Median film hours are 0, or Prep takes over 3 minutes |
| 2 | Tempo, aggression, personnel emphasis, coverage lean, two keys | Attack two and take away two, from film-revealed matchups, plus three dials | Global dials read as inert; matchup choices show up in the aftermath | Across 200 games, chosen packages perform no differently from unchosen ones |
| 3 | A fixed flag list, about 25 call-ins | Leverage-budgeted call-ins toward a target (default 22), plus always-on close calls and tells | Calls cluster where the game swings; blowouts stop asking | Call-ins fall outside 15–40, or players take over on more than 30% of drives |
| 4 | A recommendation with a reason | The same, plus an estimate range whose width depends on film hours and the coordinator | Pillar 8, and it makes film and staff quality visible in the match | The quoted ranges miss the realised rates |
| 5 | 100 contact points, spent freely | 12 points, four fixed-cost actions, standing orders, refunds, a signing-day floor | Fewer, bigger choices; no grind | The recruiting beat takes over 2 minutes, or AI classes out-recruit a default player |
| 6 | Interest as a hidden score | Rank in his list, a band, and his three wants | The player can say why a recruit moved | Testers cannot explain a move |
| 7 | A generated map | Real geography, fictional programmes | Recognisable hotbeds and travel for free; real city names were already allowed | The originality pass cannot filter name collisions at the seam |
| 8 | Up to 3 highlighted marks | The deciding duel and the ball (up to 4); shape encodes role | The caption and the field tell the same story; colour is never the only cue | Testers cannot say why a play worked |
| 9 | Support targets from prestige, performance from rank | Security moves toward a target in places, with stakeholder pressure | One unit from expectation to security | Security stays flat for more than 4 weeks while results change |
| 10 | Practice as 60 minutes; NIL in abstract units | 20 hours (the college countable-hours rule); NIL in integer dollars | Real, recognisable numbers; money is always dollars | — |
| 11 | Onboarding: meet the AD | An introductory press conference with one decision that sets a promise | The first minute of the save is already a real decision with stakes | Players skip it or cannot recall their promise later |
| 12 | Archetypes, name banks and generated colours | Plus a generated identity kit per club: helmet, wordmark face, stripe rule, venue and a tradition with an effect | A believable world needs pageantry, and each piece has a mechanical hook | Traditions have no measurable effect in a soak |
