---
layout: post
title: "Jamestown Bus Router"
date: 2020-12-01
description:
image: /assets/images/GallerySize/JamestownBusRouter.png
author: Brendan Cullen
tags:
  - Web Development
---
![](/assets/images/OriginalSize/JamestownBusRouter.png)

For my Open Web Mapping final project, I developed a bus route trip planner for my local city, Jamestown, NY. This tool could be a benefit to the many people in Jamestown that currently use the bus system, as well as to those looking for additional transit options. The goal was to develop a web-map similar to Google Maps, in that the user selects the start and end location, and the application calculates and displays the shortest route. Rather than using all roads in the network, my application would use just the routes connecting the bus stations. Because of this, I had to develop my own spatial network that took into account the direction of the bus routes and routes that overlap (sometimes in different directions). To make things simpler, rather than using speed/time as the cost to calculate the shortest path, I used the distance of the route.

Leaflet.js was used for the core web-map features, such as interactive layers, zooming, and panning. Turf.js was used to perform client-side geoprocessing, specifically to calculate distances between features. GeoJSON-Path-Finder was used for client-side spatial network analysis, specifically for calculating the cost/weight of all the nodes in the network and returning the shortest path. GeoJSON-Path-Finder had to be installed using npm, the Node.js package manager. Since I wanted to be able to run this application purely in the browser, I had to “bundle” the application into a single javascript file that could be sourced in the header of my index.html file. To do this, I used Browserify. All the libraries and packages used for this project are open-source.

Link: [https://github.com/bren96/Jamestown_Bus_Router](https://github.com/bren96/Jamestown_Bus_Router)

What I Learned: Leaflet.js, Turf.js, Spatial Network Analysis, Multi-step Routing, Browserify, NPM (Node.js)
