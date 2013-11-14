define(function(require, exports, module) {

exports.snippetText = "# Grid\n\
snippet iggrid\n\
        $(\"${1:grid_id}\").igGrid({\n\
                ${2:// options...}\n\
        });\n\
# Tree\n\
snippet igtree\n\
        $(\"${1:tree_id}\").igTree({\n\
            ${2:// options...}\n\
        });\n\
";

exports.scope = "javascript";

});