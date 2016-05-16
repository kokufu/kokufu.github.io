;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
      var funcs     = 'lambda list progn mapcar car cdr reverse member append format';
      var keywords  = 'let while unless cond if eq t nil defvar dotimes setf listp numberp not equal';
      var macros    = 'loop when dolist dotimes defun';
      var operators = '> < + - = * / %';

      this.regexList = [
       { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
       { regex: new RegExp('&\\w+;', 'g'), css: 'plain' },
       { regex: new RegExp(';.*', 'g'), css: 'comments' },
       { regex: new RegExp("'(\\w|-)+", 'g'), css: 'variable' },
       { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
       { regex: new RegExp(this.getKeywords(macros), 'gm'), css: 'keyword' },
       { regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'functions' },
      ];
  }

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases = ['lisp'];

  SyntaxHighlighter.brushes.Lisp = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
