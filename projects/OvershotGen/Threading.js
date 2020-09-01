// helper functions for byte handling
// how many bytes are needed to hold x bits
function numBytes(x) {
  if (x % 8 == 0) {
    return x/8+1;
  } else {
    return x/8
  }
}

class ByteArray {
  height;
  width;

  data; // 1D fixed-size array with size height x width

  constructor(h, w) {
    this.height = h;
    this.width = w;
    this.data = new Uint8Array(this.height * this.width);
  }

  // the DraftContainer is stored as a 1D array of length (draft height)  x (draft width)
  RCToIndex(row, col) {
    if (col >= this.height || row >= this.width) {
      return -1;
    }
    return (row*this.width + col);
  }

  indexToRC(index) {
    if (index >= this.height * this.width) {
      return -1;
    }
    var row = Math.floor(index / this.width);
    var col = index % this.height;
    return {row, col};
  }

  // for now, each byte stores 1 cell's binary data (0 or 1)
  getData(row, col) {
    if (row < this.height && col < this.width) {
      var i = this.RCToIndex(row, col);
      return this.data[i] ? true : false;
    }
  }

  setData(row, col, value) {
    if (row < this.height && col < this.width) {
      var i = this.RCToIndex(row, col);
      this.data[i] = value ? 0 : 1;
    }
  }

  toggleCell(row, col) {
    this.data[i] = getData(row, col) ? 1 : 0;
  }

  addRow() {
    this.height++;
    var newData = new Uint8Array(this.height * this.width);
    for (var r = 0; r < this.height-1; r++) {
      for (var c = 0; c < this.width; c++) {
        var i = this.RCToIndex(r, c);
        newData[i] = this.data[i];
      }
    }
    this.data = newData;
  }
  delRow() {
    this.height--;
    var newData = new Uint8Array(this.height * this.width);
    for (var r = 0; r < this.height; r++) {
      for (var c = 0; c < this.width; c++) {
        var i = this.RCToIndex(r, c);
        newData[i] = this.data[i];
      }
    }
    this.data = newData;
  }
  addCol() {
    this.width++;
    var newData = new Uint8Array(this.height * this.width);
    for (var r = 0; r < this.height; r++) {
      for (var c = 0; c < this.width-1; c++) {
        var i = this.RCToIndex(r, c);
        newData[i] = this.data[i];
      }
    }
    this.data = newData;
  }
  delCol() {
    this.width--;
    var newData = new Uint8Array(this.height * this.width);
    for (var r = 0; r < this.height; r++) {
      for (var c = 0; c < this.width; c++) {
        var i = this.RCToIndex(r, c);
        newData[i] = this.data[i];
      }
    }
    this.data = newData;
  }
}

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
    // TODO: convert to typed unsigned 8-bit int (byte) arrays of fixed size
    // TypedArray is initializd with all 0's
    //this.rawData = new Array(this.height);
    this.rawData = new ByteArray(this.height, this.width);
    //this.profile = new Array(this.height);
    this.profile = new ByteArray(this.height, this.width);
    // for (var i = 0; i < this.height; i++) {
    //   this.rawData[i] = new Array(this.width);
    //   this.profile[i] = new Array(this.width);
    //   for (var j = 0; j < this.width; j++) {
    //     this.rawData[i][j] = false;
    //     this.profile[i][j] = false;
    //   }
    // }
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
    // this.rawData.push(new Array(this.width));
    // this.profile.push(new Array(this.width));
    // for (var i = 0; i < this.width; i++) {
    //   this.rawData[this.height][i] = false;
    //   this.profile[this.height][i] = false;
    // }
    this.rawData.addRow();
    this.profile.addRow();
    this.height++;
  }

  delRow() {
    this.rawData.delRow();
    this.profile.delRow();
    this.height--;
  }

  addCol() {
    // // add a new column to each row of the data arrays
    // for (var i = 0; i < this.height; i++) {
    //   this.rawData[i].push(false);
    //   this.profile[i].push(false);
    // }
    this.rawData.addCol();
    this.profile.addCol();
    this.width++;
  }

  delCol() {
    // for (var i = 0; i < this.height; i++) {
    //   this.rawData[i].pop();
    //   this.profile[i].pop();
    // }
    this.rawData.delCol();
    this.profile.delCol();
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
      this.threading.setData(this.currentShaft, this.threadingCount, true);
    }
    // size 3 block: currentShaft, nextShaft, currentShaft
    else if (size == 3) {
      this.threading.setData(this.currentShaft, this.threadingCount,  true);
      this.threading.setData(this.next(this.currentShaft), this.threadingCount+1, true);
      this.threading.setData(this.currentShaft, this.threadingCount+2, true);
    }
    // size 5 block: current, next, current, next, current
    else if (size == 5) {
      this.threading.setData(this.currentShaft, this.threadingCount, true);
      this.threading.setData(this.next(this.currentShaft), this.threadingCount+1, true);
      this.threading.setData(this.currentShaft, this.threadingCount+2, true);
      this.threading.setData(this.next(this.currentShaft), this.threadingCount+3, true);
      this.threading.setData(this.currentShaft, this.threadingCount+4, true);
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
        this.threading.setData(s, this.threadingCount, false);
      }
    } else if (size == 3) {
      // remove block of size 3
      for (var s = 0; s < this.shafts; s++) {
        this.threading.setData(s, this.threadingCount, false);
        this.threading.setData(s, this.threadingCount+1, false);
        this.threading.setData(s, this.threadingCount+2, false);
      }
    } else if (size == 5) {
      // remove block of size 5
      for (var s = 0; s < this.shafts; s++) {
        this.threading.setData(s, this.threadingCount, false);
        this.threading.setData(s, this.threadingCount+1, false);
        this.threading.setData(s, this.threadingCount+2, false);
        this.threading.setData(s, this.threadingCount+3, false);
        this.threading.setData(s, this.threadingCount+4, false);
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
        this.profile.setData(i, j, false);
      }
    }

    // for each threading block,
    var currentWarp = 0;
    for (var i = 0; i < this.warpInputs; i++) {
      // find which shaft the current block is on
      var whichShaft = -1;
      for (var s = 0; s < this.shafts; s++) {
        if (this.threading.getData(s, currentWarp)) {
          whichShaft = s;
          break;
        }
      }
      // update the profile array at the correct shaft, with the correct size block
      //console.log(currentWarp+", "+this.threadingInputs[i]+", "+whichShaft);
      for (var w = 0; w < this.threadingInputs[i]; w++) {
        this.profile.setData(whichShaft, currentWarp+w, true);
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
        str += this.threading.getData(s, w) ? '1' : '0';
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
        str += this.profile.getData(s, w) ? '1' : '0';
      }
      str += '\n';
    }
    return str; 
  }
}
