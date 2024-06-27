---
author: Igor Garbuz
datePublished: 2024-06-27
title: "The Future of Supercomputers: Liquid Cooling and Energy Recycling"
ogImage: /assets/liquid-cooled-energy-recycled-supercomputers-og.jpg
isDraft: false
tags:
    - Blog
    - Sci-Fi
description: Explore the future of supercomputers with liquid cooling and energy recycling, addressing power and cooling challenges effectively.
---

## Table of Contents

## Introduction

**Purpose:** This article is a scientific speculation designed to open a discussion or simple be used for entertainment purposes. It is written to self-document some thoughts and to put some numbers into perspective.

**Assumptions:** Semiconductor-based digital computers continue to dominate artificial intelligence and most of the scientific computing for the next decade.

**Clarifications:** Terms "supercomputer" and "data center" are used interchangeably as modern AI purposed supercomputers have their nodes in different racks interconnected and consume an equivalent energy of a typical data center.

With projects like [Stargate by OpenAI and Microsoft](https://www.geeksforgeeks.org/openai-and-microsoft-plan-100-billion-ai-stargate/) planning potential 5GW of power consumption, power delivery and dissipation is the major issue as highlighted by the [SemiAnalysis article](https://www.semianalysis.com/p/ai-datacenter-energy-dilemma-race).

Such power needs are two orders of magnitude above an average current data centers and approach the capacity of a typical [nuclear power plant](https://en.wikipedia.org/wiki/Nuclear_power_plant) (NPP) with 4 reactors at nominal load. That is why OpenAI's [Sam Altman looks into](https://www.fastcompany.com/91136574/oklo-ipo-spac-sam-altman) building the Stargate next to an NPP.

Cooling such a supercomputer is not less challenging than supplying it with electricity. [Around 60%](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/investing-in-the-rising-data-center-economy) of the electrical energy consumed is dissipated as heat from semiconductors. Other 40% are mainly spend on cooling often using [vapor-compression refrigeration cycle](https://en.wikipedia.org/wiki/Vapor-compression_refrigeration) in the air-conditioners. Ratio of total energy to cooling energy is called [power usage effectiveness](https://en.wikipedia.org/wiki/Power_usage_effectiveness) (PUE) and its improvement [stalled in the recent years around](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/investing-in-the-rising-data-center-economy) around 1.6.

For the sake of curiosity we can estimate the potential number of GPUs in the Stargate 5GW project. Given the latest generation of Nvidia H100 GPUs, [around 1,275W is needed per GPU](https://www.semianalysis.com/p/ai-datacenter-energy-dilemma-race) including CPU, RAM, storage, networking, etc. Simple math gives us:

$$
\frac{5 \times 10^9 \times 0.6}{1275}=2.35 \times 10^6
$$

of H100 GPUs. Here 40% needed for the cooling and maintenance is not accounted in the [thermal design power](https://en.wikipedia.org/wiki/Thermal_design_power) (TDP).

In terms of information efficiency the current generation of semiconductor based computers has almost infinite room for improvement according to [Landauer limit](https://en.wikipedia.org/wiki/Landauer%27s_principle). Most of losses come from the resistive heating, capacitive charging and current leakage losses of semiconductors are the inherent physical properties of the materials used and cannot be completely mitigated, at least at the room temperature and the normal pressure.

Actually, latest generations of semiconductors are extremely efficient compared to the predecessors, but from physics standpoint the heat dissipation in such amounts is not strictly required for the computation. For the current generation let's considering all the energy spend over the Landauer limit as a cost of reliability and scalability. In the same way as the information channel overhead is required for the error correction codes.

## Liquid Cooling

An advantage of a liquid cooled computer is an increased compute density. The amount of chips stacked in the cubic meter can be significantly higher compared to the air cooling.
This translates to savings in networking equipment, interconnection energy and networking latency.

On top the extra equipment, saved latency is important for large models trained with tensor parallelism regime in addition to pipeline and data parallelism. Tensor parallelism is especially sensitive to networking latency as all GPUs working on parts of a single tensor must ideally act as a single GPU. As the light travels at around 30cm per nanosecond, every additional meter of distance takes several GPU clock cycles. I cannot recommend enough reading [this SemiAnalysis article](https://www.semianalysis.com/p/100000-h100-clusters-power-network) covering very well aforementioned problem.

Water-cooling is already successfully used by many companies [including Google](https://blog.google/outreach-initiatives/sustainability/our-commitment-to-climate-conscious-data-center-cooling/) for more efficient and smaller footprint facilities.

## Heat Recycling

Several companies like [Qarnot](https://qarnot.com/en) are already working on recycling data centers heat and corporations like [Microsoft develop their own solution e.g for heating homes](https://local.microsoft.com/blog/datacenter_heat_repurposed/).

One plausible design for a “Stargate” size supercomputer would be to build it in a close proximity or even inside the NPP and its dissipated heat can be recycled to produce electricity in the facility. This could potentially solve the cooling problem and significantly decrease the energy consumption.

Technical solution for recapturing such amount of energy at relatively low temperature to effectively convert it back to electricity remains an open problem.

Here I would speculate that one possibility is to apply the evaporative process used in the NPPs - a type of thermodynamic cycle known as [Rankine cycle](https://en.wikipedia.org/wiki/Rankine_cycle). An adaptation required for the GPUs is to select a chemical substance and a corresponding pressure regime that will best suit server operation temperatures. This type of Rankine cycle is called [Organic Rankine Cycle](https://en.wikipedia.org/wiki/Organic_Rankine_cycle) (ORC).

Current generation of NPPa often use pressurized normal or heavy water in primarily and secondary circuits. Secondary circuit has a lower pressure compared to the primary one so the water starts boiling and the vapour creates pressure before entering the turbine. Condenser after the turbine creates a negative pressure so that vapour pushes the turbine blades.

Nothing prevent an existante of the Organic Rankine cycle that uses a liquid from server cooling system to boil another liquid in the secondary circuit at around 60-70°C boiling point and reuse the generated vapour to spin a turbine. The condenser system can be shared with the NPP directly as the NPPs are often built close to the fresh water sources.

### Organic Rankine Cycle as a Cooling Solution

Here the ORC is used as a evaporative cooling solution that is highly efficient because the energy needed for the phase transition liquid to gas is relatively high compared to the energy capacity of the liquid. For example the amount of energy needed to heat a unit of water from room temperature to the boiling point is 6 times lower than the energy required to transition from water to vapour.

There are already some companies looking into similar solutions, for example [Vertiv published a white paper in 2023](https://www.vertiv.com/49d45e/globalassets/documents/white-papers/vertiv-experimental-lessons-of-organic-rankine-wp-en-na-sl-71085-web_383464_0.pdf). The paper presents efficiency calculations, proposes several working fluids and suggest that the zeotropic blend of R1233zd(E) and R1234ze(E) refrigerants 20% to 80% by mass can be a good choice. The authors conclude that the potential efficiency can be around 2% and it depends on the seasons and the local climate. 2% is a significant number for the 5GW supercomputer, especially because it saves 20% to 40% of the energy spent on cooling.

## Conclusions

Scaling up x100 times the size of the current AI supercomputers is a challenging endeavour. For a stable energy supply, a dedicated NPP can be required. As a potential economical cooling solution at scale, the heat from the data center can be recycled through the Organic Rankine cycle to recover some electricity and provide a massive cooling solution at the same time. Arguments against this idea include the increased number of the failure points, economical viability and a scarcity of suitable locations on Earth. Last but not least, water-cooled supercomputers would probably be widely adopted due to numerous advantages they bring regardless of the energy recycling through the ORC.
