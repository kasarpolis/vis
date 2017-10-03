import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'vis-item': {
    'position': 'absolute',
    'color': '#1A1A1A',
    'borderColor': '#97B0F8',
    'borderWidth': '1px',
    'backgroundColor': '#D5DDF6',
    'display': 'inline-block',
    'zIndex': '1',
    'animation': ''left' 0.1s',
    // overflow: hidden;
  },
  'vis-itemvis-selected': {
    'borderColor': '#FFC200',
    'backgroundColor': '#FFF785',
    // z-index must be higher than the z-index of custom time bar and current time bar
    'zIndex': '2'
  },
  'vis-editablevis-selected': {
    'cursor': 'move'
  },
  'vis-itemvis-pointvis-selected': {
    'backgroundColor': '#FFF785'
  },
  'vis-itemvis-box': {
    'textAlign': 'center',
    'borderStyle': 'solid',
    'borderRadius': '2px'
  },
  'vis-itemvis-point': {
    'background': 'none'
  },
  'vis-itemvis-dot': {
    'position': 'absolute',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderWidth': '4px',
    'borderStyle': 'solid',
    'borderRadius': '4px'
  },
  'vis-itemvis-range': {
    'borderStyle': 'solid',
    'borderRadius': '2px',
    'boxSizing': 'border-box'
  },
  'vis-itemvis-background': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'rgba(213, 221, 246, 0.4)',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'vis-item vis-item-overflow': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'vis-item-visible-frame': {
    'whiteSpace': 'nowrap'
  },
  'vis-itemvis-range vis-item-content': {
    'position': 'relative',
    'display': 'inline-block'
  },
  'vis-itemvis-background vis-item-content': {
    'position': 'absolute',
    'display': 'inline-block'
  },
  'vis-itemvis-line': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 1 }],
    'borderLeftStyle': 'solid'
  },
  'vis-item vis-item-content': {
    'whiteSpace': 'nowrap',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'vis-item vis-onUpdateTime-tooltip': {
    'position': 'absolute',
    'background': '#4f81bd',
    'color': 'white',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '1px',
    'transition': '0.4s',
    'OTransition': '0.4s',
    'MozTransition': '0.4s',
    'WebkitTransition': '0.4s'
  },
  'vis-item vis-delete': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'cursor': 'pointer',
    'WebkitTransition': 'background 0.2s linear',
    'MozTransition': 'background 0.2s linear',
    'MsTransition': 'background 0.2s linear',
    'OTransition': 'background 0.2s linear',
    'transition': 'background 0.2s linear'
  },
  'vis-item vis-delete-rtl': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'cursor': 'pointer',
    'WebkitTransition': 'background 0.2s linear',
    'MozTransition': 'background 0.2s linear',
    'MsTransition': 'background 0.2s linear',
    'OTransition': 'background 0.2s linear',
    'transition': 'background 0.2s linear'
  },
  'vis-item vis-delete': {
    'right': [{ 'unit': 'px', 'value': -24 }]
  },
  'vis-item vis-delete-rtl': {
    'left': [{ 'unit': 'px', 'value': -24 }]
  },
  'vis-item vis-delete:after': {
    'content': '"\00D7"',
    // MULTIPLICATION SIGN
    'color': 'red',
    'fontFamily': 'arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontWeight': 'bold',
    'WebkitTransition': 'color 0.2s linear',
    'MozTransition': 'color 0.2s linear',
    'MsTransition': 'color 0.2s linear',
    'OTransition': 'color 0.2s linear',
    'transition': 'color 0.2s linear'
  },
  'vis-item vis-delete-rtl:after': {
    'content': '"\00D7"',
    // MULTIPLICATION SIGN
    'color': 'red',
    'fontFamily': 'arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontWeight': 'bold',
    'WebkitTransition': 'color 0.2s linear',
    'MozTransition': 'color 0.2s linear',
    'MsTransition': 'color 0.2s linear',
    'OTransition': 'color 0.2s linear',
    'transition': 'color 0.2s linear'
  },
  'vis-item vis-delete:hover': {
    'background': 'red'
  },
  'vis-item vis-delete-rtl:hover': {
    'background': 'red'
  },
  'vis-item vis-delete:hover:after': {
    'color': 'white'
  },
  'vis-item vis-delete-rtl:hover:after': {
    'color': 'white'
  },
  'vis-item vis-drag-center': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'move'
  },
  'vis-itemvis-range vis-drag-left': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.2 }],
    'minWidth': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -4 }],
    'cursor': 'w-resize'
  },
  'vis-itemvis-range vis-drag-right': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.2 }],
    'minWidth': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': -4 }],
    'cursor': 'e-resize'
  },
  'vis-rangevis-itemvis-readonly vis-drag-left': {
    'cursor': 'auto'
  },
  'vis-rangevis-itemvis-readonly vis-drag-right': {
    'cursor': 'auto'
  }
});
