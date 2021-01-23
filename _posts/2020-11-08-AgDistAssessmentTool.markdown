---
layout: post
title: "Agricultural District Assessment Tool"
date: 2020-11-29
description:
image: /assets/images/GallerySize/ag_dist_assessment_tool.png
author: Brendan Cullen
tags:
  - Web Development
  - Data Science
---
![](/assets/images/OriginalSize/ag_dist_assessment_tool.png)

This tool was developed using the ArcGIS API for Javascript to gain comments from the public regarding the current boundaries of Chautauqua County's Agricultural Districts. Comments provided will be reviewed by planning staff at the Chautauqua County Department of Planning & Development to determine modifications to the district boundaries. This is a prototype, and is not live.

The most distinct feature of this web app is the ability to add points to the map and enter the text that will be shown in the popup. To do this, I created a point layer in ArcGIS Online and set it to be editable. I then set up the editor widget to be able to add points to the layer.  After the user opens the editor and clicks on the map, they are prompted to provide comment and their contact information. The user can type in the information and hit submit. Right away they can see the point they added to the map and be able to click on it to read their comments (and other users' comments) in a popup. To keep the UI clean, I also used the Expand Widget, which minimizes the editor widget to the Pencil Icon when it is not actively being used.

Link: [https://bren96.github.io/Ag_Dist_Assessment_Tool/](https://bren96.github.io/Ag_Dist_Assessment_Tool/)

What I Learned: ArcGIS API for Javascript, Dojo Javascript Framework, Citizen GIS, Tile Package Creation, Parallel GeoProcessing.
