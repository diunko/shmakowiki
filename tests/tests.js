var tests = [
  
    {
        'in': '**xboldx**',
        'out': [['para', [['bold', ['xboldx']]]]]
    },
    {
        'in': '**bold******',
        'out': [['para', [['bold', ['bold']], ['bold', []]]]]
    },
    {
        'in': '//italic//',
        'out': [['para', [['italic', ['italic']]]]]
    },
    {
        'in': '__underline__',
        'out': [['para', [['underline', ['underline']]]]]
    },
    {
        'in': '--strike--',
        'out': [['para', [['strike', ['strike']]]]]
    },
    {
        'in': '##monospace##',
        'out': [['para', [['monospace', ['monospace']]]]]
    },
    {
        'in': 'bla ,,suber,, und ^^super^^',
        'out': [[
          'para',
          [
            'bla ',
            ['subscript', ['suber']],
            ' und ',
            ['superscript', ['super']]
          ]
        ]]
    },
    {
        'in': '**bb//bb**nn**bb//bb**',
        'out': [[
          'para',
          [
            ['bold', ['bb', ['italic_', ['bb']]]],
            'nn',
            ['bold', ['bb', ['italic_', ['bb']]]]
          ]
        ]]
    },
    {
        'in': '~**esc bold**',
        'out': [['para', [['escaped', '*'], '*esc bold', ['bold_', []]]]]
    },
    {
        'in': '**//bolditalic//**',
        'out': [['para', [['bold', [['italic', ['bolditalic']]]]]]]
    },
    {
        'in': [
          'para1**bla**',
          '//dsds//',
          '',
          'para2 ',
          ' para2',
          '',
          'para3'],
        'out': [
          ['para', ['para1', ['bold', ['bla']], ' ', ['italic', ['dsds']]]],
          ['para', ['para2 para2']],
          ['para', ['para3']]
        ]
    },
    {
        'in': [
          'para11  ',
          '  para11',
          '',
          'para2',
          ''],
        'out': [['para',
                 ['para11 para11']],
                ['para', ['para2']]]
    },
    {
        'in': [
          '* listitem1',
          '* listitem2',
          '  * sublistitem2'],
        'out': [[
          'ulist',
          [
            ['ulistItem', ['listitem1']],
            [
              'ulistItem',
              [
                ['para', ['listitem2']],
                ['ulist', [['ulistItem', ['sublistitem2']]]]
              ]
            ]
          ]
        ]]
    },
    {
        'in': [
          '1. listitem1',
          '2. listitem2',
          '  1. sublistitem2'],
        'out': [[
          'olist',
          [
            ['olistItem', ['listitem1']],
            [
              'olistItem',
              [['para', ['listitem2']],
               ['olist', [['olistItem', ['sublistitem2']]]]]
            ]
          ]
        ]]
    },
    {
        'in': [
          '1. olistitem1',
          '* ulistitem2'],
        'out': [
          [
            'olist',
            [['olistItem', ['olistitem1']]]
          ],
          ['ulist', [['ulistItem', ['ulistitem2']]]]
        ]
    },
    {
        'in': [
          '* listitem1',
          '  * sublistitem1',
          '    * subsublistitem1'],
        'out': [[
          'ulist',
          [[
            'ulistItem',
            [
              ['para', ['listitem1']],
              [
                'ulist',
                [[
                  'ulistItem',
                  [
                    ['para', 'sublistitem1'],
                    ['ulist', [['ulistItem', ['subsublistitem1']]]]
                  ]
                ]]
              ]
            ]
          ]]
        ]]
    },
    {
        'in': [
          '* listitem1',
          '  * sublistitem1',
          '    * subsublistitem1',
          '  * sublistitem2'],
        'out': [[
          'ulist',
          [[
            'ulistItem',
            [
              ['para', ['listitem1']],
              [
                'ulist',
                [
                  [
                    ['para', ['ulistItem']],
                    [
                      'sublistitem1',
                      ['ulist', [['ulistItem', ['subsublistitem1']]]]
                    ]
                  ],
                  ['ulistItem', ['sublistitem2']]
                ]
              ]
            ]
          ]]
        ]]
    },
    {
        'in':[
          '* listitem1',
          '  * sublistitem1',
          '    1. osubsublistitem1',
          '    * usubsublistitem1',
          '  * sublistitem2'],
        'out': [[
          'ulist',
          [[
            'ulistItem',
            [
              ['para', ['listitem1']],
              [
                'ulist',
                [
                  [
                    'ulistItem',
                    [
                      ['para', ['sublistitem1']],
                      ['olist', [['olistItem', ['osubsublistitem1']]]],
                      ['ulist', [['ulistItem', ['usubsublistitem1']]]]
                    ]
                  ],
                  ['ulistItem', ['sublistitem2']]
                ]
              ]
            ]
          ]]
        ]]
    },
    {
        'in':[
          '* listitem1',
          '  * sublistitem1',
          '    * subsublistitem1',
          '  * sublistitem2',
          '    * subsublistitem2'],
        'out': [[
          'ulist',
          [[
            'ulistItem',
            [
              ['para', ['listitem1']],
              [
                'ulist',
                [
                  [
                    'ulistItem',
                    [
                      ['para', ['sublistitem1']],
                      ['ulist', [['ulistItem', ['subsublistitem1']]]]
                    ]
                  ],
                  [
                    'ulistItem',
                    [
                      ['para', ['sublistitem2']],
                      ['ulist', [['ulistItem', ['subsublistitem2']]]]
                    ]
                  ]
                ]
              ]
            ]
          ]]
        ]]
    },
    {
        'in': [
          '* listitem1',
          '* listitem2',
          '  * sublistitem21',
          '* listitem3',
          '  * sublistitem31',
          '  * sublistitem32'],
        'out': [[
          'ulist',
          [
            ['ulistItem', ['listitem1']],
            [
              'ulistItem',
              [['para', ['listitem2']],
               ['ulist', [['ulistItem', ['sublistitem21']]]]]
            ],
            [
              'ulistItem',
              [
                ['para', ['listitem3']],
                [
                  'ulist',
                  [
                    ['ulistItem', ['sublistitem31']],
                    ['ulistItem', ['sublistitem32']]
                  ]
                ]
              ]
            ]
          ]
        ]]
    },
    {
        'in': [
          '1. listitem1',
          '2. listitem2',
          '  * sublistitem21',
          '3. listitem3',
          '  * sublistitem31',
          '  * sublistitem32'],
        'out': [[
          'olist',
          [
            ['olistItem', ['listitem1']],
            ['olistItem',
              [['para', ['listitem2']],
               ['ulist', [['ulistItem', ['sublistitem21']]]]]
            ],
            [
              'olistItem',
              [
                ['para', ['listitem3']],
                [
                  'ulist',
                  [
                    ['ulistItem', ['sublistitem31']],
                    ['ulistItem', ['sublistitem32']]
                  ]
                ]
              ]
            ]
          ]
        ]]
    },
    {
      'in':['1. oli1',
            '2. oli2',
            '  * uli21',
            '  * uli22',
            '    1. oli221',
            '    2. oli222',
            '      * uli2221',
            '      * uli2222',
            '      * uli2223',
            '    3. oli223',
            '  * uli23',
            '3. li3'],
      'out':[["olist",
              [["olistItem", ["oli1"]],
               ["olistItem",
                [["para", ["oli2"]],
                 ["ulist",
                  [["ulistItem", ["uli21"]],
                   ["ulistItem",
                    [["para", ["uli22"]],
                     ["olist",
                      [["olistItem", ["oli221"]],
                       ["olistItem",
                        [["para", ["oli222"]],
                         ["ulist",
                          [["ulistItem", ["uli2221"]],
                           ["ulistItem", ["uli2222"]],
                           ["ulistItem", ["uli2223"]]]]]],
                       ["olistItem", ["oli223"]]]]]],
                   ["ulistItem", ["uli23"]]]]]],
               ["olistItem", ["li3"]]]]]
    },
    
    {
        'in': [
          'para1',
          '* listitem1',
          '* listitem2',
          '',
          'para2'],
        'out': [
          ['para', ['para1']],
          [
            'ulist',
            [
              ['ulistItem', ['listitem1']],
              ['ulistItem', ['listitem2']]
            ]
          ],
          ['para', ['para2']]
        ]
    },
    {
        'in': [
          '==header11**bold1**',
          '',
          'para2',
          '===header22',
          'para2',
          '====header33=='],
        'out': [
          ['header1', ['header11', ['bold', ['bold1']]], 'header11bold1'],
          ['para', ['para2']],
          ['header2', ['header22'], 'header22'],
          ['para', ['para2']],
          ['header3', ['header33'], 'header33']
        ]
    },
    {
        'in': [
          '==**xbold1**',
          '',
          '**para2**',
          '===**header22**',
          '**para2**',
          '====**header33**=='],
        'out': [
          ['header1', [['bold', ['xbold1']]], 'xbold1'],
          ['para', [['bold', ['para2']]]],
          ['header2', [['bold', ['header22']]], 'header22'],
          ['para', [['bold', ['para2']]]],
          ['header3', [['bold', ['header33']]], 'header33']
        ]
    },
    {
        'in': [
          '==header11==#id1',
          '===header22===#idw',
          '====header33====#idq'],
        'out': [
          ['header1', ['header11'], 'id1'],
          ['header2', ['header22'], 'idw'],
          ['header3', ['header33'], 'idq']
        ]
    },
    {
        'in': [
          '==**xbold1**id1',
          '',
          '**para2**',
          '===**header22**id2',
          '**para2**',
          '====**header33**==id3'],
        'out': [
          ['header1', [['bold', ['xbold1']], 'id1'], 'xbold1id1'],
          ['para', [['bold', ['para2']]]],
          ['header2', [['bold', ['header22']], 'id2'], 'header22id2'],
          ['para', [['bold', ['para2']]]],
          ['header3', [['bold', ['header33']]], 'id3']
        ]
    },
    {
        'in': [
          '=== header',
          '#id',
          'sometext'],
        'out': [
          ['header2', ['header'], 'header'],
          ['para', ['#id sometext']]
        ]
    },
    {
        'in': '===АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя',
        'out': [
          ['header2', ['АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя'], 'AaBbVvGgDdEeYoyoZhzhZzIiJjKkLlMmNnOoPpRrSsTtUuFfXxCcChchShshShhshhYyYyYyEeYuyuYaya']
        ]
    },
    {
        'in': '===**header** & __т е с т__',
        'out': [
          ['header2', [['bold', ['header']], ' & ', ['underline', ['т е с т']]], 'headertest']
        ]
    },
    {
        'in': [
          '* listitem **bold**',
          '* listitem //italic//',
          '* listitem **bo//italic_**'],
        'out': [[
          'ulist',
          [
            ['ulistItem', ['listitem ', ['bold', ['bold']]]],
            ['ulistItem', ['listitem ', ['italic', ['italic']]]],
            [
              'ulistItem',
              ['listitem ', ['bold', ['bo', ['italic_', ['italic_']]]]]
            ]
          ]
        ]]
    },
    {
        'name':'empty lines terminate lists',
        //seems that we have to abandon it. see 'allow empty lines in lists' test
        'in': [
          '* listitem **bold**',
          '* listitem //italic//',
          '',
          '* listitem **bo//italic_**'],
        'out': [
          [
            'ulist',
            [
              ['ulistItem', ['listitem ', ['bold', ['bold']]]],
              ['ulistItem', ['listitem ', ['italic', ['italic']]]]
            ]
          ],
          [
            'ulist',
            [[
              'ulistItem',
              [
                'listitem ',
                ['bold', ['bo', ['italic_', ['italic_']]]]
              ]
            ]]
          ]
        ]
    },
    {
        'in': '~**xb~ol -- dx**',
        'out': [[
          'para',
          [['escaped', '*'], '*xb', ['escaped', 'o'], 'l – dx', ['bold_', []]]
        ]]
    },
    {
        'in': '((http://ya.ru',
        'out': [['para', [['link_', 'http://ya.ru']]]]
    },
    {
        'in': '//iii ((http://ya".ru ((http://x.ru x<x>x))',
        'out': [[
          'para',
          [
            ['italic_', ['iii ']],
            ['link_', 'http://ya".ru'], ' ',
            ['link', 'http://x.ru', ['x<x>x']]
          ]
        ]]
    },
    {
        'in': '[[http://ya.ru]] bla]]bla',
        'out': [[
          'para',
          [['link', 'http://ya.ru', []], ' bla', '', 'bla']
        ]]
    },
    {
        'in': 'line1\\\\line2',
        'out': [[
          'para',
          ['line1', ['lineBreak', []], 'line2']
        ]]
    },
    {
        'in': [
          'line1',
          '%%',
          'ext1',
          '%%',
          '%%A%',
          'ext2',
          '%A%%',
          '%%A%html',
          '<b>bol%%d</b>',
          '%A%%',
          '',
          '%%bla',
          'blabla',
          '%%'],
        'out': [
          ['para', ['line1']],
          ['extension', '', 'ext1', ''],
          ['extension', '', 'ext2', ''],
          ['extension', 'html', '<b>bol%%d</b>', ''],
          ['extension', 'bla', 'blabla', '']
        ]
    },
    {
        'in': [
          '%%ext params',
          'extcont',
          '%%'],
        'out': [
          ['extension', 'ext', 'extcont', 'params']
        ]
    },
    {
        'in': [
          '%%ohl js',
          'var b = \'bla\';',
          '%%'],
        'out': [
          [
            'extension', 'ohl',
            [
              'js',
              [
                ['keyword.declaration', 'var'], ' ',
                ['name', 'b'], ' ', ['operator', ['=']], ' ',
                [
                  'string.single',
                  [
                    ['punctuation', '\''], 'b', 'l', 'a',
                    ['punctuation', '\'']
                  ]
                ],
                ['punctuation', [';']]
              ]
            ],
            'js'
          ]
        ]
    },
    {
        'in': [
          '%%hl js',
          'var b = \'bla\';',
          '%%'],
        'out': [
          [
            'extension', 'hl',
            [
              'js',
              [
                ['keyword.declaration', 'var'], ' ',
                ['name', 'b'], ' ',
                ['operator', ['=']], ' ',
                [
                  'string.single', [['punctuation', '\''],
                  'b', 'l', 'a',
                  ['punctuation', '\'']]
                ],
                ['punctuation', [';']]
              ]
            ], 'js'
          ]
        ]
    },
    {
        'in': [
          'bla',
          '%%hljs javascript',
          'function() { return true }',
          '%%',
          'bla'],
        'out': [
          ['para', ['bla']],
          ['extension', 'hljs', 'function() { return true }', 'javascript'],
          ['para', ['bla']]
        ]
    },

    {
        'in': [
          'para1',
          '',
          'para2',
          'para2',
          '',
          'para3'],
        'out': [
          ['para', ['para1']],
          ['para', ['para2 para2']],
          ['para', ['para3']]
        ]
    },
  
    {
      'in':[
        '   * item1',
        '     %%hljs',
        '       smth.prop=a+b',
        '     %%',
        '   * item2',
        '   * item3'],
      'out':[
        ['ulist', [
          ['ulistItem',
           [['para',['item1']],
            ['extension','hljs',
             '  smth.prop=a+b','']]],
          ['ulistItem',['item2']],
          ['ulistItem',['item3']]]]]},

    {
      'name':'misplaced indent behavior',
      //closing extension tag indent should strictly match indent of
      //opening one and all extension's inner lines should be indented
      //equally or more then opening extension tag
      'in':[
        ' * item1',
        '   * item2',
        '  %%hljs',
        '    anyjs();',
        '',
        '    otherjs();',
        ' anotherjs();',//this breaks extension block,
        //so block is parsed as para, not including this line
        ' %%' //unindent of closing tag breaks extension block too
      ],
      'out':[
        ["ulist",
         [["ulistItem",
           [["para",["item1"]],
            ["ulist",[
              ["ulistItem",["item2"]]]],
            ["para",["%%hljs anyjs();"]],
            ["para",["otherjs();"]]]]]],
        ["para",["anotherjs(); %%"]]]
    },

    {
      'in':[
        ' * item1',
        '   * item2',
        '  %%A%hljs',
        '', //empty lines don't break extension blocks
        '    ', //without any regard of contained spaces
        '  function(){return null}',
        '  %A%%'],
      'out':[
        ["ulist",[
          ["ulistItem",
           [["para", ["item1"]],
            ["ulist",[
              ["ulistItem",["item2"]]]],
            ["extension","hljs",
             "\n\nfunction(){return null}",""]]]]]]
    },

    {
      'name':'allow empty lines in lists',
      //We have to allow these. How else would paragraphs in
      //listitems be separated? (see 'block elements inside lists')
      'in':[
        ' * item1',
        ' * item2',
        '',
        '   * item22',
        '',
        '     ', //don't care about space in empty lines
        '   * item23',
        '',
        ' * item3',
        ' ',
        ' * item4'],
      'out':[
        ['ulist',
         [['ulistItem',['item1']],
          ['ulistItem',
           [['para', ['item2']],
            ['ulist',
             [['ulistItem',['item22']],
              ['ulistItem',['item23']]]]]],
          ['ulistItem',['item3']],
          ['ulistItem',['item4']]]]]},

    {
      'name':'block elements inside lists',
      'in':[
        ' * item1 something', //inline list contents
        '',
        ' * item2 para1', //more then one paragraph, so both go in `para
        '',
        '  item2 para2 something',
        '   item2 para2 more',
        '',
        ' * item3'],
      'out':[
        ['ulist',
         [['ulistItem',['item1 something']],
          ['ulistItem',
           [['para' ['item2 para1']],
            ['para' ['item2 para2 something item2 para2 more']]]],
          ['ulistItem',['item3']]]]]
    },

    {
      'name':'unindented headers terminate lists',
      'in':[
        ' * item11',
        ' * item12',
        '',
        '  ==inner header',
        ' * item13',
        '==header',
        ' * item21'],
      'out':[
        ['ulist',
         [['ulistItem',['item11']],
          ['ulistItem',
           [['para', ['item12']],
            ['header3',['inner header'],'innerheader']]]]],
        ['header1',['header'],'header'],
        ['ulist',
         [['ulistItem',['item21']]]]]
    },

  {
    'name':'all kinds of in-list blocks',
    'in':[
      " * item1", //inline content in list item: <li>item1</li>
      "",
      " * item2 para1",
      "",
      "  item2 para2",
      "    item2 para2 more",
      // more then one para in list item,
      // so both go as para:
      // <li><p>item2 para1</p>
      //     <p>item2 para2 item2 para2 more"</p></li>        
      " * ==item3", 
      "  some more in item3 header",
      "   and more header content==item3",
      //in-list header could be constant h3 or h4 regardless of
      //header level specified by === signs 
      //alternatively, it could start at h3 and go smaller, i.e.
      // ===header== would be h4, ==== would be h5 etc.
      "",
      "  %%hljs",
      "    illustrative();",
      "  %%",
      "",
      "  item3 para1",
      "    some more item3 para1",
      "   and more item3 para1",
      "",
      "  item3 para2",
      "   item3 para2 more",
      "",
      // item3 would translate as:
      // <li>
      //   <h3 id="item3">item3 some more in item3 header
      //     and some more item3 header content</h3>
      //   <p>item3 para1 some more item3 para1 and more item3
      //   para1</p>
      //   <p>item3 para2 item3 para2 more</p>
      // </li>
      //
      " * ==item4", 
      "   * ==item41",
      "   * ==item42==id42",
      "    item42 para1",
      "    item42 para1 more",
      "",
      "    item42 para2",
      "",
      "   * ==item43==",
      "     item43 para"],
    'out':[
      ["ulist",
       [["ulistItem",["item1"]],
        ["ulistItem",
         [["para",["item2 para1"]],
          ["para",["item2 para2 item2 para2 more"]]
          ["ulistItem",
           [["header3",["item3 some more in item3 header "+
                        "and more header content"],"item3"]
            ["extension","hljs",
             "  illustrative();",""],
            ["para",["item3 para1 some more item3 para1 "+
                     "and more item3 para1"],
             ["para",["item3 para2 item3 para2 more"]]]]],
          ["ulistItem",
           [["header3",["item4"]],
            ["ulist",
             [["ulistItem",
               [["header3",["item41"],"item41"]]],
              ["ulistItem",
               [["header3",["item42"],"id42"],
                ["para",["item42 para1 item42 para1 more"]]
                ["para",["item42 para2"]]]],
              ["ulistItem",
               [["header3",["item43"],"item43"],
                ["para",["item43 para"]]]]]]]]]]]]]
  }


  
];

var api = require('../lib/shmakowiki.js'),
    totalFail = 0;

for (var i = 0; i < tests.length; i++) {
    var test = tests[i];

    test['in'] = (typeof test['in'] === 'string' ?
                  test['in'] : test['in'].join('\n'));
    
    test.res = api.shmakowikiToAst(test['in']);

    var res = JSON.stringify(test.res),
        out = JSON.stringify(test.out),
        isOk = res == out;

    console.log('Test in:\n' + test['in'] + '\n: ' + (isOk ? 'ok' : 'FAIL'));
    console.log('Test result:\n' + res);
    if (!isOk) {
        totalFail++;
        console.log('Test out:\n' + out);
    }

    test.html = api.astToHtml(test.res);
    console.log('Test html:\n' + test.html);

    test.bemjson = api.astToBemjson(test.res);
    console.log('Test bemjson:\n' + JSON.stringify(test.bemjson));

    console.log('-----------------------------------------------------');
}
console.log('\n' + (totalFail ? 'Total FAIL: ' + totalFail : 'All Ok'));
