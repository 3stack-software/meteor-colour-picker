"use strict";
var colourTableLayout = this.colourTableLayout;
Template.colourPicker.helpers({
  title: function() {
    return this.property.charAt(0).toUpperCase() + this.property.slice(1) + " Colour";
  },
  colourTableLayout: function() {
    return colourTableLayout;
  },
  style: function(h) {
    return "background-color: " + h + ";";
  },
  maybeWrapMenu: function(){
    if (this.menu){
      return Template._colourPicker_wrapBootstrapMenu;
    } else {
      return Template._colourPicker_wrapNoop;
    }
  }
});
