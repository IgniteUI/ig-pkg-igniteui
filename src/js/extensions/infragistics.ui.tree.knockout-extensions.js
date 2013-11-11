﻿/*!@license
 * Infragistics.Web.ClientUI igTree KnockoutJS extension 13.2.20132.267
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.7.*.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.draggable.js
 *	jquery.ui.droppable.js
 *	infragistics.templating.js
 *	infragistics.dataSource.js
 *  infragistics.ui.shared.js
 *	infragistics.util.js
 *	infragistics.ui.tree-en.js
 *	infragistics.ui.tree.js
 */
ko.bindingHandlers.igTree={init:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){var options=$.extend(true,{},ko.utils.unwrapObservable(valueAccessor())),ds=options.dataSource,addHandler,deleteHandler;addHandler=function(event,ui){if(ui.element.attr("data-path").split(ui.owner.options.pathSeparator).length<=1){ds.valueHasMutated();$(element).find(".ui-igtree-noderoot").each(function(index,node){ko.applyBindingsToNode(node,{igTreeNode:{value:ds()[index],bindings:options.bindings}},ds()[index])})}};deleteHandler=function(event,ui){ds.valueHasMutated()};options.dataSource=ko.utils.unwrapObservable(options.dataSource);options.nodeAdded=addHandler;options.nodeDeleted=deleteHandler;$(element).igTree(options);$(element).find(".ui-igtree-noderoot").each(function(index,node){ko.applyBindingsToNode(node,{igTreeNode:{value:ds()[index],bindings:options.bindings}},ds()[index])})},update:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){var options=ko.utils.unwrapObservable(valueAccessor()),ds=options.dataSource,tree=$(element);options.dataSource=ko.utils.unwrapObservable(options.dataSource);if(tree.find(".ui-igtree-noderoot").length!==ds().length){tree.igTree("option","dataSource",options.dataSource);tree.find(".ui-igtree-noderoot").each(function(index,node){ko.applyBindingsToNode(node,{igTreeNode:{value:ds()[index],bindings:options.bindings}},ds()[index])})}}};ko.bindingHandlers.igTreeNodeCollection={init:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){var options=valueAccessor(),bindings=options.bindings,ds=options.value,children=$(element).children("li"),addHandler,deleteHandler;addHandler=function(event,ui){if(ui.element.attr("data-path").split(ui.owner.options.pathSeparator).length>1){$(element).children("li").each(function(index,node){ko.applyBindingsToNode(node,{igTreeNode:{value:ds()[index],bindings:bindings.bindings||bindings}},ds()[index])})}};deleteHandler=function(event,ui){if($(element).children("li").length!==ds().length){ds.valueHasMutated()}};$(element).closest(".ui-igtree").on("igtreenodeadded",addHandler);$(element).closest(".ui-igtree").on("igtreenodedeleted",deleteHandler);children.each(function(index,node){ko.applyBindingsToNode(node,{igTreeNode:{value:ds()[index],bindings:bindings.bindings||bindings}},ds()[index])})},update:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){var options=valueAccessor(),children=$(element).children("li"),ds=options.value;if(children.length!==ds().length){$(element).empty();$(element).closest(".ui-igtree").igTree("addNode",ds(),$(element).parent("li"))}}};ko.bindingHandlers.igTreeNode={init:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){var options=valueAccessor(),bindings=options.bindings,ds=options.value,children=$(element).children("ul");if(children.length>0){ko.applyBindingsToNode(children[0],{igTreeNodeCollection:{value:ds[bindings.childDataProperty],bindings:bindings}},ds[bindings.childDataProperty])}},update:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){$(element).closest(".ui-igtree").igTree("applyChangesToNode",$(element),valueAccessor().value)}};