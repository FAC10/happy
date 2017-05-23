var graph = {
 "nodes": [{
   "name": "1",
   "rating": 90,
   "id": 2951
 }, {
   "name": "2",
   "rating": 80,
   "id": 654654
 }, {
   "name": "3",
   "rating": 80,
   "id": 6546544
 }, {
   "name": "4",
   "rating": 1,
   "id": 68987978
 }, {
   "name": "5",
   "rating": 1,
   "id": 9878933
 }, {
   "name": "6",
   "rating": 1,
   "id": 6161
 }, {
   "name": "7",
   "rating": 1,
   "id": 64654
 }, {
   "name": "8",
   "rating": 20,
   "id": 354654
 }, {
   "name": "9",
   "rating": 50,
   "id": 8494
 }, {
   "name": "10",
   "rating": 1,
   "id": 6846874
 }, {
   "name": "11",
   "rating": 1,
   "id": 5487
 }, {
   "name": "12",
   "rating": 80,
   "id": "parfum_kenzo"
 }, {
   "name": "13",
   "rating": 1,
   "id": 65465465
 }, {
   "name": "14",
   "rating": 90,
   "id": "jungle_de_kenzo"
 }, {
   "name": "15",
   "rating": 20,
   "id": 313514
 }, {
   "name": "16",
   "rating": 40,
   "id": 36543614
 }, {
   "name": "17",
   "rating": 100,
   "id": "Yann_YA645"
 }, {
   "name": "18",
   "rating": 1,
   "id": 97413
 }, {
   "name": "19",
   "rating": 1,
   "id": 97414
 }, {
   "name": "20",
   "rating": 100,
   "id": 976431231
 }, {
   "name": "21",
   "rating": 1,
   "id": 9416
 }, {
   "name": "22",
   "rating": 1,
   "id": 998949
 }, {
   "name": "23",
   "rating": 100,
   "id": 984941
 }, {
   "name": "24",
   "rating": 100,
   "id": "99843"
 }, {
   "name": "25",
   "rating": 1,
   "id": 94915
 }, {
   "name": "26",
   "rating": 1,
   "id": 913134
 }, {
   "name": "27",
   "rating": 1,
   "id": 9134371
 }, {
   "name": "28",
   "rating": 1,
   "id": 971
 }, {
   "name": "29",
   "rating": 1,
   "id": 971
 },
 {
   "name": "30",
   "rating": 1,
   "id": 1
 }],
 "links": [{
   "source": 6,
   "target": 5,
   "value": 6,
   "label": "publishedOn"
 }, {
   "source": 8,
   "target": 5,
   "value": 6,
   "label": "publishedOn"
 }, {
   "source": 7,
   "target": 1,
   "value": 4,
   "label": "containsKeyword"
 }, {
   "source": 8,
   "target": 10,
   "value": 3,
   "label": "containsKeyword"
 }, {
   "source": 7,
   "target": 14,
   "value": 4,
   "label": "publishedBy"
 }, {
   "source": 8,
   "target": 15,
   "value": 6,
   "label": "publishedBy"
 }, {
   "source": 9,
   "target": 1,
   "value": 6,
   "label": "depicts"
 }, {
   "source": 10,
   "target": 1,
   "value": 6,
   "label": "depicts"
 }, {
   "source": 16,
   "target": 1,
   "value": 6,
   "label": "manageWebsite"
 }, {
   "source": 27,
   "target": 27,
   "value": 6,
   "label": "byitself"
 }, {
   "source": 16,
   "target": 2,
   "value": 5,
   "label": "manageWebsite"
 }, {
   "source": 16,
   "target": 3,
   "value": 6,
   "label": "manageWebsite"
 }, {
   "source": 16,
   "target": 4,
   "value": 6,
   "label": "manageWebsite"
 }, {
   "source": 19,
   "target": 18,
   "value": 2,
   "label": "postedOn"
 }, {
   "source": 18,
   "target": 1,
   "value": 6,
   "label": "childOf"
 }, {
   "source": 17,
   "target": 19,
   "value": 8,
   "label": "describes"
 }, {
   "source": 18,
   "target": 11,
   "value": 6,
   "label": "containsKeyword"
 }, {
   "source": 17,
   "target": 13,
   "value": 3,
   "label": "containsKeyword"
 }, {
   "source": 20,
   "target": 13,
   "value": 3,
   "label": "containsKeyword"
 }, {
   "source": 20,
   "target": 21,
   "value": 3,
   "label": "postedOn"
 }, {
   "source": 22,
   "target": 20,
   "value": 3,
   "label": "postedOn"
 }, {
   "source": 23,
   "target": 21,
   "value": 3,
   "label": "manageWebsite"
 }, {
   "source": 23,
   "target": 24,
   "value": 3,
   "label": "manageWebsite"
 }, {
   "source": 23,
   "target": 25,
   "value": 3,
   "label": "manageWebsite"
 }, {
   "source": 23,
   "target": 26,
   "value": 3,
   "label": "maa"
 }, {
   "source": 20,
   "target": 28,
   "value": 3,
   "label": "maa"
 }, {
   "source": 13,
   "target": 21,
   "value": 3,
   "label": "maa"
 }, {
   "source": 11,
   "target": 19,
   "value": 3,
   "label": "maa"
 }]
}


