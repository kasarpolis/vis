var Group = require('./Group');
var fastdom = require('fastdom');

/**
 * @constructor BackgroundGroup
 * @param {number | string} groupId
 * @param {Object} data
 * @param {ItemSet} itemSet
 * @extends Group
 */
function BackgroundGroup (groupId, data, itemSet) {
  Group.call(this, groupId, data, itemSet);

  this.width = 0;
  this.height = 0;
  this.top = 0;
  this.left = 0;
}

BackgroundGroup.prototype = Object.create(Group.prototype);

/**
 * Repaint this group
 * @param {{start: number, end: number}} range
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
 * @param {boolean} [forceRestack=false]  Force restacking of all items
 * @return {boolean} Returns true if the group is resized
 */
BackgroundGroup.prototype.redraw = function(range, margin, forceRestack) {  // eslint-disable-line no-unused-vars
  var resized = false;
  var width 

  fastdom.measure(() => {
    width = this.dom.background.offsetWidth;
  });

  this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, range);
  
  fastdom.mutate(() => {
    // calculate actual size
    this.width = width;

    // apply new height (just always zero for BackgroundGroup
    this.dom.background.style.height  = '0';
  });

  // update vertical position of items after they are re-stacked and the height of the group is calculated
  for (var i = 0, ii = this.visibleItems.length; i < ii; i++) {
    var item = this.visibleItems[i];
    item.repositionY(margin);
  }

  return resized;
};

/**
 * Show this group: attach to the DOM
 */
BackgroundGroup.prototype.show = function() {
  if (!this.dom.background.parentNode) {
    this.itemSet.dom.background.appendChild(this.dom.background);
  }
};

module.exports = BackgroundGroup;
