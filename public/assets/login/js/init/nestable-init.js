 (function() {

    "use strict";

    var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if(window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
            }
            else {
                output.val('JSON browser support required for this demo.');
            }
        };

        var json = [
            {
                "id": 1,
                "content": "First item",
                "classes": ["dd-nochildren"]
            },
            {
                "id": 2,
                "content": "Second item",
                "children": [
                    {
                        "id": 3,
                        "content": "Item 3"
                    },
                    {
                        "id": 4,
                        "content": "Item 4"
                    },
                    {
                        "id": 5,
                        "content": "Item 5",
                        "value": "Item 5 value",
                        "foo": "Bar",
                        "children": [
                            {
                                "id": 6,
                                "content": "Item 6"
                            },
                            {
                                "id": 7,
                                "content": "Item 7"
                            },
                            {
                                "id": 8,
                                "content": "Item 8"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 9,
                "content": "Item 9"
            },
            {
                "id": 10,
                "content": "Item 10",
                "children": [
                    {
                        "id": 11,
                        "content": "Item 11",
                        "children": [
                            {
                                "id": 12,
                                "content": "Item 12"
                            }
                        ]
                    }
                ]
            }
        ];
        var lastId = 12;

        // activate Nestable for list 1
        $('#nestable').nestable({
            group: 1,
            json: json,
            contentCallback: function(item) {
                var content = item.content || '' ? item.content : item.id;
                content += ' <i>(id = ' + item.id + ')</i>';

                return content;
            }
        }).on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
            group: 1
        }).on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('#xp-nestable-menu').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if(action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if(action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
            if(action === 'add-item') {
                var newItem = {
                    "id": ++lastId,
                    "content": "Item " + lastId,
                    "children": [
                        {
                            "id": ++lastId,
                            "content": "Item " + lastId,
                            "children": [
                                {
                                    "id": ++lastId,
                                    "content": "Item " + lastId
                                }
                            ]
                        }
                    ]
                };
                $('#nestable').nestable('add', newItem);
            }
            if(action === 'replace-item') {
                var replacedItem = {
                    "id": 10,
                    "content": "New item 10",
                    "children": [
                        {
                            "id": ++lastId,
                            "content": "Item " + lastId,
                            "children": [
                                {
                                    "id": ++lastId,
                                    "content": "Item " + lastId
                                }
                            ]
                        }
                    ]
                };
                $('#nestable').nestable('replace', replacedItem);
            }
        });

        $('#nestable3').nestable();


})();