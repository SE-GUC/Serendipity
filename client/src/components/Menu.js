import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    type: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event,type) => {
    this.setState({ anchorEl: null ,type:type});
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={(event) => this.handleClose( event,"item")}>Name</MenuItem>
          <MenuItem onClick={this.handleClose}>Course</MenuItem>
          <MenuItem onClick={this.handleClose}>Masterclass</MenuItem>
          <MenuItem onClick={this.handleClose}>Workshop</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
