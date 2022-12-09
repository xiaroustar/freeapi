 (function() {

    "use strict";

    /* ----- Basic ----- */
    $('#xp-types-tree').jstree({
        'core' : {
            'themes' : {
                'responsive': false
            },
            'data' : [
                  {
                      "text" : "Neon",
                      "state" : {"opened" : true },
                      "icon" : "mdi mdi-folder",
                      "children" : [
                          {
                            "text" : "Assets",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-folder",
                             "children" : [
                                  { "text" : "CSS", "state" : { "opened" : true }, "icon" : "mdi mdi-file" },
                                  { "text" : "JS", "icon" : "mdi mdi-file" },
                                  { "text" : "Fonts", "icon" : "mdi mdi-file" },
                                  { "text" : "Images", "icon" : "mdi mdi-file" },
                                  { 
                                    "text" : "Plugins",                                     
                                    "state" : { "opened" : true },
                                    "icon" : "mdi mdi-folder",  
                                    "children" : [
                                          { "text" : "jQuery", "icon" : "mdi mdi-file" },
                                          { "text" : "Bootstrap", "state" : { "selected" : true, "opened" : true }, "icon" : "mdi mdi-file" }
                                      ]
                                  }
                              ]
                          },
                          {
                            "text" : "Icons",
                            "icon" : "mdi mdi-album"
                          },
                          {
                            "text" : "Events",
                            "icon" : "mdi mdi-eventbrite"
                          },
                          {
                            "text" : "UI Kits",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-layers",
                            "children" : [
                                  { "text" : "Buttons", "icon" : "mdi mdi-file" },
                                  { "text" : "Badges", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Forms",
                            "icon" : "mdi mdi-file-document-box"
                          },
                          {
                            "text" : "Charts",
                            "icon" : "mdi mdi-chart-areaspline"
                          },
                          {
                            "text" : "Pages",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-book-open-page-variant",
                            "children" : [
                                  { "text" : "Coming Soon", "icon" : "mdi mdi-file" },
                                  { "text" : "Maintenance", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Tables",
                            "icon" : "mdi mdi-table"
                          },
                      ]
                },
                {
                    "text" : "Documents",
                    "state" : { "opened" : true },
                    "icon" : "mdi mdi-folder"
                }
              ]
        },
        'plugins' : ['types']
    });
    
    /* ----- Checkbox ----- */
    $('#xp-checkbox-tree').jstree({
        'core' : {
            'themes' : {
                'responsive': false
            },
            'data' : [
                  {
                      "text" : "Neon",
                      "state" : {"opened" : true },
                      "icon" : "mdi mdi-folder",
                      "children" : [
                          {
                            "text" : "Assets",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-folder",
                             "children" : [
                                  { "text" : "CSS", "state" : { "opened" : true }, "icon" : "mdi mdi-file" },
                                  { "text" : "JS", "icon" : "mdi mdi-file" },
                                  { "text" : "Fonts", "icon" : "mdi mdi-file" },
                                  { "text" : "Images", "icon" : "mdi mdi-file" },
                                  { 
                                    "text" : "Plugins",                                     
                                    "state" : { "opened" : true },
                                    "icon" : "mdi mdi-folder",  
                                    "children" : [
                                          { "text" : "jQuery", "icon" : "mdi mdi-file" },
                                          { "text" : "Bootstrap", "state" : { "selected" : true, "opened" : true }, "icon" : "mdi mdi-file" }
                                      ]
                                  }
                              ]
                          },
                          {
                            "text" : "Icons",
                            "icon" : "mdi mdi-album"
                          },
                          {
                            "text" : "Events",
                            "icon" : "mdi mdi-eventbrite"
                          },
                          {
                            "text" : "UI Kits",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-layers",
                            "children" : [
                                  { "text" : "Buttons", "icon" : "mdi mdi-file" },
                                  { "text" : "Badges", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Forms",
                            "icon" : "mdi mdi-file-document-box"
                          },
                          {
                            "text" : "Charts",
                            "icon" : "mdi mdi-chart-areaspline"
                          },
                          {
                            "text" : "Pages",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-book-open-page-variant",
                            "children" : [
                                  { "text" : "Coming Soon", "icon" : "mdi mdi-file" },
                                  { "text" : "Maintenance", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Tables",
                            "icon" : "mdi mdi-table"
                          },
                      ]
                },
                {
                    "text" : "Documents",
                    "state" : { "opened" : true },
                    "icon" : "mdi mdi-folder"
                }
              ]
        },
        'plugins' : ['types', 'checkbox']
    });
    
    /* ----- Drag & Drop ----- */
    $('#xp-drag-drop-tree').jstree({
        'core' : {
            'themes' : {
                'responsive': false
            },
            'check_callback' : true,
            'data' : [
                  {
                      "text" : "Neon",
                      "state" : {"opened" : true },
                      "icon" : "mdi mdi-folder",
                      "children" : [
                          {
                            "text" : "Assets",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-folder",
                             "children" : [
                                  { "text" : "CSS", "state" : { "opened" : true }, "icon" : "mdi mdi-file" },
                                  { "text" : "JS", "icon" : "mdi mdi-file" },
                                  { "text" : "Fonts", "icon" : "mdi mdi-file" },
                                  { "text" : "Images", "icon" : "mdi mdi-file" },
                                  { 
                                    "text" : "Plugins",                                     
                                    "state" : { "opened" : true },
                                    "icon" : "mdi mdi-folder",  
                                    "children" : [
                                          { "text" : "jQuery", "icon" : "mdi mdi-file" },
                                          { "text" : "Bootstrap", "state" : { "selected" : true, "opened" : true }, "icon" : "mdi mdi-file" }
                                      ]
                                  }
                              ]
                          },
                          {
                            "text" : "Icons",
                            "icon" : "mdi mdi-album"
                          },
                          {
                            "text" : "Events",
                            "icon" : "mdi mdi-eventbrite"
                          },
                          {
                            "text" : "UI Kits",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-layers",
                            "children" : [
                                  { "text" : "Buttons", "icon" : "mdi mdi-file" },
                                  { "text" : "Badges", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Forms",
                            "icon" : "mdi mdi-file-document-box"
                          },
                          {
                            "text" : "Charts",
                            "icon" : "mdi mdi-chart-areaspline"
                          },
                          {
                            "text" : "Pages",
                            "state" : { "opened" : true },
                            "icon" : "mdi mdi-book-open-page-variant",
                            "children" : [
                                  { "text" : "Coming Soon", "icon" : "mdi mdi-file" },
                                  { "text" : "Maintenance", "icon" : "mdi mdi-file" }
                              ]
                          },
                          {
                            "text" : "Tables",
                            "icon" : "mdi mdi-table"
                          },
                      ]
                },
                {
                    "text" : "Documents",
                    "state" : { "opened" : true },
                    "icon" : "mdi mdi-folder"
                }
              ]
        },
        'plugins' : ['dnd']
    });
    
    /* ----- Ajax ----- */
    $('#xp-ajax-tree').jstree({
        'core' : {
            'animation' : 0,
            'check_callback' : true,
            'force_text' : true,
            'themes' : {
                'responsive': false
            },
            'data' : {
                'url' : function (node) {
                    return node.id === '#' ? './assets/plugins/jstree/ajax_roots.json' : './assets/plugins/jstree/ajax_children.json';
                },
                'data' : function (node) {
                    return { 'id' : node.id };
                }
            }
        },
        "types" : {
            'default' : {
                'icon' : 'mdi mdi-folder'
            },
            'file' : {
                'icon' : 'mdi mdi-file'
            }
        },
        "plugins" : [ "contextmenu", "dnd", "search", "state", "types", "wholerow" ]
    });


})();