const svg = d3.select("#scene");
const W = +svg.attr("width");
const H = +svg.attr("height");

svg.append("rect").attr("width",W).attr("height",H).attr("fill","#E0F2FE");
svg.append("rect").attr("y",H-80).attr("width",W).attr("height",80).attr("fill","#BBF7D0");
svg.append("circle").attr("cx",60).attr("cy",60).attr("r",30).attr("fill","#FDE047");
svg.append("rect").attr("x",360).attr("y",H-160).attr("width",22).attr("height",80).attr("fill","#8B5E3C").attr("rx",5);
svg.append("circle").attr("cx",371).attr("cy",H-175).attr("r",40).attr("fill","#22C55E");
for (let i=0;i<6;i++){
  svg.append("ellipse")
     .attr("cx", 150 + 24*Math.cos(i*Math.PI/3))
     .attr("cy", H-110 + 24*Math.sin(i*Math.PI/3))
     .attr("rx", 12).attr("ry", 18)
     .attr("fill","#FB7185").attr("opacity",0.95);
}
