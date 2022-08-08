const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const Clone = require('../../util/clone');
const Color = require('../../util/color');
const formatMessage = require('format-message');
const MathUtil = require('../../util/math-util');
const RenderedTarget = require('../../sprites/rendered-target');
const log = require('../../util/log');

class Scratch3ScreensizeBlocks {
    constructor(runtime) {


        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'screensize',
            name: 'ScreenSize',
            blocks: [{
                    opcode: 'getScreensizex',
                    blockType: BlockType.REPORTER,
                    text: '获取用户屏幕横向长度(单位:像素)',
                    }
                ,{
                    opcode: 'getScreensizey',
                    blockType: BlockType.REPORTER,
                    text: '获取用户屏幕纵向长度(单位:像素)',
                },
            ],
        };
    }
    getScreensizex(args, util) {
        return screen.width;
    }
    getScreensizey(args, util) {
        return screen.height;
    }
}

module.exports = Scratch3ScreensizeBlocks;