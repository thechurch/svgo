'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove height and width attr which coincides with a viewBox
 *
 * @see http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Tim Smart
 */
exports.fn = function(item) {

    if (
        !item.isElem('svg')
    ||  (!item.hasAttr('height') && !item.hasAttr('width'))
    ) {
        return
    }

    item.removeAttr('height')
    item.removeAttr('width')

};
