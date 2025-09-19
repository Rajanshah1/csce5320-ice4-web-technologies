// Rajan Shah — ICE-4 — D3.js Natural Scene (Figma-style Tree snapped to ground)

const svg = d3.select("#scene");
const W = +svg.attr("width"), H = +svg.attr("height");

// --- Background ---
svg.append("rect").attr("width", W).attr("height", H).attr("fill", "#E0F7FA"); // sky
svg.append("rect").attr("y", H-110).attr("width", W).attr("height", 110).attr("fill", "#A7DCA7"); // ground strip (top at H-110)
svg.append("circle").attr("cx", 80).attr("cy", 80).attr("r", 55).attr("fill", "#FFD54F"); // sun

// Helper: group at (x,y) with scale
function gAt(x, y, s=1) {
  return svg.append("g").attr("transform", `translate(${x},${y}) scale(${s})`);
}

// --- Figma-style tree (trunk + multiple canopy ellipses + ground ellipse) ---
// Anchor is the TRUNK TOP-LEFT in the *scaled* coordinate system.
function drawFigmaTree(anchorX, anchorY, s=1) {
  const g = gAt(anchorX, anchorY, s);

  // Trunk (original: x=185, y=343, w=132, h=259) -> rebased so trunk top-left is (0,0)
  g.append("rect")
    .attr("x", 0).attr("y", 0)
    .attr("width", 132).attr("height", 259)
    .attr("fill", "#8B5E3C");

  // Big canopy ellipse (cx=250, cy=194, rx=250, ry=156) -> offset from trunk top-left: (65,-149)
  g.append("ellipse")
    .attr("cx", 65).attr("cy", -149)
    .attr("rx", 250).attr("ry", 156)
    .attr("fill", "#32CD32");

  // Ground ellipse (cx=259, cy=638, rx=241, ry=36) -> offset: (74, 295)
  g.append("ellipse")
    .attr("cx", 74).attr("cy", 295)
    .attr("rx", 241).attr("ry", 36)
    .attr("fill", "#D9D9D9");

  // Additional canopy ellipses:
  g.append("ellipse")
    .attr("cx", 54.5).attr("cy", -231.5)
    .attr("rx", 110.5).attr("ry", 111.5)
    .attr("fill", "#32CD32");

  g.append("ellipse")
    .attr("cx", -46.5).attr("cy", -70.5)
    .attr("rx", 120.5).attr("ry", 110.5)
    .attr("fill", "#32CD32");

  g.append("ellipse")
    .attr("cx", 165).attr("cy", -76.5)
    .attr("rx", 123).attr("ry", 104.5)
    .attr("fill", "#32CD32");
}

// ---- Place the tree so the trunk bottom touches ground top (H-110) ----
const TREE_SCALE = 0.40;
// trunk height = 259 (in original), so scaled trunk height = 259 * TREE_SCALE
// We want: anchorY + 259*s = H - 110  ==>  anchorY = H - 110 - 259*s
const treeAnchorX = W - 320;                // nudge from right edge
const treeAnchorY = H - 110 - 259 * TREE_SCALE;
drawFigmaTree(treeAnchorX, treeAnchorY, TREE_SCALE);

// --- Cat position (unchanged) ---
const catX = 220;
const catY = H - 120;

// --- Flower at midpoint between cat and tree (keeps layout neat) ---
const flowerX = Math.round((catX + treeAnchorX) / 2);

// Flower stem
svg.append("line")
   .attr("x1", flowerX).attr("y1", H-80)
   .attr("x2", flowerX).attr("y2", H-140)
   .attr("stroke", "#388E3C")
   .attr("stroke-width", 6);

// Flower center
svg.append("circle")
   .attr("cx", flowerX).attr("cy", H-150)
   .attr("r", 15)
   .attr("fill", "#FBC02D");

// Flower petals
for (let i = 0; i < 6; i++) {
  svg.append("ellipse")
     .attr("cx", flowerX + 30 * Math.cos(i * Math.PI/3))
     .attr("cy", H-150 + 30 * Math.sin(i * Math.PI/3))
     .attr("rx", 15).attr("ry", 25)
     .attr("fill", "#E91E63")
     .attr("opacity", 0.9);
}

// --- Animal helpers ---
function drawBird(x, y, s=1, body="#60A5FA", wing="#3B82F6") {
  const g = gAt(x, y, s);
  g.append("ellipse").attr("cx",0).attr("cy",0).attr("rx",28).attr("ry",18).attr("fill",body);
  g.append("path").attr("d","M -2 0 q -26 -16 -26 0 q 26 16 26 0 z").attr("fill",wing);
  g.append("polygon").attr("points","28,0 40,4 28,8").attr("fill","#F59E0B");
  g.append("circle").attr("cx",10).attr("cy",-6).attr("r",2.5).attr("fill","#111827");
}

