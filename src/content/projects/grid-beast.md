---
title: Grid Beasts
subtitle: 生灵棋旅
description: A single-player creature-collection roguelite. Lead a small team of beasts up branching route maps and fight positional, timeline-driven tactics battles on a grid.
order: 1
tags:
  - Roguelite
  - Tactics
  - Creature Collection
  - Grid-Based Combat
visualLabel: A chess played with creatures
visualVariant: grid
cover:
  src: /eddiewho/images/uploads/grid_beasts_cover_20260906.png
  alt: Grid Beasts key art showing the game logo above a leaf creature, a water creature, and a fire dragon
  width: 1672
  height: 941
coreExperience:
  - Pick a starter creature, then choose 1–4 creatures from your warehouse before each expedition. A party holds up to six.
  - Climb each act's branching route map through battles, elite trainer fights, events, camps, and recruitment.
  - See the enemy line-up, deploy your team, and fight as a speed-based timeline gives each creature its turn while weather and tile effects shape the board.
  - Earn experience toward evolutions and new recruits, face a boss at the end of each act, and finish the expedition against a final boss, the General.
  - Win or lose, the creatures you bring home stay in your warehouse for future runs.
keySystems:
  - title: Positional Combat
    description: Every creature has its own movement and attack shape plus a unique trait, and single-target attacks can be blocked by units in the way. Eight weather types and nine tile effects, such as Burning, Mud, and Thorns, change each fight on a board that grows from 10×8 in act 1 to 16×12 in later acts.
  - title: Creatures & Evolution
    description: 247 species across nine elements, with evolution chains (including a hidden branch evolution) and rare shiny variants.
  - title: Fusion & Promotion
    description: Final-form creatures can be fused into new combinations, each with its own generated portrait. Promotion lets ten creature lines transform mid-battle into a stronger form with an entry ability.
  - title: Long-Term Progression
    description: Each save keeps its own warehouse and bestiary, alongside five difficulty levels, a Daily Challenge, creature titles and nicknames, and Steam friend battles.
development: A solo project in development since August 2026, built in Unity 6 with C#, UI Toolkit, the Input System, Unity Localization, and Steamworks.NET. A custom in-editor workbench is used to author creatures, traits, and evolution chains, while automated EditMode and PlayMode tests, including screenshot-capture tests, back up visual reviews. Python tools in the repository generate a content overview report and run balance simulations.
currentProgress: The full expedition loop now runs through three acts to the final boss (internal version v0.9925), with Windows and macOS builds and a separate demo edition covering act 1. Recent updates added the Promotion system, creature titles and nicknames, warehouse search, text and layout support for eight languages, Steam friend matches, leaderboards, and achievements, an illustrated battlefield for each act, a board-game style interface redesign, five difficulty levels, a Daily Challenge, and new run items called gadgets. Still in progress are Promotion battle animations and balancing, a proposed second set of expedition events, and a full two-device network test of friend battles.
gallery:
  - src: /eddiewho/images/projects/grid-beasts/01-route-map.webp
    alt: Act 1 route map with battle, elite, event, campfire, and recruit nodes linked by dotted paths, a pawn marking the current position, and a party panel listing four creatures with their HP and experience
    caption: Plan each climb on the act's branching route map, with your party's health and experience alongside.
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/02-riverside-battle.webp
    alt: Grid battlefield beside a riverside village, with a white bird creature's reachable cells highlighted in blue, enemy creatures across the board, and a turn-order timeline along the top
    caption: Battles play out on an illustrated battlefield, with a speed-based timeline showing who acts next.
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/03-night-village-battle.webp
    alt: Night-time village battlefield with a church, graves, and lanterns, a creature's cross-shaped attack range highlighted in blue, and a burning tile near the enemy creatures
    caption: Every creature attacks in its own shape — here, a cross-shaped range in a haunted village.
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/04-island-battle.webp
    alt: Sandy island battlefield surrounded by sea, with a cross-shaped attack range highlighted, lightning-marked tiles, and opposing creatures to the right
    caption: Each act brings a new battlefield, and tile effects change how the board plays.
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/05-evolution.webp
    alt: Evolution screen showing Gosling becoming Seraphplume, with HP, Attack, Speed, Move, and Range increases and its Agile+ trait upgrading to Agile++
    caption: Experience leads to evolution — Gosling becomes Seraphplume, with higher stats and an upgraded trait.
    width: 1920
    height: 1080
---

Grid Beasts is a creature-collection roguelite about planning under pressure. Each expedition is a climb through branching route maps, where you decide which fights, events, and recruits are worth the risk to the small team you brought along.

Battles are where those decisions meet the grid. Every creature moves and attacks in its own shape, a speed-based timeline decides who acts next, and weather and terrain keep shifting the board, so where a creature stands matters as much as when it can act. The creatures that survive come home to your warehouse, carrying their growth into the next run.
