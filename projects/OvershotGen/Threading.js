// A general draft quadrant container class
class DraftContainer {
  // declare fields
  height;
  width;

  // 2D arrays for boolean data
  rawData; // stores literals; e.g. threading, treadling
  profile; // stores a simplified profile view
  displayData; // pointer to which view is displayed

  // track user inputs
  profileView = false;
  inputArray;

  constructor(h, w) {
    this.height = h;
    this.width = w;

    // create new 2D arrays of all false booleans
    this.rawData = new Array(this.height);
    this.profile = new Array(this.height);
    for (var i = 0; i < this.height; i++) {
      this.rawData[i] = new Array(this.width);
      this.profile[i] = new Array(this.width);
      for (var j = 0; j < this.width; j++) {
        this.rawData[i][j] = false;
        this.profile[i][j] = false;
      }
    }
    this.displayData = this.rawData;
  }

  display() {
    // equiv to draw(), leave empty for pure data object
  }

  updateDisplay() {
    if (this.profileView) {
      this.displayData = this.profile;
    } else {
      this.displayData = this.rawData;
    }
  }

  // resizing methods, update both rawData and profileData
  addRow() {
    this.rawData.push(new Array(this.width));
    this.profile.push(new Array(this.width));
    for (var i = 0; i < this.width; i++) {
      this.rawData[this.height][i] = false;
      this.profile[this.height][i] = false;
    }
    this.height++;
  }

  delRow() {
    this.rawData.pop();
    this.profile.pop();
    this.height--;
  }

  addCol() {
    // add a new column to each row of the data arrays
    for (var i = 0; i < this.height; i++) {
      this.rawData[i].push(false);
      this.profile[i].push(false);
    }
    this.width++;
  }

  delCol() {
    for (var i = 0; i < this.height; i++) {
      this.rawData[i].pop();
      this.profile[i].pop();
    }
    this.width--;
  }
}

// A Threading class, representing threading quadrant of a draft
class Threading extends DraftContainer {
  // declare fields
  // loom parameters
  shafts;
  warps;
  
  // pattern data - 2D boolean arrays
  threading;
  
  // track user inputs
  // DIRECTION: if true, pattern progresses thru shafts 1234
  // if false, progresses 4321
  direction = true; 
  currentShaft = 0;
  threadingCount = 0;
  warpInputs = 0;
  threadingInputs; // 1D array of user inputs
  
  // contructor, equiv to setup()
  constructor(s, w) {
    super(s, w);
    this.shafts = this.height;
    this.warps = this.width;
    
    this.threading = this.rawData;
    this.threadingInputs = new Array();
    this.displayData = this.threading;
  }
  
  // functionality
  addWarp() { 
    // add 1 warp
    this.warps++;
    this.addCol();    
    //updateDisplay();
  }
  
  delWarp() {
    this.warps--;
    // check if you're cutting into an existing block
    if (this.warps < this.threadingCount) {
      this.popBlock();
    }
    
    this.delCol();
    //updateDisplay();
  }

  // updateDisplay() {
  //   if (this.profileView) {
  //     this.displayData = this.profile;
  //   } else {
  //     this.displayData = this.threading;
  //   }
  // }
  
  pushBlock(size) {
    //console.log(currentShaft);
    // add a threading block of specified size (1, 3, 5) to draft
    if (size != 1 && size != 3 && size != 5) {
      return false; // error, size needs to be 1, 3, or 5
    }
    // must have enough empty warps left for the block
    if (this.threadingCount + size > this.warps) {
      return false;
    }
    // update threadingInputs (push size to array)
    this.threadingInputs[this.warpInputs] = size;
    // update threading array
    // size 1 block: true on currentShaft
    if (size == 1) {
      this.threading[this.currentShaft][this.threadingCount] = true;
    }
    // size 3 block: currentShaft, nextShaft, currentShaft
    else if (size == 3) {
      this.threading[this.currentShaft][this.threadingCount] = true;
      this.threading[this.next(this.currentShaft)][this.threadingCount+1] = true;
      this.threading[this.currentShaft][this.threadingCount+2] = true;
    }
    // size 5 block: current, next, current, next, current
    else if (size == 5) {
      this.threading[this.currentShaft][this.threadingCount] = true;
      this.threading[this.next(this.currentShaft)][this.threadingCount+1] = true;
      this.threading[this.currentShaft][this.threadingCount+2] = true;
      this.threading[this.next(this.currentShaft)][this.threadingCount+3] = true;
      this.threading[this.currentShaft][this.threadingCount+4] = true;
    }
    this.threadingCount += size;
    this.warpInputs++;
    
    if (this.direction) {
      this.currentShaft++;
    } else { this.currentShaft += this.shafts-1; }
    this.currentShaft %= this.shafts;
    if (this.profileView) {
      this.updateProfile();
    }
    return true;
  }
  
