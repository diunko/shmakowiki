var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}var ShmakoWikiToPlain = exports.ShmakoWikiToPlain = objectThatDelegatesTo(OMeta, {
    keyword: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            switch (this._apply("anything")) {
              case "underline_":
                return "underline_";
              case "strike":
                return "strike";
              case "header4":
                return "header4";
              case "escaped":
                return "escaped";
              case "italic_":
                return "italic_";
              case "bold_":
                return "bold_";
              case "underline":
                return "underline";
              case "header5":
                return "header5";
              case "subscript":
                return "subscript";
              case "superscript":
                return "superscript";
              case "monospace_":
                return "monospace_";
              case "header6":
                return "header6";
              case "monospace":
                return "monospace";
              case "strike_":
                return "strike_";
              case "italic":
                return "italic";
              case "para":
                return "para";
              case "header1":
                return "header1";
              case "header2":
                return "header2";
              case "header3":
                return "header3";
              case "subscript_":
                return "subscript_";
              case "superscript_":
                return "superscript_";
              case "bold":
                return "bold";
              default:
                throw fail();
            }
        }.call(this);
    },
    token: function() {
        var $elf = this, _fromIdx = this.input.idx, t, ans, c;
        return this._or(function() {
            return function() {
                this._form(function() {
                    return function() {
                        t = this._apply("keyword");
                        return ans = this._applyWithArgs("apply", t);
                    }.call(this);
                });
                return ans;
            }.call(this);
        }, function() {
            return function() {
                c = this._apply("anything");
                return c;
            }.call(this);
        });
    },
    tokens: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            this._form(function() {
                return c = this._many(function() {
                    return this._apply("token");
                });
            });
            return c;
        }.call(this);
    },
    bold: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    bold_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    italic: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    italic_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    underline: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    underline_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    strike: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    strike_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    monospace: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    monospace_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    superscript: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    superscript_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    subscript: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    subscript_: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    escaped: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    para: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header1: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header2: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header3: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header4: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header5: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    header6: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    },
    topLevel: function() {
        var $elf = this, _fromIdx = this.input.idx, c;
        return function() {
            c = this._apply("tokens");
            return c.join("");
        }.call(this);
    }
});