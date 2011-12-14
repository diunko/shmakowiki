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
}{
    var ShmakoWikiToHtml = exports.ShmakoWikiToHtml = objectThatDelegatesTo(OMeta, {
        keyword: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                switch (this._apply("anything")) {
                  case "monospace":
                    return "monospace";
                  case "strike":
                    return "strike";
                  case "header6":
                    return "header6";
                  case "header3":
                    return "header3";
                  case "para":
                    return "para";
                  case "italic":
                    return "italic";
                  case "underline_":
                    return "underline_";
                  case "header2":
                    return "header2";
                  case "header4":
                    return "header4";
                  case "italic_":
                    return "italic_";
                  case "underline":
                    return "underline";
                  case "header5":
                    return "header5";
                  case "strike_":
                    return "strike_";
                  case "link_":
                    return "link_";
                  case "subscript":
                    return "subscript";
                  case "escaped":
                    return "escaped";
                  case "superscript":
                    return "superscript";
                  case "ulistItem":
                    return "ulistItem";
                  case "olistItem":
                    return "olistItem";
                  case "header1":
                    return "header1";
                  case "subscript_":
                    return "subscript_";
                  case "bold_":
                    return "bold_";
                  case "monospace_":
                    return "monospace_";
                  case "olist":
                    return "olist";
                  case "ulist":
                    return "ulist";
                  case "lineBreak":
                    return "lineBreak";
                  case "extention":
                    return "extention";
                  case "superscript_":
                    return "superscript_";
                  case "link":
                    return "link";
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
                    return ShmakoWikiToHtml._escape(c);
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
                return c.join("");
            }.call(this);
        },
        bold: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<b>" + c + "</b>";
            }.call(this);
        },
        bold_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<b>" + c + "</b>";
            }.call(this);
        },
        italic: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<i>" + c + "</i>";
            }.call(this);
        },
        italic_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<i>" + c + "</i>";
            }.call(this);
        },
        underline: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<u>" + c + "</u>";
            }.call(this);
        },
        underline_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<u>" + c + "</u>";
            }.call(this);
        },
        strike: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<s>" + c + "</s>";
            }.call(this);
        },
        strike_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<s>" + c + "</s>";
            }.call(this);
        },
        monospace: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<tt>" + c + "</tt>";
            }.call(this);
        },
        monospace_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<tt>" + c + "</tt>";
            }.call(this);
        },
        superscript: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<sup>" + c + "</sup>";
            }.call(this);
        },
        superscript_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<sup>" + c + "</sup>";
            }.call(this);
        },
        subscript: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<sub>" + c + "</sub>";
            }.call(this);
        },
        subscript_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<sub>" + c + "</sub>";
            }.call(this);
        },
        link: function() {
            var $elf = this, _fromIdx = this.input.idx, c, c, cc;
            return this._or(function() {
                return function() {
                    c = this._apply("token");
                    this._form(function() {
                        return undefined;
                    });
                    return '<a href="' + c + '">' + c + "</a>";
                }.call(this);
            }, function() {
                return function() {
                    c = this._apply("token");
                    cc = this._apply("tokens");
                    return '<a href="' + c + '">' + cc + "</a>";
                }.call(this);
            });
        },
        link_: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("token");
                return '<a href="' + c + '">' + c + "</a>";
            }.call(this);
        },
        lineBreak: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("anything");
                return "<br/>";
            }.call(this);
        },
        escaped: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<span>" + c + "</span>";
            }.call(this);
        },
        para: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<p>" + c + "</p>";
            }.call(this);
        },
        header1: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h1 id="' + a + '">' + c + "</h1>";
            }.call(this);
        },
        header2: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h2 id="' + a + '">' + c + "</h2>";
            }.call(this);
        },
        header3: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h3 id="' + a + '">' + c + "</h3>";
            }.call(this);
        },
        header4: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h4 id="' + a + '">' + c + "</h4>";
            }.call(this);
        },
        header5: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h5 id="' + a + '">' + c + "</h5>";
            }.call(this);
        },
        header6: function() {
            var $elf = this, _fromIdx = this.input.idx, c, a;
            return function() {
                c = this._apply("tokens");
                a = this._apply("anything");
                return '<h6 id="' + a + '">' + c + "</h6>";
            }.call(this);
        },
        olist: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<ol>" + c + "</ol>";
            }.call(this);
        },
        ulist: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<ul>" + c + "</ul>";
            }.call(this);
        },
        olistItem: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<li>" + c + "</li>";
            }.call(this);
        },
        ulistItem: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return "<li>" + c + "</li>";
            }.call(this);
        },
        extention: function() {
            var $elf = this, _fromIdx = this.input.idx, t, c, p;
            return function() {
                t = this._apply("anything");
                c = this._apply("anything");
                p = this._apply("anything");
                return ShmakoWikiToHtml["extentions"].hasOwnProperty(t) ? ShmakoWikiToHtml["extentions"][t](c, p) : "<div>" + ShmakoWikiToHtml._escape(c) + "</div>";
            }.call(this);
        },
        topLevel: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._apply("tokens");
                return '<div class="shmakowiki">' + c + "</div>";
            }.call(this);
        }
    });
    ShmakoWikiToHtml["extentions"] = {
        html: function(c) {
            return c;
        },
        ohl: function(c, p) {
            return OmetaHighlighterToHtml.match(c, "topLevel");
        },
        hljs: function(c, p) {
            return '<pre><code class="' + p + '">' + ShmakoWikiToHtml._escape(c) + "</code></pre>";
        }
    };
    ShmakoWikiToHtml["extentions"]["hl"] = ShmakoWikiToHtml["extentions"]["ohl"];
    ShmakoWikiToHtml["_escape"] = function() {
        var amp = new RegExp("&", "g"), lt = new RegExp("<", "g"), gt = new RegExp(">", "g"), apos = new RegExp("'", "g"), quot = new RegExp('"', "g");
        return function(s) {
            return String(s).replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;").replace(apos, "&apos;").replace(quot, "&quot;");
        };
    }();
}