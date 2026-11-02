---
title: 生灵棋旅
subtitle: Grid Beasts
description: 一款单人生物收集类 Roguelite。带领一支小小的生灵队伍，沿分支路线图一路攀登，在网格上进行讲究站位、由时间轴驱动的战术战斗。
order: 1
tags:
  - Roguelite
  - 战棋
  - 生物收集
  - 网格战斗
visualLabel: 一场与生灵共下的棋
visualVariant: grid
cover:
  src: /eddiewho/images/uploads/grid_beasts_cover_20260906.png
  alt: 《生灵棋旅》主视觉：游戏标志下方是一只叶子生物、一只水系生物和一条火龙
  width: 1672
  height: 941
coreExperience:
  - 选择一只初始生灵；每次远征前，从仓库中挑选 1–4 只生灵出发，队伍最多容纳六只。
  - 沿着每一幕的分支路线图攀登，途经普通战斗、精英训练师对决、事件、营地与招募。
  - 先看清敌方阵容，再部署自己的队伍；战斗中，基于速度的时间轴决定每只生灵的行动顺序，天气与地块效果不断改变战局。
  - 积累经验以进化、招募新伙伴；每一幕的终点都有首领，整场远征的最终首领是「将军」。
  - 无论胜负，带回来的生灵都会留在仓库里，供之后的远征使用。
keySystems:
  - title: 站位战斗
    description: 每只生灵都有独特的移动与攻击形状以及专属特性，单体攻击会被路线上的单位阻挡。八种天气与九种地块效果（如燃烧、泥沼、荆棘）会改变每一场战斗；棋盘从第一幕的 10×8 扩大到后续各幕的 16×12。
  - title: 生灵与进化
    description: 九种属性、247 个物种，拥有进化链（包括一条隐藏的分支进化）以及稀有的闪光变种。
  - title: 融合与晋升
    description: 最终形态的生灵可以融合成新的组合，每种组合都有生成的专属立绘。晋升系统让十条生灵进化线能在战斗中变身为更强的形态，并在登场时触发能力。
  - title: 长线成长
    description: 每个存档都有独立的仓库与图鉴，另有五档难度、每日挑战、生灵称号与昵称，以及 Steam 好友对战。
development: 一个从 2026 年 8 月开始独立开发的项目，使用 Unity 6 与 C#，以及 UI Toolkit、Input System、Unity Localization 和 Steamworks.NET。项目中有一套自制的编辑器内设计工作台，用于制作生灵、特性与进化链；自动化的 EditMode 与 PlayMode 测试（包括截图测试）为视觉审查提供支撑。仓库里的 Python 工具可以生成内容总览报告并运行平衡性模拟。
currentProgress: 完整的远征流程已经可以从三幕一路打到最终首领（内部版本 v0.9925），并有 Windows 与 macOS 构建，以及一个只包含第一幕的独立试玩版。近期更新加入了晋升系统、生灵称号与昵称、仓库搜索、八种语言的文本与排版支持、Steam 好友对战、排行榜与成就、每一幕各自的插画战场、桌游风格的界面重做、五档难度、每日挑战，以及名为「小道具」的新局内道具。仍在进行中的工作包括：晋升的战斗动画与平衡调整、一套待定的第二批远征事件，以及好友对战的完整双设备联网测试。
gallery:
  - src: /eddiewho/images/projects/grid-beasts/01-route-map.webp
    alt: 第一幕路线图：战斗、精英、事件、营火与招募节点由虚线连接，棋子标出当前位置，右侧队伍面板列出四只生灵的生命值与经验
    caption: 在每一幕的分支路线图上规划攀登路线，队伍的生命值与经验一目了然。
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/02-riverside-battle.webp
    alt: 河畔村庄旁的网格战场，一只白色鸟类生灵的可移动格子以蓝色高亮，敌方生灵分布在棋盘另一侧，顶部是行动顺序时间轴
    caption: 战斗在插画风格的战场上展开，基于速度的时间轴显示下一个行动的是谁。
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/03-night-village-battle.webp
    alt: 夜晚的村庄战场，有教堂、墓碑与路灯，一只生灵的十字形攻击范围以蓝色高亮，敌方生灵附近有一块燃烧地块
    caption: 每只生灵都有自己的攻击形状——这里是闹鬼村庄中的十字形范围。
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/04-island-battle.webp
    alt: 被大海环绕的沙岛战场，十字形攻击范围高亮显示，部分地块带有闪电标记，对手的生灵位于右侧
    caption: 每一幕都有新的战场，地块效果会改变棋盘的玩法。
    width: 1920
    height: 1080
  - src: /eddiewho/images/projects/grid-beasts/05-evolution.webp
    alt: 进化界面：Gosling 进化为 Seraphplume，生命、攻击、速度、移动与射程均有提升，特性从 Agile+ 升级为 Agile++
    caption: 经验带来进化——Gosling 进化为 Seraphplume，属性提升，特性也随之升级。
    width: 1920
    height: 1080
---

《生灵棋旅》是一款关于在压力下做规划的生物收集类 Roguelite。每一次远征都是一段沿着分支路线图的攀登，你要判断哪些战斗、事件和招募值得让随行的小队去冒险。

而战斗，正是这些抉择与棋盘相遇的地方。每只生灵都以自己的形状移动和攻击，基于速度的时间轴决定谁先行动，天气与地形又在不断改变战局——所以生灵站在哪里，和它什么时候能行动同样重要。活下来的生灵会回到你的仓库，带着它们的成长进入下一次远征。
