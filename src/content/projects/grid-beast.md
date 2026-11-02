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
---

Grid Beasts is a creature-collection roguelite about planning under pressure. Each expedition is a climb through branching route maps, where you decide which fights, events, and recruits are worth the risk to the small team you brought along.

Battles are where those decisions meet the grid. Every creature moves and attacks in its own shape, a speed-based timeline decides who acts next, and weather and terrain keep shifting the board, so where a creature stands matters as much as when it can act. The creatures that survive come home to your warehouse, carrying their growth into the next run.
