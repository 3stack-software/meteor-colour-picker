colour-picker
=======================

A basic colour picker. Styled to match bootstrap-3.



Usage
-----------------------

Add to a template:

`{{> colourPicker selectedColour=someSessionValue property='fill' menu=true allowNone=true}}`


Then, catch events:

```js

Template.myTemplate.helpers({
  someSessionValue: function(){ return Session.get('someSessionValue'); }
});

Template.myTemplate.events({
  'click a[data-colour]': function(e){
    e.preventDefault();
    Session.set('someSessionValue', $(e.currentTarget).data('colour'));
  }
});

```


Options:

`selectedColour`
Should be a reactive value of the currently selected colour.

`property`
Prompts the user eg, 'fill' becomes 'Fill Colour'

`allowNone`
does as it says - allows a `transparent` or `nil` colour to be selected.

`menu`
wraps in a bootstrap menu. Write your own like this:



```handlebars
  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
      <span class="colour-picker-selected-block" style="background: {{selectedColour}};"></span>&nbsp;&nbsp;<span class="caret"></span>
    </button>
    <div class="dropdown-menu">
      {{> colourPicker selectedColour=selectedColour property='propertyName' menu=false allowNone=true}}
    </div>
    <input name="selectedColour" type="hidden" value="{{selectedColour}}"/>
  </div>
```

Advanced
-----------------------

Can't think of a decent way to allow the user of the package to provide a colour scheme.

Probably best to fork, and add your own!
