---
layout: project
title: Code Walkthrough - Random Combination Generator
season: Spring 2022

---

[intro text]

## .TXT File Loading

```
// SOURCE: https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
function loadFile() {
  var oFrame = document.getElementById("frmFile");
  var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
  while (strRawContents.indexOf("\r") >= 0) {
      strRawContents = strRawContents.replace("\r", "");
  }
  data = strRawContents.split("\n");
  data = data.filter(x => x != "")

  parseData();
  generateCombos();
  pickCombo();
  
  $("#daySelect").remove();
  $("#classData").attr("hidden", false);

  $("#text-entry").change(function() {
      currentCombo.setCon($("#text-entry").val().toString());
      updateLogDisplay();
  });
}
```

## Text Parsing

I separate the text string into an array of smaller strings according to the linebreaks.

```
const weeks = {
    "Computers and Thinking Frameworks": 2,
    "Internet and Net Neutrality": 3,
    "Black Box of Algorithms": 4,
    "Diversity and Representation": 5,
    "Digital Divides and ICTD": 6,
}
```

```
function parseData() {
  let weekIndex = [];
  for (var i in data) { // see if this line is a topic line
    for (var key in weeks) {
      if (data[i].includes(key)) {
        weekIndex.push([parseInt(i), weeks[key]]);
        break;
      }
    }
  }
  for (var x=0; x < weekIndex.length; x++) {
      let pt = weekIndex[x];
      let week = pt[1];
      let stop;
      if (x < weekIndex.length - 1) {
        stop = weekIndex[x+1][0];
      } else { stop = data.length-1; }
      if (stop-pt[0] > 1) {
          if (data[pt[0]+1].includes("Idea / Key Term")) {
              let here = pt[0] + 3;
              while (here < stop) {
                  let itemName = data[here];
                  let itemDesc = data[here+1];
                  choices[week].push(new Item(numItems, week, itemName, itemDesc));               
                  numItems += 1;
                  here += 2;
              }
          }
      }
  }
}
```

## Helper Classes: Item and Combo

## "Random" Generation and Selection

```
function randomUpTo(x) {
    return Math.floor(Math.random()*x);
}

function chance(percent) {
    // returns true [percent]% of the time by pseudo-random chance
    if (percent >= 100) {
        return true;
    } else if (percent <= 0) {
        return false;
    } else {
        var roll = Math.random()*100;
        if (roll >= percent) {
            return true;
        } else {
            return false;
        }
    }
}
```

```
function generateCombos() {
    let weekOptions = [2, 3, 4, 5, 6];
    let weekPairs = [];
    while (weekOptions.length > 0) {
        let optionA = weekOptions.shift();
        // console.log(weekOptions);
        for (var y in weekOptions) {
            weekPairs.push([optionA, weekOptions[y]]);
        }
    }
    for (var p of weekPairs) {
        // console.log(p);
        let weekA = p[0];
        let weekB = p[1];
        if (choices[weekA] && choices[weekB]) {
            for (var itemA of choices[weekA]) {
                for (var itemB of choices[weekB]) {
                    allCombos.push(new Combo(allCombos.length, itemA, itemB));
                }
            }
        }
    }
    $("#skipped").attr("disabled", true);
}
```