function drawButterfly(x, y, s=1, left="#A78BFA", right="#F472B6") {
  const g = gAt(x, y, s);
  g.append("circle").attr("cx",-10).attr("cy",0).attr("r",12).attr("fill",left).attr("opacity",0.9);
  g.append("circle").attr("cx",10).attr("cy",0).attr("r",12).attr("fill",right).attr("opacity",0.9);
  g.append("rect").attr("x",-2).attr("y",-12).attr("width",4).attr("height",24).attr("fill","#374151").attr("rx",2);
  g.append("path").attr("d","M -2 -12 q -8 -10 -14 -2").attr("stroke","#374151").attr("fill","none").attr("stroke-width",2);
  g.append("path").attr("d","M  2 -12 q  8 -10  14 -2").attr("stroke","#374151").attr("fill","none").attr("stroke-width",2);
}

function drawCat(x, y, s=1) {
  const g = gAt(x, y, s);
  g.append("ellipse").attr("cx",0).attr("cy",12).attr("rx",38).attr("ry",24).attr("fill","#9CA3AF");
  g.append("circle").attr("cx",-20).attr("cy",-6).attr("r",16).attr("fill","#9CA3AF");
  g.append("polygon").attr("points","-32,-18 -14,-18 -23,-34").attr("fill","#9CA3AF");
  g.append("polygon").attr("points","-8,-18 10,-18 1,-34").attr("fill","#9CA3AF");
  g.append("circle").attr("cx",-26).attr("cy",-8).attr("r",2).attr("fill","#111827");
  g.append("circle").attr("cx",-14).attr("cy",-8).attr("r",2).attr("fill","#111827");
  g.append("circle").attr("cx",-20).attr("cy",-4).attr("r",2).attr("fill","#EF4444");
  g.append("path").attr("d","M 30,12 q 22,-6 20,16").attr("stroke","#9CA3AF").attr("fill","none").attr("stroke-width",6).attr("stroke-linecap","round");
  g.append("rect").attr("x",-8).attr("y",24).attr("width",6).attr("height",12).attr("fill","#9CA3AF").attr("rx",2);
  g.append("rect").attr("x",-26).attr("y",24).attr("width",6).attr("height",12).attr("fill","#9CA3AF").attr("rx",2);
}

function drawDog(x, y, s=1) {
  const g = gAt(x, y, s);
  g.append("ellipse").attr("cx",0).attr("cy",10).attr("rx",42).attr("ry",26).attr("fill","#C4A484");
  g.append("circle").attr("cx",-24).attr("cy",-2).attr("r",16).attr("fill","#C4A484");
  g.append("path").attr("d","M -32,-8 q -8,10 2,16").attr("stroke","#8B5E3C").attr("stroke-width",6).attr("stroke-linecap","round");
  g.append("circle").attr("cx",-28).attr("cy",-6).attr("r",2.5).attr("fill","#111827");
  g.append("circle").attr("cx",-20).attr("cy",-6).attr("r",2.5).attr("fill","#111827");
  g.append("circle").attr("cx",-24).attr("cy",-2).attr("r",2.5).attr("fill","#111827");
  g.append("rect").attr("x",-6).attr("y",22).attr("width",7).attr("height",12).attr("fill","#C4A484").attr("rx",2);
  g.append("rect").attr("x",-26).attr("y",22).attr("width",7).attr("height",12).attr("fill","#C4A484").attr("rx",2);
  g.append("path").attr("d","M 34,10 q 18,-10 12,12").attr("stroke","#8B5E3C").attr("stroke-width",5).attr("stroke-linecap","round");
}

// --- Place animals ---
drawBird(220, 120, 1.0);
drawBird(300, 80, 0.9, "#4FC3F7", "#2196F3");
drawButterfly(520, 120, 1.2, "#8B5CF6", "#F472B6");
drawButterfly(580, 170, 0.9, "#22D3EE", "#F59E0B");

// Put the cat & dog on the ground
drawCat(catX, catY, 1.2);
drawDog(340, H-120, 1.2);

// --- Signature ---
svg.append("text")
  .attr("x", 20).attr("y", H-20)
  .attr("font-family", "sans-serif").attr("font-size", 14)
  .attr("fill", "#111827")
  .text("Rajan Shah — D3 Natural Scene (Figma-style Tree grounded, Flower, Cat, Dog, Birds, Butterflies)");
