
![ ](/img/external_image.png)
 
# *SuperCircuits* Superconducting Circuit Simulator
#### *[Luka Bostick](https://github.com/LukaBostick)*, *[Storm McCauley](https://github.com/StormMcCauley)*, *[Nathan Locklear ](https://github.com/Nathanos4)* (Last updated *11/5/23*)
 

## Website

Found at [supercircuit.tech](http://www.supercircuit.tech/).

## Usage

Instructions and tutorials located in the [wiki](https://github.com/OpenCircuits/OpenCircuits/wiki).

## Background

Super Circuits is an open source Single Flux Quantum circuit designer, based on OpenCircuits, which was created by [Leon Montealegre](https://leonmontealegre.com/), originally for an independent study for [Professor Paul Wilkinson](http://www.drpjw.org/) of Pasadena City College.
OpenCircuits is hosted on [GitHub](https://github.com/OpenCircuits/OpenCircuits).


1. [Introduction](###introduction)
2. [Components](###Components)
    1. [Resistor](/docs/SuperCircuits/Components/Resistor.md)
        ---
        2. # Resistor  [Visualzation](/docs/SuperCircuits/Components/Resistor.md) 
        ![](/img/Resistor.jpg)
        ---
    1. [Inductor](/docs/SuperCircuits/Components/Inductor.md)
        ---
        2. # Inductor [Visualzation](/docs/SuperCircuits/Components/Inductor.md)
        ![](/img/Inductor.jpg)
        ---

    1. [Josephson Junction](/docs/SuperCircuits/Components/JosephsonJunction.md)
        ---
        2. # Josephson Junction [Visualzation](/docs/SuperCircuits/Components/JosephsonJunction.md)
        ![](/img/jj.jpg)
        ---

    1. [Voltage Source](/docs/SuperCircuits/Components/VoltageSource.md)
        ---
        2. # Voltage Source [Visualzation](/docs/SuperCircuits/Components/VoltageSource.md)
        ![](/img/VoltageSource.jpg)
        ---

    1. [Current Source](/docs/SuperCircuits/Components/CurrentSource.md)

        ---
    2.  # Current Source [Visualzation](/docs/SuperCircuits/Components/CurrentSource.md)
        ![](/img/CurrentSource.jpg)
        ---


    1. [Phase Source](/docs/SuperCircuits/Components/PhaseSource.md)

        ---
        2. Pending Results
        ---

    1. [Transmission Line](/docs/SuperCircuits/Components/TransmissionLine.md)
        ---
        2. # Transmission Line [Visualzation](/docs/SuperCircuits/Components/TransmissionLine.md)
            ![](/img/TransmissionLine.jpg)
        ---

    1. [Mutual inductance](/docs/SuperCircuits/Components/Mutualinductance.md)
        ---
      2.  # Mutual inductance [Visualzation](/docs/SuperCircuits/Components/Mutualinductance.md)
            ![](/img/MutualInductance.jpg)
        ---

    
    1. [Current Controlled Current Source](/docs/SuperCircuits/Components/CurrentControlledCurrentSource.md)
        ---
    2.   # Current Controlled Current Source [Visualzation](/docs/SuperCircuits/Components/CurrentControlledCurrentSource.md)
            ![](/img/CurrentControlledCurrentSource.jpg)
        ---

    
    1. [Current Controlled Voltage Source](/docs/SuperCircuits/Components/CurrentControlledVoltageSource.md)
        ---
     2.  # Current Controlled Voltage Source [Visualzation](/docs/SuperCircuits/Components/CurrentControlledVoltageSource.md)
            ![](/img/CurrentControlledVoltageSource.jpg)
        ---

    
    1. [Voltage Controlled Current Source](/docs/SuperCircuits/Components/VoltageControlledCurrentSource.md)
        ---
       2.  # Voltage Controlled Current Source [Visualzation](/docs/SuperCircuits/Components/VoltageControlledCurrentSourcer.md)
        ![](/img/VoltageControlledCurrentSource.jpg)
        ---
    
    1. [Voltage Controlled Voltage Source](/docs/SuperCircuits/Components/VoltageControlledVoltageSource.md)

         ---
        2. # Voltage Controlled Voltage Source [Visualzation](/docs/SuperCircuits/Components/VoltageControlledVoltageSource.md)
        ![](/img/VoltageControlledVoltageSource.jpg)
        ---


## Overview

A prototype website to create a user-friendly, SPICE-like way to visualize and create Single Flux Quantum (SQF) circuits, based off of OpenCircuit, and with integration from JoSIM. Eventually, we want to fully-realize this software by building it from scratch, to be as efficient, and as accurate as possible.



## Context
Fifty years ago, a semiconductor revolution ushered in the era of Moore's Law, driving rapid technological advancements from cell phones to our communication landscape. However, consistent transistor growth is ending, raising concerns about the United States losing its semiconductor industry dominance. Adapting to this changing landscape, we must explore new technologies and collaborations to maintain our competitive edge and economic advantage.

SQF circuits are the future of computing. Using Josephson Junctions, they create a state of quantum flux, a current type with no resistance, allowing for high-speed computing with highly efficient power draw. 

Currently, no one allows for this visualization creation of SQF circuits. By creating a simple visualization software with intuitive controls, there will be a much lower skill ceiling in the design and learning of superconductive circuits. 

This tool was made to be used in educational settings, where its simplicity will make learning about SQF circuits much easier, as well as in professional settings, where its simple and intuitive nature will increase efficiency.


## Goals & Non-Goals

### Goals:
- Create a user-friendly way for users to make SFQ circuits
- Keep the low-overhead and system cost to make the program run smoothly
- Rework the UI of OpenCircuits to be more respective towards proper SFQ circuits

### Non-Goals:
- (list of things you DON'T plan on doing in this feature)



## Milestones

<Timeline 
    start="11/5/2023" 
    milestones={[{
        date: "Date 1",
        explanation: "Brief explanation",
    }, {
        date: "Date 2",
        explanation: "Brief explanation",
    }, {
        date: "Date 3",
        explanation: "Brief explanation",
    }]} 
    end="End Date" />



## Existing Solution


## Proposed Solution

(write a specific "walk-through" of how the solution fixes the problem)



## Alternative Solutions

- (describe other considered solutions and explain why they were not chosen)



## Testability

(describe how the issue/feature will be tested)



## Impact

(does this impact other parts of the project? i.e. potentially exposes security vulnerabilities,
 causes lag? What are some of the negative consequences and side effects?)



## Known Unknowns

(describe open issues that you aren't sure about)



## Detailed Scoping

(breakdown exactly HOW you plan on executing each part of the project,
go in order of when you plan doing each part as well
THIS IS THE PLACE TO VERY TECHNICAL ABOUT EXACT IMPLEMENTATION DETAILS
AND WILL MOST LIKELY BE THE LONGEST PART OF THE DESIGN DOC)


### Milestone 1

Detailed explanation


### Milestone 2

Detailed explanation


### Milestone 3

Detailed explanation



 [![OpenCircuits Repo](https://github.com/LukaBostick/OpenCircuits/blob/master/src/site/pages/digital/public/img/icons/superlogo.svg)](https://github.com/LukaBostick/OpenCircuits)

[![GitHub license](https://img.shields.io/github/license/OpenCircuits/OpenCircuits.svg)](https://github.com/OpenCircuits/OpenCircuits/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/OpenCircuits/OpenCircuits.svg)](https://github.com/OpenCircuits/OpenCircuits/graphs/contributors)
[![GitHub top language](https://img.shields.io/github/languages/top/OpenCircuits/OpenCircuits.svg)](https://github.com/OpenCircuits/OpenCircuits/search?l=javascript)
[![GitHub issues](https://img.shields.io/github/issues/OpenCircuits/OpenCircuits.svg)](https://github.com/OpenCircuits/OpenCircuits/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/OpenCircuits/OpenCircuits.svg)](https://github.com/OpenCircuits/OpenCircuits/commits/master)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/52689df193bd42d4b819ef670e2853b4)](https://www.codacy.com/gh/OpenCircuits/OpenCircuits?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OpenCircuits/OpenCircuits&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/OpenCircuits/OpenCircuits.svg?branch=master)](https://travis-ci.org/OpenCircuits/OpenCircuits)


## Contact Us

If you have a question or would like to recommend a feature, please reach out to contact@supercircuit.tech.


## LICENSING
OpenCircuits is under the GPL-3.0 license.
