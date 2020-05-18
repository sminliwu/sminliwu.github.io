// A Treadling object, representing treadling quadrant of a draft

class Treadling extends DraftContainer {
  // declare fields
  // loom parameters
  treadles;
  TABBY_A = 4;
  TABBY_B = 5;
  
  // pattern data
  picks;
  treadling;
  
  // track user inputs
  tabbyRow = false; //alternates between true and false for 2 rows of tabby
  profileView = false;
  pickCount = 0;
  treadleInputs = 0; // also the number of pattern picks
  treadlingInputs; 
  
  // contructor, equiv to setup()
  constructor(t, p) {
    super(p, t);
    this.treadles = this.width;
    this.picks = this.height;
    
    this.treadling = this.rawData;
    this.treadlingInputs = new Array();
    this.displayData = this.treadling;
  }
  
  // functionality
  addPick() {
    // add 1 warp
    this.picks++;
    this.addRow();
  }
  
  delPick() {
    this.picks--;
    // check if you're cutting into an existing block
    if (this.picks < this.pickCount) {
      this.popBlock();
    }

    this.delRow();
  }
  
  pushBlock(treadle) {
    // console.log("tabby row:", tabbyRow);
    // add a treadling block of specified treadle to draft
    if (treadle > 5 || treadle < 0) {
      return false; // error, treadle needs to be 0-5
    }
    // must have enough empty warps left for the block
    if (this.pickCount + 2 > this.picks) {
      return false;
    }
    // update treadlingInputs (push treadle to array)
    this.treadlingInputs[this.treadleInputs] = treadle;
    // update treadling array
    // add tabby pick no matter what, forcing tabby pattern
    if (this.tabbyRow) {
        this.treadling[this.pickCount][this.TABBY_A] = true;
      } else {
        this.treadling[this.pickCount][this.TABBY_B] = true;
      }
    // treadles 0-3: overshot pattern
    if (treadle >= 0 && treadle <= 3) {      
      this.treadling[this.pickCount+1][treadle] = true; // add pattern pick
      this.pickCount += 2; // overshot picks always come with: 1 tabby, 1 pattern
    }
    // treadles 4-5: tabby
    else { // if (treadle == TABBY_A || treadle == TABBY_B) 
      this.pickCount++;    
    }
    this.treadleInputs++;
    this.tabbyRow = !this.tabbyRow;
    if (this.profileView) {
      this.updateProfile();
    }
    return true;
  }
  
  popBlock() {
    // remove the last treadle input
    if (this.treadleInputs == 0) {
      // if there are no treadles inputted, we're done
      return true;
    }
    this.tabbyRow = !this.tabbyRow;
    this.treadleInputs--;
    var treadle = this.treadlingInputs[this.treadleInputs];
    if (treadle > 5 || treadle < 0) {
      return false; // error, treadle needs to be 0-5
    }
    // remove pattern block
    if (treadle >= 0 && treadle <= 3) {
      this.pickCount -= 2;
      for (var t = 0; t < this.treadles; t++) {
        this.treadling[this.pickCount][t] = false;
        this.treadling[this.pickCount+1][t] = false;
      }
    } else {
      // remove tabby pick
      this.pickCount--;
      for (var t = 0; t < this.treadles; t++) {
        this.treadling[this.pickCount][t] = false;
      }
    }
    if (this.profileView) {
      this.updateProfile();
    }
    return true; // success
  }
  
  toggleProfile() {
    this.profileView = !this.profileView;
    if (this.profileView) {
      this.updateProfile();
      this.displayData = this.profile;
    } else {this.displayData = this.treadling;}
  }
  
  toggleProfMode() {
    if (this.profileView) {
      this.profileMode = !this.profileMode;
      this.updateProfile();
    }
  }
  
  updateProfile() {
    // convert threading draft to a profile draft
    // reset profile
    for (var i = 0; i < this.picks; i++) {
      for (var j = 0; j < this.treadles; j++) {
        this.profile[i][j] = false;
      }
    }
    // for each threading block,
    var currentPick = 0;
    var currentRowInProfile = 0;
    for (var i = 0; i < this.treadleInputs; i++) {
      // find which treadle the current block is on
      var whichTreadle = -1;
      for (var t = 0; t < this.treadles; t++) {
        if (this.treadling[currentPick+1][t]) {
          whichTreadle = t;
          break;
        }
      }
      // update the profile array at the correct pick, with the correct size block
      //console.log(i+", "+ this.treadlingInputs[i]+", "+whichTreadle);
      // for treadles 0-3, block size = 2; for treadles 4-5, block size = 1;
      if (whichTreadle >= 0 && whichTreadle <= 3) {
        this.profile[currentRowInProfile][whichTreadle] = true;
        if (this.profileMode) { // show overshot pattern picks as 1 row
          currentRowInProfile++;
        } else { // show overshot pattern picks as 2 rows
          this.profile[currentRowInProfile+1][whichTreadle] = true;
          currentRowInProfile += 2;
        }
        currentPick += 2;
      } else {
        // just skip tabby picks
        currentPick++;
        currentRowInProfile++;
      }
    }
    //this.updateDisplay();
  }
  
  print() {
    // return a string/char[] for printing
    var str = new String();
    for (var p = 0; p < this.pickCount; p++) {
      for (var t = 0; t < this.treadles; t++) {
        if (this.treadling[p][t]) {
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
