# Chevette EV Conversion — Three-Design Comparison

A static website that researches and compares **three complete electric-conversion
designs** for the rear-wheel-drive Chevrolet Chevette, with every major subsystem
component selected. Two of the three designs are **single-speed direct-drive** builds.

## The three designs

| # | Build | Drivetrain | Motor | Pack | 0–60 | Range | Est. cost |
|---|-------|-----------|-------|------|------|-------|-----------|
| 1 | **Commuter** | Direct drive (motor → diff) | NetGain HyPer 9 HV | 144 V · 20 kWh LiFePO4 | ~12.5 s | ~70 mi | $15.8k |
| 2 | **Sport** | Stock 4-speed manual | NetGain HyPer 9 HV | 144 V · 30 kWh NMC | ~7.8 s | ~105 mi | $22.5k |
| 3 | **GT** | Direct drive (Tesla LDU) | Tesla Large Drive Unit | 400 V · 75 kWh NMC | ~4.3 s | ~215 mi | $41k |

Designs **1** and **3** are direct drive; design **2** retains the gearbox for
gear multiplication.

## Subsystems covered

Traction motor · inverter/VCU · drivetrain coupling · battery pack · BMS ·
on-board charger · DC-DC converter · cabin heat & A/C · brakes/vacuum · HV safety.

The site compares the designs on cost, performance, range, acceleration, top
speed, efficiency, weight and fabrication effort, with cost broken down by
subsystem and a methodology/assumptions section.

## Structure

```
index.html            # the comparison site (single page)
assets/style.css      # styles
assets/script.js      # chart animation + reveal-on-scroll
.nojekyll             # serve assets without Jekyll processing
```

## Deployment

Published with **GitHub Pages** in *Deploy from a branch* mode:
**Settings → Pages → Source: "Deploy from a branch" → Branch:
`claude/chevette-ev-conversion-1qtb5a`, folder `/ (root)`**.

Once enabled, the site is live at <https://m-mccaffrey.github.io/car/>.

> Performance and cost figures are engineering estimates for comparison only —
> not assembly instructions. High-voltage EV work is hazardous.
