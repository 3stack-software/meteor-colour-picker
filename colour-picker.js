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

Template.colourPicker.events({
  'click a[data-colour]': function(e, tpl){
    e.preventDefault();
    var colour = $(e.currentTarget).data('colour');
    if (colour == '') colour = null;
    tpl.data.handleSelect(colour);
  }
});