var margin = {
 top: -5,
 right: -5,
 bottom: -5,
 left: -5
};

var width = 600 - margin.left - margin.right,
 height = 600 - margin.top - margin.bottom;

var color = d3.scale.category20b();

var force = d3.layout.force()
 .charge(-1000)
 .linkDistance(50)
 .size([width + margin.left + margin.right, height + margin.top + margin.bottom]);

var zoom = d3.behavior.zoom()
 .scaleExtent([1, 10])
 .on("zoom", zoomed);

var drag = d3.behavior.drag()
 .origin(function(d) {
   return d;
 })
 .on("dragstart", dragstarted)
 .on("drag", dragged)
 .on("dragend", dragended);


var timeOuts = [];

var svg = d3.select("#map").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
 .call(zoom);

var rect = svg.append("rect")
 .attr("width", width)
 .attr("height", height)
 .style("fill", "none")
 .style("pointer-events", "all");

var container = svg.append("g");




// initialize layout (for reset button)
var initForce = function() {


 // clear svg
 container.selectAll('*').remove();

 // counter
 var countern = 0;



 force
   .nodes(graph.nodes)
   .links(graph.links)
   .start();

 graph.links.forEach(function(d, i) {
   timeOuts.push(setTimeout(function() {


     var nodes = graph.nodes.filter(function(n, i) {
       return d.source.index == i || d.target.index == i
     });


     // add one to counter
     countern = countern + 1;
    //  console.log(countern); //just to check

     // add edge  - line or path depending on what works below on tick()
     container.append("line")
//       container.append("path")
       .datum(d)
       .attr("class", "link")
       .style("stroke-width", 20)
       .style("stroke","white")

       // delay on line appearing - do i need i * 10 ???
       // delay is half delay of node.
       .transition()
       .delay(function(d, i) {
         return i * 10;
       }) //do i need this ?
       .duration(350)
       .style("stroke-width", function(d) {
         return Math.sqrt(d.value+50);
       })
     .style("stroke", 'white')
     ;

     nodes.forEach(function(node) {
       var nodeG = container.append("g")
         .datum(node)
         .attr("class", "node")
         .attr("cx", function(d) {
           return d.x;
         })
         .attr("cy", function(d) {
           return d.y;
         })
         .call(drag);



       // add node
       // add a radius field here to source/target nodes.
       nodeG.append("circle")
         .style('opacity', 0)
         .attr("r", function(d) {
             d.radius = d.weight * 2 + 15;
             return d.radius;
         })
        .style("fill", "white")
         // delay on line appearing - do i need i * 10 ???
         // delay is half delay of node.
         .transition()
         .delay(function(d, i) {
           return i * 10;
         })
         .duration(700)
         .style('opacity', 1);



     });
     force.resume();
   }, 100 * i));
 });





// this is determining the x/y coordinates of each edge/link
// adjust this with trig. to change gap between edges.

/// see http://stackoverflow.com/questions/16660193/get-arrowheads-to-point-at-outer-edge-of-node-in-d3/16754080#16754080


 force.on("tick", function(e) {
   container.selectAll(".link")

//// use paths for this
//       .attr("d", function(d) {
//           // Total difference in x and y from source to target
//           diffX = d.target.x - d.source.x;
//           diffY = d.target.y - d.source.y;

          // Length of path from center of source node to center of target node
//            pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

          // x and y distances from center to outside edge of target node
//            offsetX = (diffX * d.target.radius ) / pathLength;
//            offsetY = (diffY * d.target.radius ) / pathLength;

//            return "M" + d.source.x + "," + d.source.y + "L" + (d.target.x - offsetX) + "," + (d.target.y - offsetY);

//     });


/// use lines for this
   .attr("x1", function(d) {
       return d.source.x;
     })
     //.attr("x1", getx1)   // if want to add separate function.
     .attr("y1", function(d) {
       return d.source.y;
     })
     .attr("x2", function(d) {
       return d.target.x;
     })
     .attr("y2", function(d) {
       return d.target.y;
     })

;




   container.selectAll(".node").attr("transform", function(d) {
     return "translate(" + d.x + "," + d.y + ")";
   });

   container.select("text").remove()  // remove previous text for counter... could do this by adding class .counter


// add counter
 container
      .append("text")
      .attr("x", 555 )
      .attr("y", 60 )
      .style("text-anchor", "middle")
      // .text(countern)
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "#4d648d");
 });




 var linkedByIndex = {};
 graph.links.forEach(function(d) {
   linkedByIndex[d.source.index + "," + d.target.index] = 1;
 });

 function isConnected(a, b) {
   return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index];
 }

 container.selectAll(".node").on("mouseover", function(d) {

   container.selectAll(".node").classed("node-active", function(o) {
     thisOpacity = isConnected(d, o) ? true : false;
     this.setAttribute('fill-opacity', thisOpacity);
     return thisOpacity;
   });

   container.selectAll(".link").classed("link-active", function(o) {
     return o.source === d || o.target === d ? true : false;
   });

   d3.select(this).classed("node-active", true);
   d3.select(this).select("circle").transition()
     .duration(700)
     .attr("r", (d.weight * 2 + 12) * 1.5);
 })

 .on("mouseout", function(d) {

   container.selectAll(".node").classed("node-active", false);
   container.selectAll(".link").classed("link-active", false);

   d3.select(this).select("circle").transition()
     .duration(700)
     .attr("r", d.weight * 2 + 12);
 });


}; //initforce end




//// functions .............

// if want to set edge attributes directly
// function getx1 (d) {
//         return d.source.x;
//       }



function zoomed() {
 container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function dragstarted(d) {
 d3.event.sourceEvent.stopPropagation();

 d3.select(this).classed("dragging", true);
 force.start();
}

function dragged(d) {

 d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

}

function dragended(d) {

 d3.select(this).classed("dragging", false);
}

// When the user clicks on the "Reset" button, we'll
// start the whole process over again.


d3.select('#reset').on('click', function() {


 // Re-initialize to start over again.
 timeOuts.forEach(function(timeOutFn) {
   clearTimeout(timeOutFn);


 });
 initForce();
 // attachFunction();

});

// function attachFunction() {
//   var memories = document.querySelector("node");
//   console.log(memories);
//   function addAlert(){
//     alert('1');
//   }
//   memories.onclick = addAlert();
// }

// Now we can initialize the force layout so that it's ready
// to run.

initForce();