  popBlock() {
    // removes the most recently-added threading block
    if (this.warpInputs == 0) {
      // if there are no threading blocks inputted, we're done
      return true;
    }
    if (this.direction) {
      this.currentShaft += this.shafts-1;
    } else { this.currentShaft++; }
    this.currentShaft %= this.shafts;
    
    this.warpInputs--;
    var size = this.threadingInputs[this.warpInputs];
    this.threadingCount -= size;
    if (size != 1 && size != 3 && size != 5) {
      return false; // error, size needs to be 1, 3, or 5
    }
    if (size == 1) {
      // remove block of size 1
      for (var s = 0; s < this.shafts; s++) {
        this.threading[s][this.threadingCount] = false;
      }
    } else if (size == 3) {
      // remove block of size 3
      for (var s = 0; s < this.shafts; s++) {
        this.threading[s][this.threadingCount] = false;
        this.threading[s][this.threadingCount+1] = false;
        this.threading[s][this.threadingCount+2] = false;
      }
    } else if (size == 5) {
      // remove block of size 5
      for (var s = 0; s < this.shafts; s++) {
        this.threading[s][this.threadingCount] = false;
        this.threading[s][this.threadingCount+1] = false;
        this.threading[s][this.threadingCount+2] = false;
        this.threading[s][this.threadingCount+3] = false;
        this.threading[s][this.threadingCount+4] = false;
      }
    }
    if (this.profileView) {
      this.updateProfile();
    }
    return true; // success
  }
  
  next(shaftNum) {
    // if you implement mirror/flipping shaft progression, handle +/- 1
    return (shaftNum+1)%this.shafts;
  }
  
  reverse() {
    this.direction = !this.direction;
  }
  
  toggleProfile() {
    this.profileView = !this.profileView;
    if (this.profileView) {
      this.updateProfile();
      this.displayData = this.profile;
    } else {this.displayData = this.threading;}
  }
  
  updateProfile() {
    // convert threading draft to a profile draft
    // reset profile
    for (var i = 0; i < this.shafts; i++) {
      for (var j = 0; j < this.warps; j++) {
        this.profile[i][j] = false;
      }
    }

    // for each threading block,
    var currentWarp = 0;
    for (var i = 0; i < this.warpInputs; i++) {
      // find which shaft the current block is on
      var whichShaft = -1;
      for (var s = 0; s < this.shafts; s++) {
        if (this.threading[s][currentWarp]) {
          whichShaft = s;
          break;
        }
      }
      // update the profile array at the correct shaft, with the correct size block
      //console.log(currentWarp+", "+this.threadingInputs[i]+", "+whichShaft);
      for (var w = 0; w < this.threadingInputs[i]; w++) {
        this.profile[whichShaft][currentWarp+w] = true;
      }
      currentWarp += this.threadingInputs[i];
    }
    //console.log("done converting to profile draft");
    //console.log(printProfile());
  }
  
  print() {
    // return a string/char[] for printing
    var str = "";
    for (var s = 0; s < this.shafts; s++) {
      for (var w = 0; w < this.warps; w++) {
        if (this.threading[s][w]) {
          str += '1';
        } else {
          str += '0';
        }
      }
      str += '\n';
    }
    return str; 
  }
  
  printProfile() {
    // return a string/char[] for printing
    var str = "";
    for (var s = 0; s < this.shafts; s++) {
      for (var w = 0; w < this.warps; w++) {
        if (profile[s][w]) {
          str += '1';
        } else {
          str += '0';
        }
      }
      str += '\n';
    }
    return str; 
  }
}
