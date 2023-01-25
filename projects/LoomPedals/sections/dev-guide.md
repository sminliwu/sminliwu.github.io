## Developer Guide

Grouped by feature/design goal. Work in progress -- currently the only people who have developed the Loom Pedals are Unstable Design Lab members, and we would love to collaborate with a broader user/developer community. Please contact me (S, shanel.wu@colorado.edu) or the Unstable Design Lab's general inbox (unstabledesignlab@gmail.com) with any suggestions/requests/feedback.

### Software interface (AdaCAD)

The Loom Pedals GUI (graphical user interface) is built on top of AdaCAD (digital weaving software), which in turn is built with the [Angular framework](https://angular.io/) for web development. I highly recommend having some knowledge/experience with Angular before diving into the AdaCAD GUI.

This section is in the process of incorporating generated documentation from Compodoc.

#### Quickstart

Make sure you have Node.JS, Node Package Manager, and Git already installed.

1. Download and install AdaCAD by following the instructions in the GitHub readme or [this video walkthrough](https://www.youtube.com/watch?v=HrjCqK-KCec).
2. Switch to the `pedals` branch of the AdaCAD repository.
3. If you will be using/testing the Loom Pedals with a TC2, also download the Loom Pedals driver software.
4. Open a terminal in the AdaCAD root folder and run `ng serve`.

#### Navigating and editing code

These suggestions are biased towards VS Code, which is my preferred code editor, but hopefully they're useful for whatever your editor of choice is. 

Angular apps tend to contain many *many* files, and I often find myself using the file explorer and document outline features of my editor just as much as the actual editing pane, in order to quickly skip around to the lines of code I need. AdaCAD is no exception; it's a still-growing app that just keeps generating exciting new features, so first familiarize yourself with the file organization before diving into the TypeScript code. Angular apps are organized into ***modules***, and most of AdaCAD's weaving functionality is in the `weaver`, `player`, and `mixer` modules, subfolders of the `src/app` folder within the repository. The features that interface with the Pedals are in the `player` module.

Modules are further broken down into ***components*** and ***services***. Components are the visual elements in an Angular app -- basically the boxes in your browser window. They consist of HTML, CSS, and TypeScript files.
If you want to change the layout of things on the screen, or the visual behavior (e.g. when something gets clicked) of elements, you'll mostly be working in the `.html` and `.css` files of components. 

The AdaCAD modules each have a top-level component, like the `PlayerComponent`, which is the *parent* to its constituent *child* components, like the `OpSequencerComponent`. A child component should be contained within a subfolder of its parent component.

If you want to change the function of components on the screen, or create new functionality for interacting with the loom, drafts, hardware, etc., you'll have to work in the `.ts` files, and primarily within the services. Services are the Angular background workers that *provide* data to the front-end components, which is why the code for services are all in the `providers` folder in the module.

A good guideline to follow is "services process data, while components render data". For example, let's say that we are making a simple feature to flip a draft along an axis. The component that the user will interact with is the `FlipperComponent` (`flipper.component.html`, `flipper.component.ts`, etc). We implement `flipDraft`, a function that flips the draft and transforms the interlacement data. This code should go into a service, maybe a service called `TransformsService` (`transforms.service.ts`) that provides several options for general draft transformations like flipping, rotating, shifting, etc. `FlipperComponent` can then reference `TransformsService` in its code (`flipper.component.ts`) and call the function when a user clicks a button, but it does not actually handle any of the data.

#### The Draft Player

As mentioned previously, AdaCAD features that interface with the pedals and TC2 are in the Draft Player (`player`) module. The Player ports over many of AdaCAD's base Operations, such as `flipx`, `rotate`, `tabby`, etc. Rather than applying these Operations to Drafts in a drag-and-drop interface to a tree structure (the AdaCAD mixer module), the Draft Player will apply Operations to Drafts in response to user inputs on the pedals. 

The `PlayerComponent` is divided into two subcomponents.

##### Weaving State subcomponent

This component provides the user with basic status information on the TC2 (e.g. whether or not one is connected, whether or not the TC2 is actively weaving).

##### Operation Sequencer subcomponent

This component allows the user to reconfigure which Operations are triggered by pedal inputs, define custom chains of Operations (Chain Operations), and the order in which the Sequencer will page through Operations/Chain Ops.

#### Helpful Resources

* 

### Hardware

In progress.