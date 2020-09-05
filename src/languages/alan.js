/*
Language: Alan Programming Language
Description: language definition for the Alan programming language
Website: https://alan-lang.org/
Category: common
*/

module.exports = function (hljs) {
  var KEYWORDS = {
    title:
      'export as from import',
    keyword:
      'type event fn on return const let emit prefix infix precedence if else new interface',
  };
  var OPERATORS = {
    className: 'literal',
    begin: "[+\\-\/*^.~`!@#$%&|:;<?=][+\\-\/*^.~`!@#$%&|:;<>?=]*",
  };
  var SYMBOLS = {
    className: 'literal',
    begin: "[,\\{\\}\\(\\)<>\\[\\]\\.=@:]",
  };
  var STRING = {
    className: 'meta',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: '"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        begin: '\'', end: '\'',
        contains: [hljs.BACKSLASH_ESCAPE],
      }
    ]
  };
  var NUMBER = {
    className: 'meta',
    begin: hljs.C_NUMBER_RE + 'n?',
    relevance: 0
  };

  return {
    name: 'Alan',
    aliases: ['ln'],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
      NUMBER,
      STRING,
      OPERATORS,
      SYMBOLS,
    ],
  }
}