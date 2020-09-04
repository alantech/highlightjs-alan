/*
Language: Alan Programming Language
Description: language definition for the Alan programming language
Category: config
*/

module.exports = function (hljs) {
  var HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  return {
    aliases: ['robotstxt', 'robots.txt'],
    case_insensitive: true,
    lexemes: '[a-z-]+',
    keywords: {
      section: 'user-agent',
      built_in: 'allow disallow',
      keyword: 'crawl-delay sitemap'
    },
    contains: [
      HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      {
        className: 'string',
        begin: '^\\s*(?:user-agent|(?:dis)?allow)\\s*:\\s*',
        end: /$/,
        excludeBegin: true,
        relevance: 10,
        contains: [
          HASH_COMMENT_MODE
        ]
      },
      {
        className: 'string',
        begin: '^\\s*sitemap\\s*:\\s*',
        end: /$/,
        excludeBegin: true,
        contains: [
          HASH_COMMENT_MODE
        ]
      }
    ],
    illegal: '<(?:!DOCTYPE\\s+)?html>'
  }
}


