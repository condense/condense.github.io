---
layout: post
category: thinking
title: "Voronoi Tessellation To Explore Weather Station Density"
description: ""
author: Mark Hepburn
tags: []
---
{% include JB/setup %}

Do what now?

We love data visualisations.  They can help you explore a large amount
of data more intuitively, helping you spot trends and relationships
quickly that you wouldn't have noticed in the raw numbers, and they
can tell a convincing story once you have the insights.  If nothing
else, they often simply look damn cool.

Recently we were exploring some historical weather observations
data---stay tuned for more possible posts---and (partly for fun)
decided to plot the stations themselves.  A really handy visualisation
for this purpose is a Voronoi Tessellation.  It's probably easiest to
start with the result:


<style>
 .aus {
   fill: #ddd;
 }
 circle {
   fill: black;
 }
 .voronoi {
   fill-opacity: 0.1;
   stroke: black;
 }
 .voronoi:hover {
   fill-opacity: 0.4;
 }
</style>
<div id="map"></div>

(The map is interactive, so you can use the mouse-wheel to zoom, and
drag to pan around as normal.)

What's going on here?  A single cell in a Voronoi tessellation captures
all the area around a point that is closest to that point and no
others.  If you look at any individual line, you will notice it is
exactly half-way between two points: if you draw all those lines
between all neighbouring points, you wind up with a Voronoi
tessellation.[^1]

So why would you actually do this?  Well, as you can see it's a nice
way of getting an overview of spatial point data, particularly once
you start adding extra data---for example, colouring the cells to
denote properties such as maximum temperature for a region (the
colours in our example are purely random).  Another use is as part of
a UI; sometimes you want people to click on a point, but small points
are easy to miss... by (silently) using the area *around* the point as
the target you make it much easier for people to click.  One of the
first uses historically was by a physician called John Snow in 1854 to
[derive his theory](http://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak)
about the origins of a cholera outbreak, by outlining regions around
water pumps.

Also, they're just fun.

[^1]: The exact algorithm for doing this efficiently is
    [quite a bit more sophisticated](http://www.ams.org/samplings/feature-column/fcarc-voronoi),
    but the intuition is fairly easy.

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script>
/* global topojson, d3, queue */

var w = 600,
    h = 600;

var x0 = 146.45,
    y0 = -41.78,
    pad = 4;

var xmin = x0 - pad,
    ymin = y0 - pad,
    xmax = x0 + pad,
    ymax = y0 + pad;


var svg = d3.select('#map')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

var projection = d3.geo.mercator()
  .center([x0, y0])
  .translate([300,300])
  .scale(6000);

var colours = d3.scale.category20c();

var path = d3.geo.path()
  .pointRadius(1)
  .projection(projection);

function drawGeo(svg, aus) {
  var subunits = topojson.feature(aus, aus.objects.subunits);

  svg.append('path')
    .datum(subunits)
    .attr('class', 'aus')
    .attr('d', path);
}


function polygon(d) {
  return 'M' + d.map(projection).join('L') + 'Z';
}

function drawGrid(svg, vertices) {
  svg.append('path')
    .datum({
      type: 'MultiPoint',
      coordinates: vertices.map(function(d) { return [+d.lon, +d.lat]; })
    })
    .attr('class', 'points')
    .attr('d', path);

  var labelledVertices = vertices.map(function(d) {
    return {
      title: d.name,
      coords: [+d.lon, +d.lat]
    };
  });

  var voronoi = d3.geom.voronoi()
    .clipExtent([[xmin, ymin], [xmax, ymax]])
    .x(function(d) { return d.coords[0]; })
    .y(function(d) { return d.coords[1]; });

  svg.append('g').selectAll('path')
    .data(voronoi(labelledVertices))
  .enter().append('path')
    .attr('class', 'voronoi')
    .attr('fill', function(d, i) { return colours(i); })
    .attr('d', polygon)
    .append('title')
    .text(function(d) { return d.point.title; });
}

var _scale = projection.scale();
function ready(error, aus, data) {
  if (error) return console.error(error);

  drawGeo(svg, aus);

  drawGrid(svg, data);

  var zoom = d3.behavior.zoom()
    .scaleExtent([1,10])
    .translate(projection.translate())
    .on('zoom', function() {
      var e = d3.event, t = e.translate;
      // Calculate projected min,max coords, cache previous
      // translation and get the diff, check if that takes us outside
      // the bounds
      var minxy = projection([xmin, ymin]),
          maxxy = projection([xmax, ymax]);
      var oldtrans = projection.translate(),
          dx       = t[0] - oldtrans[0],
          dy       = t[1] - oldtrans[1];
      var tx = minxy[0] + dx > 0 ? oldtrans[0] : maxxy[0] + dx < w ? oldtrans[0] : t[0],
          ty = minxy[1] + dy < h ? oldtrans[1] : maxxy[1] + dy > 0? oldtrans[1] : t[1];

      projection.translate([tx, ty]).scale(e.scale * _scale);

      zoom.translate([tx, ty]);
      zoom.scale(e.scale);

      svg.selectAll('path.aus').attr('d', path);
      svg.selectAll('path.points').attr('d', path);
      svg.selectAll('path.voronoi').attr('d', polygon);
    });

  svg.call(zoom);
}


queue()
  .defer(d3.json, '/assets/data/tas.json')
  .defer(d3.csv, '/assets/data/tas-stations.csv')
  .await(ready);
</script>
