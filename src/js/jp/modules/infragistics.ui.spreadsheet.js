/*!@license
* Infragistics.Web.ClientUI Spreadsheet 17.1.20171.1012
*
* Copyright (c) 2015-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery.js
* jquery-ui.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ext_core.js
* infragistics.ext_collections.js
* infragistics.ext_collectionsExtended.js
* infragistics.ext_io.js
* infragistics.ext_text.js
* infragistics.ext_web.js
* infragistics.xml.js
* infragistics.documents.core_core.js
* infragistics.documents.core_openxml.js
* infragistics.dv_core.js
* infragistics.dv_jquerydom.js
* infragistics.excel_core.js
* infragistics.ext_ui.js
* infragistics.undo.js
* infragistics.spreadsheet.js
*/

/*global jQuery */
if (typeof (jQuery) === "undefined") {
    throw new Error("jQuery is undefined");
}

(function ($) {
    // igSpreadsheet definition
    $.widget('ui.igSpreadsheet', {
        css: {
            /* Get the class applied to main element, shown when the spreadsheet is opened in a non HTML5 compatible browser. */
            unsupportedBrowserClass: "ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",
            /* Get the class applied to the main element */
            spreadsheet: "ui-igspreadsheet",
            /* Get the class applied to the spreadsheet's tooltip */
            tooltip: "ui-igspreadsheet-tooltip ui-tooltip ui-widget-content ui-corner-all",
            /* Get the class applied to the select all button at the intersection between the row and column header areas */
            selectAll: "ui-igspreadsheet-selectall",
            /* Get the class applied to the horizontal splitter bar that is shown when the worksheet is split vertically */
            rowSplitter: "ui-igspreadsheet-rowsplitter",
            /* Get the class applied to the vertical splitter bar that is shown when the worksheet is split horizontally */
            columnSplitter: "ui-igspreadsheet-columnsplitter",
            /* Get the class applied to the element that is displayed while dragging the horizontal row splitter */
            rowSplitterPreview: "ui-igspreadsheet-rowsplitterpreview",
            /* Get the class applied to the element that is displayed while dragging the vertical column splitter */
            columnSplitterPreview: "ui-igspreadsheet-columnsplitterpreview",
            /* Get the class applied to to the element that is displayed while dragging the vertical column splitter */
            splitterIntersection: "ui-igspreadsheet-splitterintersection",
            /* Get the class applied to the element where the row headers are rendered */
            rowHeaderArea: "ui-igspreadsheet-rowheaderarea",
            /* Get the class applied to the element where the column headers are rendered */
            columnHeaderArea: "ui-igspreadsheet-columnheaderarea",
            /* Get the class applied to the element between the tab area and the column scrollbar that is used to adjust the size of the tab area  */
            tabAreaSplitter: "ui-igspreadsheet-tabareasplitter",
            /* Get the class applied to the element behind the tab area */
            tabAreaBackground: "ui-igspreadsheet-tabareabackground",
            /* Get the class applied to the element that separates the tab area from the spreadsheet pane area  */
            tabAreaBorder: "ui-igspreadsheet-tabareaborder",
            /* Get the class applied to the element that represents the tab for a worksheet */
            tabItem: "ui-igspreadsheet-tabitem",
            /* Get the class applied to the element that represents the active tab for a worksheet */
            tabItemActive: "ui-igspreadsheet-tabitem-active",
            /* Get the class applied to the element that represents a worksheet tab when it is selected but is not active */
            tabItemSelected: "ui-igspreadsheet-tabitem-selected",
            /* Get the class added to element that represents the tab for a protected worksheet */
            tabItemProtected: "ui-igspreadsheet-tabitem-protected",
            /* Get the class applied to the element that contains the content for the tab for a worksheet */
            tabItemContent: "ui-igspreadsheet-tabitemcontent",
            /* Get the class applied to the element that contains the content for the tab for a worksheet when the assigned color is calculated to be a dark color */
            tabItemDark: "ui-igspreadsheet-tabitem-dark",
            /* Get the class applied to the element that contains the content for the tab for a worksheet when the assigned color is calculated to be a light color */
            tabItemLight: "ui-igspreadsheet-tabitem-light",
            /* Get the class applied to the element where the tab buttons and items are rendered  */
            tabItemArea: "ui-igspreadsheet-tabitemarea",
            /* Get the class applied to the element displayed during the dragging of a tab to indicate the new position  */
            tabDropIndicator: "ui-igspreadsheet-tabDropIndicator",
            /* Get the class applied to the tab item area button that is used to scroll to the first tab  */
            scrollFirstTabButton: "ui-igspreadsheet-scrollfirsttab",
            /* Get the class applied to the tab item area button that is used to scroll to the previous tab  */
            scrollPreviousTabButton: "ui-igspreadsheet-scrollprevioustab",
            /* Get the class applied to the tab item area button that is used to scroll to the last tab  */
            scrollLastTabButton: "ui-igspreadsheet-scrolllasttab",
            /* Get the class applied to the tab item area button that is used to scroll to the next tab  */
            scrollNextTabButton: "ui-igspreadsheet-scrollnexttab",
            /* Get the class applied to the tab item area button that is used to activate the next out of view tab  */
            activateNextHiddenTabButton: "ui-igspreadsheet-activatenexthiddentab",
            /* Get the class applied to the tab item area button that is used to activate the previous out of view tab  */
            activatePreviousHiddenTabButton: "ui-igspreadsheet-activateprevioushiddentab",
            /* Get the class applied to the tab item area button that is used to create a new worksheet  */
            addNewWorksheetButton: "ui-igspreadsheet-addnewworksheet",
            /* Get the class applied to the element that represents the input message from the data validation of the current active cell  */
            inputMessage: "ui-igspreadsheet-inputmessage",
            /* Get the class applied to the content/body of the input message  */
            inputMessageContent: "ui-igspreadsheet-inputmessage-content",
            /* Get the class applied to the title of the input message  */
            inputMessageTitle: "ui-igspreadsheet-inputmessage-title",
            /* Get the class applied to the vertical scrollbar  */
            scrollBarVertical: "ui-igspreadsheet-scrollbar-vertical",
            /* Get the class applied to the horizontal scrollbar  */
            scrollBarHorizontal: "ui-igspreadsheet-scrollbar-horizontal",
            /* Get the class applied to the left scrollbar arrow  */
            scrollBarArrowLeft: "ui-igspreadsheet-scrollbar-button-left",
            /* Get the class applied to the right scrollbar arrow  */
            scrollBarArrowRight: "ui-igspreadsheet-scrollbar-button-right",
            /* Get the class applied to the up scrollbar arrow  */
            scrollBarArrowUp: "ui-igspreadsheet-scrollbar-button-up",
            /* Get the class applied to the down scrollbar arrow  */
            scrollBarArrowDown: "ui-igspreadsheet-scrollbar-button-down",
            /* Get the class applied to the track between the left button and the scrollbar thumb  */
            scrollBarTrackLeft: "ui-igspreadsheet-scrollbar-track-left",
            /* Get the class applied to the track between the right button and the scrollbar thumb  */
            scrollBarTrackRight: "ui-igspreadsheet-scrollbar-track-right",
            /* Get the class applied to the track between the up button and the scrollbar thumb  */
            scrollBarTrackUp: "ui-igspreadsheet-scrollbar-track-up",
            /* Get the class applied to the track between the up button and the scrollbar thumb  */
            scrollBarTrackDown: "ui-igspreadsheet-scrollbar-track-down",
            /* Get the class applied to the thumb on the horizontal scrollbar  */
            scrollBarThumbVertical: "ui-igspreadsheet-scrollbar-thumb-vertical",
            /* Get the class applied to the thumb on the vertical scrollbar  */
            scrollBarThumbHorizontal: "ui-igspreadsheet-scrollbar-thumb-horizontal",
            /* Get the class whose style information is used to render the column headers */
            columnHeader: "ui-igspreadsheet-columnheader",
            /* Get the class whose style information is used to render the column headers when the column is selected */
            columnHeaderSelected: "ui-igspreadsheet-columnheader-selected",
            /* Get the class whose style information is used to render the column headers when some cells within the column are selected */
            columnHeaderSelectedCells: "ui-igspreadsheet-columnheader-selectedcells",
            /* Get the class whose style information is used to render the column headers when the mouse is over a header */
            columnHeaderHover: "ui-igspreadsheet-columnheader-hover",
            /* Get the class whose style information is used to render the row headers */
            rowHeader: "ui-igspreadsheet-rowheader",
            /* Get the class whose style information is used to render the row headers when the row is selected */
            rowHeaderSelected: "ui-igspreadsheet-rowheader-selected",
            /* Get the class whose style information is used to render the row headers when some cells within the row are selected */
            rowHeaderSelectedCells: "ui-igspreadsheet-rowheader-selectedcells",
            /* Get the class whose style information is used to render the row headers when the mouse is over a header */
            rowHeaderHover: "ui-igspreadsheet-rowheader-hover",
            /* Get the class whose style information is used to render the lines between rows and columns when a custom color has not been specified */
            automaticGridline: "ui-igspreadsheet-automaticgridline",
            /* Get the class whose style information is used to render the invalid data adorner */
            invalidData: "ui-igspreadsheet-invaliddata",
            /* Get the class whose style information is used to render the preview line displayed while a header is being resized */
            headerResizeLine: "ui-igspreadsheet-header-resizeline",
            /* Get the class whose style information is used to render the selection rect */
            cellSelection: "ui-igspreadsheet-cellselection",
            /* Get the class whose style information is used to render the grip handle on the selection rect */
            cellSelectionHandle: "ui-igspreadsheet-cellselectionhandle",
            /* Get the class applied to the area that contains the elements for the formula bar */
            formulaBar: "ui-igspreadsheet-formulabar",
            /* Get the class applied to the area that contains the namebox within the formula bar */
            nameBoxContainer: "ui-igspreadsheet-nameboxcontainer",
            /* Get the class applied to the element after the namebox that is used to adjust the width of the name box */
            nameBoxSplitter: "ui-igspreadsheet-nameboxsplitter",
            /* Get the class applied to the element containing the text area within the formula bar */
            formulaBarTextAreaContainer: "ui-igspreadsheet-formulabartextareacontainer",
            /* Get the class applied to the element used to resize the formula bar text area */
            formulaBarTextAreaSplitter: "ui-igspreadsheet-formulabartextareasplitter",
            /* Get the class applied to the area within the formula bar containing the enter and cancel buttons */
            formulaBarButtonContainer: "ui-igspreadsheet-formulabarbuttoncontainer",
            /* Get the class applied to the enter button within the formula bar */
            formulaBarEnterButton: "ui-igspreadsheet-formulabarenterbutton",
            /* Get the class applied to the cancel button within the formula bar */
            formulaBarCancelButton: "ui-igspreadsheet-formulabarcancelbutton",
            /* Get the class applied to the button within the formula bar used to expand/collapse the height of the formula bar */
            formulaBarExpandButton: "ui-igspreadsheet-formulabarexpandbutton",
            /* Get the class applied to the formula bar expand button when the formula bar is expanded */
            formulaBarExpandButtonOpen: "ui-igspreadsheet-formulabarexpandbutton-open"
},

        events: {
            	/* cancel="false" Invoked when an action is executed on the Spreadsheet.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that was executed.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%actionexecuted", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			actionExecuted: function(evt, ui) {...}
		});
	```
	*/
	actionExecuted: null,
	/* cancel="true" Invoked when an action is about to be executed by the Spreadsheet.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that is about to be executed.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%actionexecuting", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			actionExecuting: function(evt, ui) {...}
		});
	```
	*/
	actionExecuting: null,
	/* cancel="false" Invoked when the activeCell of the Spreadsheet has changed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.oldValue" argType="string" Gets the previous active cell.
	eventArgument="ui.newValue" argType="string" Gets the current active cell.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%activecellchanged", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			activeCellChanged: function(evt, ui) {...}
		});
	```
	*/
	activeCellChanged: null,
	/* cancel="false" Invoked when the activePane of the Spreadsheet has changed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.oldActivePane" argType="object" Gets the previous active [pane](ig.spreadsheet.SpreadsheetPane).
	eventArgument="ui.newActivePane" argType="object" Gets the current active [pane](ig.spreadsheet.SpreadsheetPane).
	eventArgument="ui.activeCell" argType="string" Gets the active cell of the new active pane or null if there is no active pane.
	eventArgument="ui.visibleRange" argType="string" Gets the current visible range of the new active pane or null if there is no active pane.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%activepanechanged", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			activePaneChanged: function(evt, ui) {...}
		});
	```
	*/
	activePaneChanged: null,
	/* cancel="false" Invoked when the activeWorksheet of the Spreadsheet has changed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.oldActiveWorksheet" argType="object" Gets the previous active [worksheet](ig.excel.Worksheet).
	eventArgument="ui.oldActiveWorksheetName" argType="string" Gets the name of the previous active worksheet or null if oldActiveWorksheet is null.
	eventArgument="ui.newActiveWorksheet" argType="object" Gets the current active [worksheet](ig.excel.Worksheet).
	eventArgument="ui.newActiveWorksheetName" argType="string" Gets the name of the new active worksheet or null if newActiveWorksheet is null.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%activeworksheetchanged", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			activeWorksheetChanged: function(evt, ui) {...}
		});
	```
	*/
	activeWorksheetChanged: null,
	/* cancel="true" Invoked when the Spreadsheet is performing an operation on a protected Worksheet and there is a single range that may be unlocked to allow the operation to be performed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.ranges" argType="array" Get an array of [protected range](ig.excel.WorksheetProtectedRange) objects that should be unlocked.
	eventArgument="ui.unprotect" argType="object" Get a parameterless function that may be invoked to unlock the associated ranges.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%editrangepasswordneeded", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			editRangePasswordNeeded: function(evt, ui) {...}
		});
	```
	*/
	editRangePasswordNeeded: null,
	/* cancel="true" Invoked when a hyperlink is being followed in the Spreadsheet.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.hyperlink" argType="object" Get the [hyperlink](ig.excel.WorksheetHyperlink) to be executed.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%hyperlinkexecuting", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			hyperlinkExecuting: function(evt, ui) {...}
		});
	```
	*/
	hyperlinkExecuting: null,
	/* cancel="false" Invoked when the selection for a ig.spreadsheet.SpreadsheetPane of the Spreadsheet is changed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.pane" argType="object" Get the [pane](ig.spreadsheet.SpreadsheetPane) for which the selection has changed.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%selectionchanged", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			selectionChanged: function(evt, ui) {...}
		});
	```
	*/
	selectionChanged: null,
	/* cancel="true" Invoked when the user will be prompted with a message regarding an operation that is being performed.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	eventArgument="ui.canCancel" argType="bool" Get a boolean indicating if the operation that triggered the prompt can be cancelled.
	eventArgument="ui.displayMessage" argType="bool" Get a boolean indicating if a message will be displayed to the end user.
	eventArgument="ui.exception" argType="object" Gets the exception for the error, if there was one.
	eventArgument="ui.message" argType="string" Get or set the message that will be displayed.
	eventArgument="ui.trigger" argType="string" Get the [action](ig.spreadsheet.SpreadsheetUserPromptTrigger) that caused the prompt to be displayed.
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%userpromptdisplaying", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			userPromptDisplaying: function(evt, ui) {...}
		});
	```
	*/
	userPromptDisplaying: null,
	/* cancel="false" Invoked when a change has been made to the workbook that might require a save.
	eventArgument="evt" argType="event" jQuery event object.
	eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
	Note: This event is invoked asynchronously with regards to the change(s) that 
	have occurred. Also some changes alone are not considered to dirty the Workbook even though it 
	does change state on the Workbook or one of its subobjects. An example of that would be a zoom 
	type operation (e.g. changing the magnificationInNormalView).
	```
		//Delegate
		$(document).delegate(".selector"), "%%WidgetNameLowered%%workbookdirtied", function (evt, ui) {
			...
		});
	
		//Initialize
		$(".selector").%%WidgetName%%({
			workbookDirtied: function(evt, ui) {...}
		});
	```
	*/
	workbookDirtied: null

        },
        options: {
            /* type="string|number" The width of the spreadsheet. It can be set as a number in pixels, string (px) or percentage (%).
			```
				// Initialize
				$(".selector").%%WidgetName%%({
					width : "800px"
				});

				// Get
				var width = $(".selector").%%WidgetName%%("option", "width");

				// Set
				$(".selector").%%WidgetName%%("option", "width", "800px");
			```
				string type="string" The widget width can be set in pixels (px) and percentage (%).
				number type="number" The widget width can be set as a number
			*/
            width: null,
            /* type="string|number" The height of the spreadsheet. It can be set as a number in pixels, string (px) or percentage (%).
			```
				//Initialize
				$(".selector").%%WidgetName%%({
					height : "800px"
				});

				// Get
				var height = $(".selector").%%WidgetName%%("option", "height");

				// Set
				$(".selector").%%WidgetName%%("option", "height", "800px");
			```
				string type="string" The widget height can be set in pixels (px) and percentage (%).
				number type="number" The widget height can be set as a number
			*/
            height: null,
            /* type="string" Returns or sets the A1 format address of the current active cell within the selected worksheet. 
			```
				//Initialize
				$(".selector").%%WidgetName%%({
					activeCell : "B4"
				});

				// Get
				var activeCell = $(".selector").%%WidgetName%%("option", "activeCell");

				// Set
				$(".selector").%%WidgetName%%("option", "activeCell", "B4");
			```
			*/
            activeCell: null,
            	/* type="bool" Returns or sets a boolean indicating whether the scroll lock key is toggled.
	This property is used when certain keys are pressed while the control has focus. For example 
	if an arrow key is pressed while the scroll lock is enabled the cell area will be scrolled rather than changing 
	the active cell. Note: This property is not maintained/changed by the control. It is just queried when 
	performing actions that consider whether the scroll lock is enabled.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			isScrollLocked: true
		});
	
		//Get
		var isScrollLocked = $(".selector").%%WidgetName%%("option", "isScrollLocked");
	
		//Set
		$(".selector").%%WidgetName%%("option", "isScrollLocked", true);
	```
	*/
	isScrollLocked: null,
	/* type="ig.excel.Worksheet" Returns or sets the Worksheet from the workbook whose content should be displayed within the control.
	```
		//Initialize
		var wb = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
		var sheet1 = wb.worksheets().add("sheet1");
		var sheet2 = wb.worksheets().add("sheet2");
		var sheet3 = wb.worksheets().add("sheet3");
		$(".selector").%%WidgetName%%({
			workbook: wb,
			activeWorksheet: sheet2
		});
	
		//Get
		var activeWorksheet = $(".selector").%%WidgetName%%("option", "activeWorksheet");
	
		//Set
		$(".selector").%%WidgetName%%("option", "activeWorksheet", sheet2);
	```
	*/
	activeWorksheet: null,
	/* type="bool" Returns or sets a boolean indicating whether the spreadsheet allows adding worksheets.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			allowAddWorksheet: false
		});
	
		//Get
		var allowAddWorksheet = $(".selector").%%WidgetName%%("option", "allowAddWorksheet");
	
		//Set
		$(".selector").%%WidgetName%%("option", "allowAddWorksheet", false);
	```
	*/
	allowAddWorksheet: true,
	/* type="bool" Returns or sets a boolean indicating whether the spreadsheet allows deleting worksheets.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			allowDeleteWorksheet: false
		});
	
		//Get
		var allowDeleteWorksheet = $(".selector").%%WidgetName%%("option", "allowDeleteWorksheet");
	
		//Set
		$(".selector").%%WidgetName%%("option", "allowDeleteWorksheet", false);
	```
	*/
	allowDeleteWorksheet: true,
	/* type="bool" Returns or sets a boolean indicating if the grid lines are displayed in the selected worksheets.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			areGridlinesVisible: false
		});
	
		//Get
		var areGridlinesVisible = $(".selector").%%WidgetName%%("option", "areGridlinesVisible");
	
		//Set
		$(".selector").%%WidgetName%%("option", "areGridlinesVisible", false);
	```
	*/
	areGridlinesVisible: true,
	/* type="bool" Returns or sets a boolean indicating if the row and column headers are displayed for the selected worksheets.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			areHeadersVisible: false
		});
	
		//Get
		var areHeadersVisible = $(".selector").%%WidgetName%%("option", "areHeadersVisible");
	
		//Set
		$(".selector").%%WidgetName%%("option", "areHeadersVisible", false);
	```
	*/
	areHeadersVisible: true,
	/* type="down|right|up|left" Returns or sets an enumeration indicating the direction of the cell adjacent to the activeCell that should be activated when the enter key is pressed.
	This property is only used if the isEnterKeyNavigationEnabled is set to true. Also, the reverse direction is 
	navigated when Shift + Enter are pressed.
	down type="string" The cell below should be activated.
	right type="string" The cell to the right should be activated
	up type="string" The cell above should be activated.
	left type="string" The cell to the left should be activated
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			enterKeyNavigationDirection: "right"
		});
	
		//Get
		var enterKeyNavigationDirection = $(".selector").%%WidgetName%%("option", "enterKeyNavigationDirection");
	
		//Set
		$(".selector").%%WidgetName%%("option", "enterKeyNavigationDirection", "right");
	```
	*/
	enterKeyNavigationDirection: "down",
	/* type="bool" Returns or sets a boolean indicating whether the adjacent cell indicated by the enterKeyNavigationDirection should be navigated to when the enter key is pressed.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			isEnterKeyNavigationEnabled: false
		});
	
		//Get
		var isEnterKeyNavigationEnabled = $(".selector").%%WidgetName%%("option", "isEnterKeyNavigationEnabled");
	
		//Set
		$(".selector").%%WidgetName%%("option", "isEnterKeyNavigationEnabled", false);
	```
	*/
	isEnterKeyNavigationEnabled: true,
	/* type="bool" Returns or sets a boolean indicating if the formula bar is displayed within the Spreadsheet.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			isFormulaBarVisible: false
		});
	
		//Get
		var isFormulaBarVisible = $(".selector").%%WidgetName%%("option", "isFormulaBarVisible");
	
		//Set
		$(".selector").%%WidgetName%%("option", "isFormulaBarVisible", false);
	```
	*/
	isFormulaBarVisible: true,
	/* type="bool" Returns or sets a boolean indicating whether the control is in "End mode".
	End mode is a mode that affects certain keyboard navigation such as navigating with the arrow keys. For example when in 
	end mode and one presses the right arrow, the activeCell will be changed to be the first cell to the right of the current ActiveCell 
	that has a value (even if the value is ""). If there were no cells to the right with a value then it would activate the right most cell in that row. End 
	mode will end automatically such as when one presses an arrow key.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			isInEndMode: true
		});
	
		//Get
		var isInEndMode = $(".selector").%%WidgetName%%("option", "isInEndMode");
	
		//Set
		$(".selector").%%WidgetName%%("option", "isInEndMode", true);
	```
	*/
	isInEndMode: false,
	/* type="bool" Returns or sets a boolean indicating whether undo is enabled for the control.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			isUndoEnabled: false
		});
	
		//Get
		var isUndoEnabled = $(".selector").%%WidgetName%%("option", "isUndoEnabled");
	
		//Set
		$(".selector").%%WidgetName%%("option", "isUndoEnabled", false);
	```
	*/
	isUndoEnabled: true,
	/* type="number" Returns or sets the width of the name box within the formula bar.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			nameBoxWidth: 150
		});
	
		//Get
		var nameBoxWidth = $(".selector").%%WidgetName%%("option", "nameBoxWidth");
	
		//Set
		$(".selector").%%WidgetName%%("option", "nameBoxWidth", 150);
	```
	*/
	nameBoxWidth: 102,
	/* type="normal|extendSelection|addToSelection" Returns or sets a value indicating how the selection is updated when interacting with the cells via the mouse or keyboard.
	normal type="string" The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the Ctrl key and using the mouse and one may alter the selection range containing the active cell by holding the Shift key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.
	extendSelection type="string" The selection range in the cellRanges representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
	addToSelection type="string" New cell ranges are added to the cellRanges without needing to hold down the ctrl key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing Shift+F8.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			selectionMode: "extendSelection"
		});
	
		//Get
		var selectionMode = $(".selector").%%WidgetName%%("option", "selectionMode");
	
		//Set
		$(".selector").%%WidgetName%%("option", "selectionMode", "extendSelection");
	```
	*/
	selectionMode: "normal",
	/* type="ig.excel.Worksheet[]" Returns or sets an array of the Worksheets whose tabs are selected.
	```
		//Initialize
		var wb = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
		var sheet1 = wb.worksheets().add("sheet1");
		var sheet2 = wb.worksheets().add("sheet2");
		var sheet3 = wb.worksheets().add("sheet3");
		$(".selector").%%WidgetName%%({
			workbook: wb,
			activeWorksheet: sheet1,
			selectedWorksheets: [sheet1, sheet3]
		});
	
		//Get
		var selectedWorksheets = $(".selector").%%WidgetName%%("option", "selectedWorksheets");
	
		//Set
		$(".selector").%%WidgetName%%("option", "selectedWorksheets", [sheet1, sheet3]);
	```
	*/
	selectedWorksheets: null,
	/* type="object" Returns or sets the position of the screen tip used to display the input message for the data validation rule associated with the active cell.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			validationInputMessagePosition: { x: 50, y: 50 }
		});
	
		//Get
		var validationInputMessagePosition = $(".selector").%%WidgetName%%("option", "validationInputMessagePosition");
	
		//Set
		$(".selector").%%WidgetName%%("option", "validationInputMessagePosition", { x: 50, y: 50 });
	```
	The provided object should have numeric properties called x and y.
	*/
	validationInputMessagePosition: null,
	/* type="ig.excel.Workbook" Returns or sets the workbook whose information is displayed in the control.
	```
		//Initialize
		var wb = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
		wb.worksheets().add("sheet1");
		$(".selector").%%WidgetName%%({
			workbook: wb
		});
	
		//Get
		var workbook = $(".selector").%%WidgetName%%("option", "workbook");
	
		//Set
		$(".selector").%%WidgetName%%("option", "workbook", wb);
	```
	*/
	workbook: null,
	/* type="number" Returns or sets the magnification of the selected worksheets.
	```
		//Initialize
		$(".selector").%%WidgetName%%({
			zoomLevel: 150
		});
	
		//Get
		var zoomLevel = $(".selector").%%WidgetName%%("option", "zoomLevel");
	
		//Set
		$(".selector").%%WidgetName%%("option", "zoomLevel", 150);
	```
	*/
	zoomLevel: 100

        },

        _setOption: function (key, value, checkPrev) {
            var spreadsheet = this._spreadsheet, o = this.options;
            if (checkPrev && o[key] === value) {
                return;
            }
            $.Widget.prototype._setOption.apply(this, arguments);

            if (this._set_option(spreadsheet, key, value)) {
                return this;
            }

            return this;
        },

        _set_generated_option: function (spreadsheet, key, value) {
            	switch (key) {
		case "isScrollLocked":
			spreadsheet.isScrollLocked(value);
			return true;
		case "activeWorksheet":
			spreadsheet.activeWorksheet(value);
			return true;
		case "allowAddWorksheet":
			spreadsheet.allowAddWorksheet(value);
			return true;
		case "allowDeleteWorksheet":
			spreadsheet.allowDeleteWorksheet(value);
			return true;
		case "areGridlinesVisible":
			spreadsheet.areGridlinesVisible(value);
			return true;
		case "areHeadersVisible":
			spreadsheet.areHeadersVisible(value);
			return true;
		case "enterKeyNavigationDirection":
			switch(value) {
				case "down":
					spreadsheet.enterKeyNavigationDirection(0);
					break;
				case "right":
					spreadsheet.enterKeyNavigationDirection(1);
					break;
				case "up":
					spreadsheet.enterKeyNavigationDirection(2);
					break;
				case "left":
					spreadsheet.enterKeyNavigationDirection(3);
					break;
			}
			return true;
		case "isEnterKeyNavigationEnabled":
			spreadsheet.isEnterKeyNavigationEnabled(value);
			return true;
		case "isFormulaBarVisible":
			spreadsheet.isFormulaBarVisible(value);
			return true;
		case "isInEndMode":
			spreadsheet.isInEndMode(value);
			return true;
		case "isUndoEnabled":
			spreadsheet.isUndoEnabled(value);
			return true;
		case "nameBoxWidth":
			spreadsheet.nameBoxWidth(value);
			return true;
		case "selectionMode":
			switch(value) {
				case "normal":
					spreadsheet.selectionMode(0);
					break;
				case "extendSelection":
					spreadsheet.selectionMode(1);
					break;
				case "addToSelection":
					spreadsheet.selectionMode(2);
					break;
			}
			return true;
		case "selectedWorksheets":
			spreadsheet.selectedWorksheets(value);
			return true;
		case "workbook":
			spreadsheet.workbook(value);
			return true;
		case "zoomLevel":
			spreadsheet.zoomLevel(value);
			return true;
	}

        },

        _set_option: function (spreadsheet, key, value) {
            var self = this;
            var currentKey;

            switch (key) {
                case "width":
                    this._setSize(spreadsheet, "width", value);
                    return true;
                case "height":
                    this._setSize(spreadsheet, "height", value);
                    return true;
                case "validationInputMessagePosition":
                    if (value === null)
                        spreadsheet.validationInputMessagePosition(null);
                    else
                        spreadsheet.validationInputMessagePosition($.ig.APIFactory.prototype.createPoint(value.x, value.y));
                    return true;
                case "activeCell":
                    spreadsheet.activeCellAddress(value);
                    return true;
                default:
                    // if we have an auto-generated handler then let it handle it
                    if (this._set_generated_option(spreadsheet, key, value))
                        return true;

                    return false;
            }
        },

        _creationOptions: null,
        _spreadsheet: null,
        _menuPropertyChangeHandlers: null,

        _createWidget: function (options, element, widget) {
            this._creationOptions = options;

            $.Widget.prototype._createWidget.apply(this, [options, element]);
        },

        _create: function () {
            var key, v, size, spreadsheet, width, height,
            i = -1,
            self = this,
            elem = self.element,
            style = elem[0].style,
            o = this._creationOptions;

            // variable which holds initial attributes/styles of target widget, which are used to
            // restore target element on destroy
            self._old_state = {
                // extended widget may add other attributes to that member and they will be processed within destroy
                style: { position: style.position, width: style.width, height: style.height, visibility: style.visibility },
                css: elem[0].className,
                elems: elem.find("*")
            };
            if (!$.ig.util._isCanvasSupported()) {
                $.ig.util._renderUnsupportedBrowser(this);
                return;
            }
            spreadsheet = this._createSpreadsheet();
            self._spreadsheet = spreadsheet;


            self._spreadsheetPropertyChangeHandlers = {};
            self._spreadsheetPropertyChangeHandlers["ActiveCell"] = function (spreadsheet) { this.options.activeCell = spreadsheet.activeCellAddress(); };
            self._spreadsheetPropertyChangeHandlers["ActiveWorksheet"] = function (spreadsheet) { this.options.activeWorksheet = spreadsheet.activeWorksheet(); };
            self._spreadsheetPropertyChangeHandlers["AreGridlinesVisible"] = function (spreadsheet) { this.options.areGridlinesVisible = spreadsheet.areGridlinesVisible(); };
            self._spreadsheetPropertyChangeHandlers["AreHeadersVisible"] = function (spreadsheet) { this.options.areHeadersVisible = spreadsheet.areHeadersVisible(); };
            self._spreadsheetPropertyChangeHandlers["IsFormulaBarVisible"] = function (spreadsheet) { this.options.isFormulaBarVisible = spreadsheet.isFormulaBarVisible(); };
            self._spreadsheetPropertyChangeHandlers["IsInEndMode"] = function (spreadsheet) { this.options.isInEndMode = spreadsheet.isInEndMode(); };
            self._spreadsheetPropertyChangeHandlers["NameBoxWidth"] = function (spreadsheet) { this.options.nameBoxWidth = spreadsheet.nameBoxWidth(); };
            self._spreadsheetPropertyChangeHandlers["SelectedWorksheets"] = function (spreadsheet) { this.options.selectedWorksheets = spreadsheet.selectedWorksheets(); };
            self._spreadsheetPropertyChangeHandlers["SelectionMode"] = function (spreadsheet) { this.options.selectionMode = spreadsheet.selectionMode(); };
            self._spreadsheetPropertyChangeHandlers["ValidationInputMessagePosition"] = function (spreadsheet) {
                var point = spreadsheet.validationInputMessagePosition();
                var newValue = null;

                if (point !== null)
                {
                    newValue = {
                        x: point.__x,
                        y: point.__y
                    };
                }
                this.options.validationInputMessagePosition = newValue;
            };
            self._spreadsheetPropertyChangeHandlers["Workbook"] = function (spreadsheet) { this.options.workbook = spreadsheet.workbook(); };
            self._spreadsheetPropertyChangeHandlers["ZoomLevel"] = function (spreadsheet) { this.options.zoomLevel = spreadsheet.zoomLevel(); };

            // we hook the property changed so we can update the aboev options values
            spreadsheet.propertyChanged = $.ig.Delegate.prototype.combine(spreadsheet.propertyChanged, jQuery.proxy(this._onSpreadsheetPropChanged, this));

			spreadsheet.actionExecuted = $.ig.Delegate.prototype.combine(spreadsheet.actionExecuted, $.proxy(this._fireSpreadsheet_actionExecuted, this));
			spreadsheet.actionExecuting = $.ig.Delegate.prototype.combine(spreadsheet.actionExecuting, $.proxy(this._fireSpreadsheet_actionExecuting, this));
			spreadsheet.activeCellChanged = $.ig.Delegate.prototype.combine(spreadsheet.activeCellChanged, $.proxy(this._fireSpreadsheet_activeCellChanged, this));
			spreadsheet.activePaneChanged = $.ig.Delegate.prototype.combine(spreadsheet.activePaneChanged, $.proxy(this._fireSpreadsheet_activePaneChanged, this));
			spreadsheet.activeWorksheetChanged = $.ig.Delegate.prototype.combine(spreadsheet.activeWorksheetChanged, $.proxy(this._fireSpreadsheet_activeWorksheetChanged, this));
			spreadsheet.editRangePasswordNeeded = $.ig.Delegate.prototype.combine(spreadsheet.editRangePasswordNeeded, $.proxy(this._fireSpreadsheet_editRangePasswordNeeded, this));
			spreadsheet.hyperlinkExecuting = $.ig.Delegate.prototype.combine(spreadsheet.hyperlinkExecuting, $.proxy(this._fireSpreadsheet_hyperlinkExecuting, this));
			spreadsheet.selectionChanged = $.ig.Delegate.prototype.combine(spreadsheet.selectionChanged, $.proxy(this._fireSpreadsheet_selectionChanged, this));
			spreadsheet.userPromptDisplaying = $.ig.Delegate.prototype.combine(spreadsheet.userPromptDisplaying, $.proxy(this._fireSpreadsheet_userPromptDisplaying, this));
			spreadsheet.workbookDirtied = $.ig.Delegate.prototype.combine(spreadsheet.workbookDirtied, $.proxy(this._fireSpreadsheet_workbookDirtied, this));


            if (o.hasOwnProperty("width"))
                elem[0].style.width = o["width"];
            if (o.hasOwnProperty("height"))
                elem[0].style.height = o["height"];

            var elemWrapper = new $.ig.JQueryDomWrapper(elem[0], elem);
            var renderer = new $.ig.JQueryDomRenderer(elemWrapper);

            spreadsheet.css = this.css;
            spreadsheet.provideContainer(renderer);
            for (key in o) {
                if (o.hasOwnProperty(key)) {
                    v = o[key];
                    if (v !== null) {
                        this._setOption(key, v, false);
                    }
                }
            }

            while (i++ < 1) {
                key = i === 0 ? "width" : "height";
                if (o[key]) {
                    size = key;
                    v = o[key];
                } else {
                    v = elem[0].style[key];
                }
                if (v && v.indexOf("%") > 0) {
                    self._setSize(spreadsheet, size = key, v);
                }
            }
            //_setSize should be called at least once: support for initially invisible container of char
            if (!size) {
                self._setSize(spreadsheet, "width");
            }

            if (self.css && self.css.spreadsheet) {
                elem.addClass(self.css.spreadsheet);
            }

            spreadsheet.onInitialized();
        },
        _createSpreadsheet: function () {
            return new $.ig.Spreadsheet();
        },

        _onSpreadsheetPropChanged: function(spreadsheet, evt) {
            var handler = this._spreadsheetPropertyChangeHandlers[evt._propertyName];

            if (handler)
                handler.call(this, spreadsheet);
        },
        _fireSpreadsheet_actionExecuted : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.action = $.ig.spreadsheet.SpreadsheetAction.prototype.$getName(evt.command());

            this._trigger("actionExecuted", null, opts);
        },
        _fireSpreadsheet_actionExecuting : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.action = $.ig.spreadsheet.SpreadsheetAction.prototype.$getName(evt.command());

            if (!this._trigger("actionExecuting", null, opts))
            {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_activeCellChanged: function (spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.oldValue = evt.oldValue().toString();
            opts.newValue = evt.newValue().toString();

            this._trigger("activeCellChanged", null, opts);
        },
        _fireSpreadsheet_activePaneChanged: function (spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.oldActivePane = evt.oldValue();
            opts.newActivePane = evt.newValue();
            opts.activeCell = opts.newActivePane != null ? opts.newActivePane.selection().activeCell().toString() : null;
            opts.visibleRange = opts.newActivePane != null ? opts.newActivePane.visibleRange().toString() : null;

            this._trigger("activePaneChanged", null, opts);
        },
        _fireSpreadsheet_activeWorksheetChanged: function (spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.oldActiveWorksheet = evt.oldValue();
            opts.oldActiveWorksheetName = opts.oldActiveWorksheet != null ? opts.oldActiveWorksheet.name() : null;
            opts.newActiveWorksheet = evt.newValue();
            opts.newActiveWorksheetName = opts.newActiveWorksheet != null ? opts.newActiveWorksheet.name() : null;

            this._trigger("activeWorksheetChanged", null, opts);
        },
        _fireSpreadsheet_editModeExiting: function (spreadsheet, evt) {
            var noCancel, opts = {};
            opts.owner = this;
            opts.acceptChanges = evt.acceptChanges();
            opts.canCancel = evt.canCancel();
            opts.cell = evt.cell().toString();

            noCancel = this._trigger("editModeExiting", null, opts);
            evt.acceptChanges(opts.acceptChanges);

            if (!noCancel) {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_editModeExited: function (spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.cell = evt.cell().toString();

            this._trigger("editModeExited", null, opts);
        },
        _fireSpreadsheet_editModeEntering : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.cell = evt.cell().toString();

            if (!this._trigger("editModeEntering", null, opts)) {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_editModeEntered : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.cell = evt.cell().toString();

            this._trigger("editModeEntered", null, opts);
        },
        _fireSpreadsheet_editModeValidationError : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.action = $.ig.spreadsheet.SpreadsheetEditModeValidationErrorAction.prototype.$getName(evt.action());
            opts.canStayInEditMode = evt.canStayInEditMode();
            opts.cell = evt.cell().toString();
            opts.validationRule = evt.validationRule();

            this._trigger("editModeValidationError", null, opts);

            var newAction = opts.action;

            if (typeof newAction === "string")
                newAction = $.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetEditModeValidationErrorAction.prototype.$type, newAction, true));

            evt.action(newAction);
        },
        _fireSpreadsheet_editRangePasswordNeeded : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.ranges = evt._getRangesArray();
            opts.unprotect = evt.unprotect();

            if (!this._trigger("editRangePasswordNeeded", null, opts)) {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_hyperlinkExecuting : function(spreadsheet, evt) {
            var noCancel, opts = {};
            opts.owner = this;
            opts.hyperlink = evt.hyperlink();
            //opts.workingDirectory = evt.workingDirectory();

            noCancel = this._trigger("hyperlinkExecuting", null, opts);
            //evt.workingDirectory(opts.workingDirectory);
            if (!noCancel) {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_selectionChanged : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;
            opts.pane = evt.pane();

            this._trigger("selectionChanged", null, opts);
        },
        _fireSpreadsheet_userPromptDisplaying : function(spreadsheet, evt) {
            var noCancel, opts = {};
            opts.owner = this;
            opts.canCancel = evt.canCancel();
            //opts.caption = evt.caption();
            opts.displayMessage = evt.displayMessage();
            opts.exception = evt.exception();
            opts.message = evt.message();
            opts.trigger = $.ig.spreadsheet.SpreadsheetUserPromptTrigger.prototype.$getName(evt.trigger());

            noCancel = this._trigger("userPromptDisplaying", null, opts);
            //evt.caption(opts.caption);
            evt.displayMessage(opts.displayMessage);
            evt.message(opts.message);
            if (!noCancel) {
                evt.cancel(true);
            }
        },
        _fireSpreadsheet_workbookDirtied : function(spreadsheet, evt) {
            var opts = {};
            opts.owner = this;

            this._trigger("workbookDirtied", null, opts);
        },

        // sets width and height options.
        // params:
        // chart-reference to chart object
        // key-name of option/property (width or height only)
        // value-value of option
        _setSize: function (spreadsheet, key, val) {
            $.ig.util.setSize(this.element, key, val, spreadsheet, this._getNotifyResizeName());
        },

        _getNotifyResizeName: function () {
            return "containerResized";
        },

        getActivePane: function () {
            /* Returns an object that represents the pane with the focus.
			```
				var activePane = $(".selector").%%WidgetName%%("getActivePane");
			```
			    returnType="ig.spreadsheet.SpreadsheetPane"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.activePane();

            return null;
        },
        getActiveSelection: function () {
            /* Returns an object that represents the current selection of the active pane.
			```
				var activeSelection = $(".selector").%%WidgetName%%("getActiveSelection");
			```
			    returnType="ig.spreadsheet.SpreadsheetSelection"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.activeSelection();

            return null;
        },
        getActiveSelectionCellRangeFormat: function () {
            /* Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire active selection.
		        Any changes made to this object will affect all the objects in the selection. So for example, the 
		        Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other 
		        cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects 
		        affected by the selection will have their Font.Name updated to that value.
			```
				var activeSelectionCellRangeFormat = $(".selector").%%WidgetName%%("getActiveSelectionCellRangeFormat");
			```
			    returnType="ig.spreadsheet.SpreadsheetCellRangeFormat"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.activeSelectionCellRangeFormat();

            return null;
        },
        _getCellEditMode: function () {
            /* Returns an enumeration used to indicate the current edit mode state.
			```
				var cellEditMode = $(".selector").%%WidgetName%%("getCellEditMode");
			```
			    returnType="ig.spreadsheet.SpreadsheetCellEditMode"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.cellEditMode();

            return null;
        },
        _getIsInEditMode: function () {
            /* Returns a boolean indicating if the control is currently editing the value of the activeCell.
			```
				var isInEditMode = $(".selector").%%WidgetName%%("getIsInEditMode");
			```
			    returnType="bool"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.isInEditMode();

            return null;
        },
        getIsRenamingWorksheet: function () {
            /* Returns a boolean indicating if the user is currently editing the name of the active worksheet.
			```
				var isRenamingWorksheet = $(".selector").%%WidgetName%%("getIsRenamingWorksheet");
			```
			    returnType="bool"
			*/
            if (this._spreadsheet)
                return this._spreadsheet.isRenamingWorksheet();

            return null;
        },
        getPanes: function () {
            /* Returns an array of the panes for the activeWorksheet.
			```
				var panes = $(".selector").%%WidgetName%%("getPanes");
			```
			    returnType="ig.spreadsheet.SpreadsheetPane[]"
			*/
            if (this._spreadsheet)
                return this._spreadsheet._getPanesAsArray();

            return null;
        },
        /*
        hitTest: function (x, y) {
            /* Returns the topmost object of a hit test for the specified coordinate.
			```
				var hitTestResult = $(".selector").%%WidgetName%%("hitTest", 100, 100);
			```
                paramType="number" The x coordinate of the point.
                paramType="number" The y coordinate of the point.
			    returnType="ig.spreadsheet.SpreadsheetHitTestResult"
            *//*
            if (this._spreadsheet) {
                var point = $.ig.APIFactory.prototype.createPoint(x, y);
                return this._spreadsheet.hitTest(point);
            }

            return null;
        },
        */
        executeAction: function(action) {
            /* Executes the action associated with the specified id.
			```
				var executed = $(".selector").%%WidgetName%%("executeAction", "clearContents");
			```
                paramType="ig.spreadsheet.SpreadsheetAction" An [enumeration](ig.spreadsheet.SpreadsheetAction) or string that identifies the action to execute.
			    returnType="bool" A boolean indicating if the action was performed.
            */
            if (this._spreadsheet) {
                var cmd = action;

                if (typeof cmd === "string")
                    cmd = $.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetAction.prototype.$type, cmd, true));

                return this._spreadsheet.executeCommand(cmd);
            }

            return false;
        },

        flush: function () {
            /* Forces any pending deferred work to render on the spreadsheet before continuing 
			```
				var executed = $(".selector").%%WidgetName%%("flush");
			```
            */
            if (this._spreadsheet && this._spreadsheet.flush)
                this._spreadsheet.flush();
        },

        destroy: function () {
            /* Destroys the widget. 
			```
				var executed = $(".selector").%%WidgetName%%("destroy");
			```
            */
            var key, style,
				spreadsheet = this._spreadsheet,
				old = this._old_state,
				elem = this.element;
            if (!old) {
                return;
            }
            // remove children created by spreadsheet
            elem.find("*").not(old.elems).remove();
            // restore className modified by spreadsheet
            if (this.css.spreadsheet) {
                elem.removeClass(this.css.spreadsheet);
            }
            // restore css style attributes modified by spreadsheet
            old = old.style;
            style = elem[0].style;
            for (key in old) {
                if (old.hasOwnProperty(key)) {
                    if (style[key] !== old[key]) {
                        style[key] = old[key];
                    }
                }
            }
            if (spreadsheet) {
                this._setSize(spreadsheet);
            }
            $.Widget.prototype.destroy.apply(this, arguments);
            if (spreadsheet && spreadsheet.destroy) {
                spreadsheet.destroy();
            }
            delete this._spreadsheet;
            delete this._old_state;
        },

        styleUpdated: function () {
            /* Notify the spreadsheet that style information used for rendering the spreadsheet may have been updated. 
			```
				var executed = $(".selector").%%WidgetName%%("styleUpdated");
			```
            */
            if (this._spreadsheet) {
                this._spreadsheet.styleUpdated();
            }
        }
    });
    $.extend($.ui.igSpreadsheet, { version: '17.1.20171.1012' });
}(jQuery));
