((function(window) {
  /**
  * Creates new {@link StringBuilder} instances.
  *
  * @constructor
  */
  var StringBuilder = function() {
    /** @private {boolean} */
    this._isBuilt = false;

    /** @private {integer} */
    this._index = -1;

    /** @private {Array} */
    this._content = [];
  };

  /**
  * Append value to StringBuilder instance. 
  *
  * @param {object} value The value to be appended.
  */
  StringBuilder.prototype.append = function( value ) {
    this.content[++this._index] = value;
  };
  
  /**
  * Returns string representation of String Builder instance 
  *
  */
  StringBuilder.prototype.toString = function() {
    return this.content.join('');
  };

  window.StringBuilder = StringBuilder;

}(window)))
