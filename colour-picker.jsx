ColourPickerControl = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    allowNone: React.PropTypes.bool
  },

  setValue(value){
    this.props.onChange(value);
  },

  handleClickNone(e){
    e.preventDefault();
    this.setValue(null);
  },

  render(){
    return (
      <div className="colour-picker">
        <div>
          {
            this.props.allowNone
            ? <a href="#" className="pull-right" onClick={this.handleClickNone}>none</a>
            : null
          }
          <h1 className="pull-left">{this.props.title}</h1>
          <div className="clearfix"></div>
        </div>
        <hr/>
        {colourTableLayout.map(this.renderLayout)}

      </div>
    )
  },
  renderLayout(layout, idx){
   return <div key={idx} className="colour-picker-box">
     {layout.map(this.renderRow)}
     </div>;
  },
  renderRow(row, idx){
    return <div key={idx} className="colour-picker-row">
      {row.map(this.renderBlock)}
      <div className="clearfix"></div>
    </div>;
  },
  renderBlock({name, hex}, idx){
    return <ColourPickerBlock key={idx} name={name} hex={hex} onClick={this.setValue} />
  }
});

let ColourPickerBlock = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    name: React.PropTypes.string,
    hex: React.PropTypes.string
  },
  handleClick(e){
    e.preventDefault();
    this.props.onClick(this.props.hex);
  },
  render(){
    let {name, hex, } = this.props;
    return <a href="#" title={name} className="colour-picker-block" style={{
      backgroundColor: hex
    }}  onClick={this.handleClick} />;
  }
});


ColourPickerButton = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    allowNone: React.PropTypes.bool
  },

  getStyle(){
    if (this.props.value == null){
      return {};
    }
    return {
      background: this.props.value
    }
  },

  render(){
    return (
    <div className="btn-group">
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <span className="colour-picker-selected-block" style={this.getStyle()} />&nbsp;&nbsp;<span className="caret" />
      </button>
      <div className="dropdown-menu">
        <ColourPickerControl
          onChange={this.props.onChange}
          value={this.props.value}
          title={this.props.title}
          allowNone={this.props.allowNone}
        />
      </div>
    </div>
    );
  }
});
