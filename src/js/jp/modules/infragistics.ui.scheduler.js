/*!@license
* Infragistics.Web.ClientUI Scheduler 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.9.1.js
* jquery.ui.core.js
* jquery.ui.widget.js
* infragistics.templating.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ui.scroll.js
* infragistics.ext_core.js
* infragistics.ext_text.js
* infragistics.ext_collections.js
* infragistics.ext_io.js
* infragistics.ext_ui.js
* infragistics.ext_collectionsExtended.js
* infragistics.ext_threading.js
* infragistics.ext_web.js
* infragistics.xml.js
* infragistics.dv_core.js
* infragistics.dv_jquerydom.js
* infragistics.datasource.js
* infragistics.scheduler.core.js
* infragistics.ui.scheduler.core.js
* infragistics.ui.shared.js
* infragistics.ui.popover.js
* infragistics.ui.validator.js
* infragistics.ui.notifier.js
* infragistics.ui.editors.js
* infragistics.ui.combo.js
*
* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$("#scheduler").igScheduler({
*			height: "100%",
*			width: "100%",
*			views: ["month", "agenda"],
*			viewMode: "monthView",
*			selectedDate: new Date(2017, 3, 15),
*			dataSource: new $.ig.DataSource(data);
*		});
*	</script>
*	<input id="scheduler" />
*/

(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define([ 
			"jquery",
			"jquery-ui",
			"./infragistics.util",
			"./infragistics.util.jquery",
			"./infragistics.datasource",
			"./infragistics.ui.scroll",
			"./infragistics.scheduler.core",
			"./infragistics.ui.scheduler.core"
         ], factory);
    } else {

        // Browser globals
        factory(jQuery);
    }
}
(function ($) {
	/*!@license
* Infragistics.Web.ClientUI Scheduler localization resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/


    $.ig = $.ig || {};

    if (!$.ig.SchedulerLocale) {
    	$.ig.SchedulerLocale = {
    		locale: {
				tag: "en-US", // DO NOT TRANSLATE
		        agenda: "Agenda",
                month: "Month",
                next: "Next",
                previous: "Previous",
                dateRange: "Date Range",
                todayButton: "Today",
                nonDivError: "igScheduler can be instantiated only on HTML DIV element.",
                createNewAppointmentDialogTitle: "Create New Appointment",
                editAppointmentDialogTitle: "Edit Appointment",
                appointmentDialogSubjectLabel: "Subject",
                appointmentDialogLocationLabel: "Location",
		        appointmentDialogFromLabel: "From",
		        appointmentDialogToLabel: "To",
				appointmentDialogDescriptionLabel: "Description",
		        appointmentDialogCreateButtonLabel: "Create",
		        appointmentDialogSaveButtonLabel: "Save",
		        appointmentDialogCancelButtonLabel: "Cancel",
		        appointmentDialogCreateAppointmentButtonLabel: "Create appointment",
		        dayPopoverTitle: "Create new appointment",
		        appointmentPopoverTitle: "Edit appointment",
		        appointmentPopoverOpenButtonLabel: "Open appointment",
		        appointmentPopoverDeleteButtonLabel: "Delete",
		        deleteAppointmentDialogTitle: "Delete Appointment",
		        deleteAppointmentDialogConfirmation: "Do you want to delete this appointment?",
		        deleteAppointmentDialogDeleteButtonLabel: "Delete",
		        deleteAppointmentDialogCancelButtonLabel: "Cancel",
		        appointmentDialogResourceLabel: "Resource",
		        invalidIntervalErrorMessage: "The end date you entered occurs before the start date.",
		        dialogCloseButtonText: "Close"
		    }
	    };
    }

    /*
		igScheduler is a schedule control.
	*/
    $.widget("ui.igScheduler", {
        options: {
            /* type="array" Lists of all the views, rendered in the Scheduler.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    views: ["monthView", "agendaView"]
                });

                //Get
                var views = $(".selector").%%WidgetName%%("option", "views");
                ```
            */
            views: [ "monthView", "agendaView" ],
            /* type="monthView|agendaView" Gets/Sets current view mode in the Scheduler. If this options is not defined, then the first defined view in the views property is taken.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    viewMode: "agendaView"
                });

                //Get
                var mode = $(".selector").%%WidgetName%%("option", "viewMode");

                //Set
                $(".selector").%%WidgetName%%("option", "width", "agendaView");
                ```
            monthView type="string" Enables MonthView in the Scheduler.
            agendaView type="string" Enables AgendaView in the Scheduler.
            */
            viewMode: null,
            /* type="date" Gets/Sets selected date in the Scheduler.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    selectedDate: new Date(2017, 3, 5)
                });

                //Get
                var date = $(".selector").%%WidgetName%%("option", "selectedDate");

                //Set
                $(".selector").%%WidgetName%%("option", "selectedDate", new Date(2017, 3, 5));
                ```
            */
            selectedDate: new Date(),
            /* type="bool" Enables/Disables today button.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    enableTodayButton: false
                });

                //Get
                var isEnabled = $(".selector").%%WidgetName%%("option", "enableTodayButton");
                ```
            */
            enableTodayButton: true,
            /* type="string|number|null" Gets/Sets the width of the control.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    width : 700
                });

                //Get
                var width = $(".selector").%%WidgetName%%("option", "width");
                ```
                string The widget width can be set in pixels (px) and percentage (%).
                number The widget width can be set as a number in pixels.
                null type="object" will stretch to fit data, if no other widths are defined.
            */
            width: "100%",
            /* type="string|number|null" Gets/Sets the height of the control.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    height : 250
                });

                //Get
                var height = $(".selector").%%WidgetName%%("option", "height");
                ```
                string The height can be set in pixels (px) and percentage (%).
                number The height can be set as a number in pixels.
                null type="object" will fit the editor inside its parent container, if no other heights are defined.
            */
            height: "100%",
            /* type="object" Gets/Sets AgendaView settings.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    agendaViewSettings: {
                        dateRangeInterval: 3
                    }
                });

                //Get
                var setting = $(".selector").%%WidgetName%%("option", "agendaViewSettings");

                //Set
                var setting = $(".selector").%%WidgetName%%("option", "agendaViewSettings");
                setting.dateRangeInterval = 1;
                $(".selector").%%WidgetName%%("option", "agendaViewSettings", settings);
                ```
            */
            agendaViewSettings: {
                /* type="number" Gets/Sets the number of days shown in AgendaView mode.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        agendaViewSettings: {
                            dateRangeInterval: 3
                        }
                    });

                    //Get
                    var setting = $(".selector").%%WidgetName%%("option", "agendaViewSettings");

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "agendaViewSettings");
                    setting.dateRangeInterval = 1;
                    $(".selector").%%WidgetName%%("option", "agendaViewSettings", settings);
                    ```
                */
                dateRangeInterval: 7
            },
            /* type="object" Gets/Sets MonthView settings.
                ```
                //Initialize
                $(".selector").%%WidgetName%%({
                    monthViewSettings: {
                        isAgendaVisible: true,
                        agendaVisibilityType: "onlyAppointmentsForSelectedMonthViewDay",
                        viewSplitOrientation: "vertical",
                        isHorizontalSeparatorVisibile: true,
                        isVerticalSeparatorVisibile: true,
                        isWeekdayVisible: true,
                        isWeekNumberVisible: true,
                        isPreviousMonthShown: true,
                        isNextMonthShown: true
                    }
                });

                //Get
                var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");

                //Set
                var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                settings.isHorizontalSeparatorVisibile = false;
                settings.isVerticalSeparatorVisibile = false;
                settings.isWeekdayVisible = false;
                settings.isWeekNumberVisible = false;
                settings.isPreviousMonthShown = false;
                settings.isNextMonthShown = false;
                $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                ```
            */
            monthViewSettings: {
                /* type="string" Gets/Sets the type of content displayed in a MonthView day.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            appointmentMode: "indicator"
                        }
                    });

                    //Get
                    var mode = $(".selector").%%WidgetName%%("option", "monthViewSettings").appointmentMode;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.viewSplitOrientation = "indicator";
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                auto type="string" Depending on the screen size, indicates square indicator mode for the appointment in the Month View, if scheduler size is larger than 768px, otherwise identifies horizontal one.
                indicator type="string" Indicates that a square indicator should be displayed.
                detailed type="string" Indicates that the subject should be displayed.
                */
                appointmentMode: "auto",
                /* type="bool" Gets/Sets the visibility of an AgendaView in a MonthView.  When true, the MonthView will display an AgendaView showing the Appointments for the currently selected day at the top of its list of Appointments.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isAgendaVisible: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isAgendaVisible;
                    ```
                */
                isAgendaVisible: false,
                /* type="string" Gets/Sets the scope of appointments that are displayed in a MonthView's AgendaView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            agendaVisibilityType: "onlyAppointmentsForSelectedMonthViewDay"
                        }
                    });

                    //Get
                    var type = $(".selector").%%WidgetName%%("option", "monthViewSettings").agendaVisibilityType;
                    ```
                allAppointments type="string" Indicates that appointments for all days should be displayed in an AgendaView when it is a secondary view within a MonthView.
                onlyAppointmentsForSelectedMonthViewDay type="string" Indicates that only appointments for the day that is current selected in the associated MonthView should be displayed in an AgendaView that is associated with a MonthView as a secondary view.
                */
                agendaVisibilityType: "allAppointments",
                /* type="string" Gets/Sets the orientation, which determines whether the MonthView and AgendaView views are split vertically or horizontally. This option can be used when the AgendaView is displayed in the MonthView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            viewSplitOrientation: "horizontal"
                        }
                    });

                    //Get
                    var orientation = $(".selector").%%WidgetName%%("option", "monthViewSettings").viewSplitOrientation;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.viewSplitOrientation = "horizontal";
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                auto type="string" Depending on the screen size, identifies vertical split if scheduler size is larger than 768px, otherwise identifies horizontal one.
                vertical type="string" Identifies a vertical split between the Scheduler's views.
                horizontal type="string" Identifies a horizontal split between the Scheduler's views.
                */
                viewSplitOrientation: "auto",
                /* type="bool" Gets/sets the visibility of the horizontal separators between weeks in the MonthView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isHorizontalSeparatorVisibile: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isHorizontalSeparatorVisibile;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isHorizontalSeparatorVisibile = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isHorizontalSeparatorVisibile: true,
                /* type="bool" Gets/sets the visibility of the vertical separators between days of the week in a MonthView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isVerticalSeparatorVisibile: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isVerticalSeparatorVisibile;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isVerticalSeparatorVisibile = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isVerticalSeparatorVisibile: false,
                /* type="bool" Gets/sets the visibility of the weekday names in MonthView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isWeekdayVisible: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isWeekdayVisible;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isWeekdayVisible = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isWeekdayVisible: true,
                /* type="bool" Gets/sets the visibility of the week numbers in a MonthView.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isWeekNumberVisible: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isWeekNumberVisible;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isWeekNumberVisible = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isWeekNumberVisible: false,
                /* type="bool" Gets/sets the visibility of the days from the previous month that occur in the first week of a given month.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isPreviousMonthShown: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isPreviousMonthShown;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isPreviousMonthShown = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isPreviousMonthShown: true,
                /* type="bool" Gets/sets the visibility of the days from the next month that occur in the last week of a given month.
                    ```
                    //Initialize
                    $(".selector").%%WidgetName%%({
                        monthViewSettings: {
                            isNextMonthShown: true
                        }
                    });

                    //Get
                    var isVisible = $(".selector").%%WidgetName%%("option", "monthViewSettings").isNextMonthShown;

                    //Set
                    var setting = $(".selector").%%WidgetName%%("option", "monthViewSettings");
                    settings.isNextMonthShown = false;
                    $(".selector").%%WidgetName%%("option", "monthViewSettings", settings);
                    ```
                */
                isNextMonthShown: true
            },
            /* type="bool" Gets/Sets whether the appointment dialog and the related day and appointment popups should be shown.
                ```
                // Initialize
                $(".selector").%%WidgetName%%({
                    appointmentDialogSuppress : true
                });

                // Get
                var appointmentDialogSuppress = $(".selector").%%WidgetName%%("option", "appointmentDialogSuppress");

                // Set
                $(".selector").%%WidgetName%%("option", "appointmentDialogSuppress", true);
                ```
            */
            appointmentDialogSuppress: false
        },
        css: {
            /* Class applied to the main/top element. Default value is 'ui-igscheduler' */
            scheduler: "ui-igscheduler",
            /* Class applied to the top element when editor is rendered in container. Default value is 'ui-widget ui-corner-all ui-state-default' */
            container: "ui-widget ui-corner-all ui-state-default",
            /* Class applied to the header element, which contains date and view navigations. Default value is 'ui-igscheduler-header' */
            header: "ui-igscheduler-header",
            /* Class applied to the body element, which contains the schedule view(s). Default value is 'ui-igscheduler-body' */
            body: "ui-igscheduler-body",
            /* Class applied to the today button element. Default value is 'ui-igscheduler-today-button' */
            todayButton: "ui-igscheduler-today-button",
            /* Class applied to the today button icon. Default value is 'ui-icon ui-icon-calendar-day' */
            todayButtonIcon: "ui-icon ui-icon-calendar-day",
            /* Class applied to the date navigation container element. Default value is 'ui-igscheduler-navigator' */
            navigator: "ui-igscheduler-navigator",
            /* Class applied to the date display element, which serves as drop down button in AgendaView mode. Default value is 'ui-igscheduler-navigator-date-range-button' */
            dateRangeButton: "ui-igscheduler-navigator-date-range-button",
            /* Class applied to the date display element in MonthView. Default value is 'ui-igscheduler-navigator-disabled-date-range-button' */
            disabledDateRangeButton: "ui-igscheduler-navigator-disabled-date-range-button",
            /* Class applied to the date display span element. Default value is 'date-range-button-text' */
            dateRangeButtonSpan: "date-range-button-text",
            /* Class applied to the previous button element. Default value is 'ui-igscheduler-navigator-previous-button' */
            previousButton: "ui-igscheduler-navigator-previous-button",
            /* Class applied to the next button element. Default value is 'ui-igscheduler-navigator-next-button' */
            nextButton: "ui-igscheduler-navigator-next-button",
            /* Class applied to the tabs container. Default value is 'ui-igscheduler-tabs-container' */
            tabsContainer: "ui-igscheduler-tabs-container",
            /* Class applied to the individual view mode tabs. Default value is 'ui-igscheduler-tabs' */
            tabs: "ui-igscheduler-tabs",
            /* Class applied to the month view tab icon. Default value is 'ui-icon ui-icon-calendar' */
            monthTabIcon: "ui-icon ui-icon-calendar",
            /* Class applied to the agenda view tab icon. Default value is 'ui-icon ui-icon-note' */
            agendaTabIcon: "ui-icon ui-icon-note",
            /* Class applied to the selected view tab. Default value is 'ui-igscheduler-tabs-selected' */
            selectedTab: "ui-igscheduler-tabs-selected",
            /* Class applied to side by side group of input fields in the appointment dialog. Default value is 'ui-igscheduler-side-by-side-group'. */
            sideBySideGroup: "ui-igscheduler-side-by-side-group",
            /* Class applied to the day popover content. Default value is 'ui-igscheduler-day-popover-content'. */
            dayPopoverContent: "ui-igscheduler-day-popover-content",
            /* Class applied to the day popover create button. Default value is 'ui-igscheduler-day-popover-create-button'. */
            dayPopoverCreateButton: "ui-igscheduler-day-popover-create-button",
            /* Class applied to the appointment popover content. Default value is 'ui-igscheduler-appointment-popover-content'. */
            appointmentPopoverContent: "ui-igscheduler-appointment-popover-content",
            /* Class applied to the appointment popover subject. Default value is 'ui-igscheduler-appointment-popover-subject'. */
            appointmentPopoverSubject: "ui-igscheduler-appointment-popover-subject",
            /* Class applied to the appointment popover start and end time. Default value is 'ui-igscheduler-appointment-popover-from-to'. */
            appointmentPopoverFromTo: "ui-igscheduler-appointment-popover-from-to",
            /* Class applied to the appointment popover actions - open and delete. Default value is 'ui-igscheduler-appointment-actions'. */
            appointmentPopoverActions: "ui-igscheduler-appointment-actions",
            /* Class applied to the appointment popover delete button. Default value is 'ui-igscheduler-appointment-popover-delete-button'. */
            appointmentPopoverDeleteButton: "ui-igscheduler-appointment-popover-delete-button",
            /* Class applied to the appointment popover open button. Default value is 'ui-igscheduler-appointment-popover-open-button'. */
            appointmentPopoverOpenButton: "ui-igscheduler-appointment-popover-open-button",
            /* Class applied to the appointment dialog form. Default value is 'ui-igscheduler-appointment-dialog-form'. */
            appointmentDialogForm: "ui-igscheduler-appointment-dialog-form",
            /* Class applied to an appointment dialog form group. Default value is 'ui-igscheduler-appointment-form-group'.*/
            appointmentDialogFormGroup: "ui-igscheduler-appointment-form-group",
            /* Class applied to the appointment dialog subject editor. Default value is 'ui-igscheduler-appointment-dialog-subject'. */
            appointmentDialogSubject: "ui-igscheduler-appointment-dialog-subject",
            /* Class applied to the appointment dialog location editor. Default value is 'ui-igscheduler-appointment-dialog-location'. */
            appointmentDialogLocation: "ui-igscheduler-appointment-dialog-location",
            /* Class applied to the appointment dialog from datepicker. Default value is 'ui-igscheduler-appointment-dialog-from-date'. */
            appointmentDialogFromDate: "ui-igscheduler-appointment-dialog-from-date",
            /* Class applied to the appointment dialog from datetime label. Default value is 'ui-igscheduler-appointment-dialog-from-date-time-label'.  */
            appointmentDialogFromDateTimeLabel: "ui-igscheduler-appointment-dialog-from-date-time-label",
            /* Class applied to the appointment dialog from timepicker. Default value is 'ui-igscheduler-appointment-dialog-from-time'. */
            appointmentDialogFromTime: "ui-igscheduler-appointment-dialog-from-time",
            /* Class applied to the appointment dialog to datepicker. Default value is 'ui-igscheduler-appointment-dialog-to-date'. */
            appointmentDialogToDate: "ui-igscheduler-appointment-dialog-to-date",
            /* Class applied to the appointment dialog to datetime label. Default value is 'ui-igscheduler-appointment-dialog-to-date-time-label'. */
            appointmentDialogToDateTimeLabel: "ui-igscheduler-appointment-dialog-to-date-time-label",
            /* Class applied to the appointment dialog to timepicker. Default value is 'ui-igscheduler-appointment-dialog-to-time'. */
            appointmentDialogToTime: "ui-igscheduler-appointment-dialog-to-time",
            /* Class applied to the appointment dialog description editor. Default value is 'ui-igscheduler-appointment-dialog-description'. */
            appointmentDialogDescription: "ui-igscheduler-appointment-dialog-description",
            /* Class applied to the appointment dialog create button. Default value is 'ui-igscheudler-appointment-dialog-create-button'. */
            appointmentDialogCreateButton: "ui-igscheudler-appointment-dialog-create-button",
            /* Class applied to the appointment dialog save button. Default value is 'ui-igscheduler-appointment-dialog-save-button'. */
            appointmentDialogSaveButton: "ui-igscheduler-appointment-dialog-save-button",
            /* Class applied to the appointment dialog cancel button. Default value is 'ui-igscheduler-appointment-dialog-cancel-button'. */
            appointmentDialogCancelButton: "ui-igscheduler-appointment-dialog-cancel-button",
            /* Class applied to the delete appointment confirmation dialog. Default value is 'ui-igscheduler-delete-appointment-dialog-confirmation'. */
            deleteAppointmentDialogConfirmation: "ui-igscheduler-delete-appointment-dialog-confirmation",
            /* Class applied to the delete appointment dialog actions. Default value is 'ui-igscheduler-delete-appointment-dialog-actions'. */
            deleteAppointmentDialogActions: "ui-igscheduler-delete-appointment-dialog-actions",
            /* Class applied to the delete appointment dialog cancel button. Default value is 'ui-igscheduler-delete-appointment-dialog-cancel-button'. */
            deleteAppointmentDialogCancelButton: "ui-igscheduler-delete-appointment-dialog-cancel-button",
            /* Class applied to the delete appointment dialog delete button. Default value is 'ui-igscheduler-delete-appointment-dialog-delete-button'. */
            deleteAppointmentDialogDeleteButton: "ui-igscheduler-delete-appointment-dialog-delete-button",
            /* Class applied to the combo resources element. */
            resourcesCombo: "ui-igscheduler-resources-combo",
            /* Class applied to the combo item resource color element. */
            resourcesComboItemColor: "ui-igscheduler-resources-combo-item-color",
            /* Class applied to the combo item resource text element. */
            resourcesComboItemDisplayText: "ui-igscheduler-resources-combo-item-text"
        },
        events: {
            /* igWidget events go here */
            /*  cancel="true" Fired before agenda view range is changed when using previous and next buttons (fired only in Agenda View)
			```
				//Bind
				$(document).delegate(".selector", "igscheduleragendarangechanging", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the days to be shown in AgendaView mode.
					ui.dateRangeInterval;
					//return reference to the current AgendaView start date.
					ui.currentAgendaRangeStartDate;
					//return reference to the new AgendaView start date.
					ui.newAgendaRangeStartDate;
				});

				//Initialize
				$(".selector").igScheduler({
					agendaRangeChanging: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.dateRangeInterval" argType="number" Gets a reference to the days to be shown in AgendaView mode.
				eventArgument="ui.currentAgendaRangeStartDate" argType="object" Gets a reference to the current AgendaView start date.
				eventArgument="ui.newAgendaRangeStartDate" argType="object" Gets a reference to the newly AgendaView start date.
			*/
            agendaRangeChanging: "agendaRangeChanging",
            /*  cancel="false" Fired after agenda view range is changed when using previous and next buttons (fired only in Agenda View)
			```
				//Bind
				$(document).delegate(".selector", "igscheduleragendarangechanged", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the days to be shown in AgendaView mode.
					ui.dateRangeInterval;
					//return reference to the AgendaView start date.
					ui.newAgendaRangeStartDate;
				});

				//Initialize
				$(".selector").igScheduler({
					agendaRangeChanged: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.dateRangeInterval" argType="number" Gets a reference to the days to be shown in AgendaView mode.
				eventArgument="ui.newAgendaRangeStartDate" argType="object" Gets a reference to the newly AgendaView start date.
			*/
            agendaRangeChanged: "agendaRangeChanged",
            /* cancel="false" Fired when a day is selected from the datepicker calendar.
			```
				//Bind
				$(document).delegate(".selector", "igschedulerdayselected", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the selected date.
					ui.date;
				});

				//Initialize
				$(".selector").igScheduler({
					daySelected: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.date" argType="object" Gets a reference to currently selected date.
			*/
            daySelected: "daySelected",
            /* cancel="true" Fired before changing the month begins, when using previous and next buttons (fired only in Month View)
			```
				//Bind
				$(document).delegate(".selector", "igschedulermonthchanging", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the new selected date.
					ui.newSelectedDate;
					//return reference to the currently selected date.
					ui.currentSelectedDate;
				});

				//Initialize
				$(".selector").igScheduler({
					monthChanging: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.newSelectedDate" argType="object" Gets a reference to newly selected date.
				eventArgument="ui.currentSelectedDate" argType="object" Gets a reference to the currently selected date.
			*/
            monthChanging: "monthChanging",
            /* cancel="false" Fired after month is changed when using previous and next buttons (fired only in Month View)
			```
				//Bind
				$(document).delegate(".selector", "igschedulermonthchanged", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the selected date.
					ui.newSelectedDate;
				});

				//Initialize
				$(".selector").igScheduler({
					monthChanged: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.newSelectedDate" argType="object" Gets a reference to newly selected date.
			*/
            monthChanged: "monthChanged",
            /* cancel="false" Fired before rendering of the scheduler begins.
			```
				//Bind
				$(document).delegate(".selector", "igschedulerrendering", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
				});

				//Initialize
				$(".selector").igScheduler({
					rendering: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler performing rendering.
			*/
            rendering: "rendering",
            /* cancel="false" Fired after rendering of the scheduler has finished.
			```
				//Bind
				$(document).delegate(".selector", "igschedulerrendered", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
				});

				//Initialize
				$(".selector").igScheduler({
					rendered: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler that performed the rendering.
			*/
            rendered: "rendered",
            /* cancel="true" Fired before the view is changed, when using the menu buttons.
			```
				//Bind
				$(document).delegate(".selector", "igschedulerviewchanging", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the currently selected view.
					ui.currentSelectedView
					//return reference to the newly selected view.
					ui.newSelectedView;
				});

				//Initialize
				$(".selector").igScheduler({
					viewChanging: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.currentSelectedView" argType="string" Gets a reference to the currently selected view.
				eventArgument="ui.newSelectedView" argType="string" Gets a reference to the newly selected view.
			 */
            viewChanging: "viewChanging",
            /* cancel="false" Fired after the view is changed, when using the menu buttons.
			```
				//Bind
				$(document).delegate(".selector", "igschedulerviewchanged", function (evt, ui) {
					//return reference to the scheduler.
					ui.owner;
					//return reference to the newly selected view.
					ui.newSelectedView;
				});

				//Initialize
				$(".selector").igScheduler({
					viewChanged: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.newSelectedView" argType="string" Gets a reference to the newly selected view.
			 */
            viewChanged: "viewChanged",
            /* cancel="true" Fired before opening the dialog for creating/editing appointment.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdialogopening", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment dialog
					ui.element;
					// returns whether we are creating or updating an appointment
					ui.isAppointmentNew;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDialogOpening: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.element" argType="object" Gets a reference to the appointment dialog.
				eventArgument="ui.isAppointmentNew" argType="bool" Gets whether we are creating or updating an appointment.
			 */
            appointmentDialogOpening: "appointmentDialogOpening",
            /* cancel="false" Fired after opening the dialog for creating/editing appointment.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdialogopened", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment dialog
					ui.element;
					// returns whether we are creating or updating an appointment
					ui.isAppointmentNew;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDialogOpened: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.element" argType="object" Gets a reference to the appointment dialog.
				eventArgument="ui.isAppointmentNew" argType="bool" Gets whether we are creating or updating an appointment.
			 */
            appointmentDialogOpened: "appointmentDialogOpened",
            /* cancel="true" Fired before closing the dialog for adding/editing appointment.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdialogclosing", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment dialog
					ui.element;
					// returns whether we are creating or updating an appointment
					ui.isAppointmentNew;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDialogClosing: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.element" argType="object" Gets a reference to the appointment dialog.
				eventArgument="ui.isAppointmentNew" argType="bool" Gets whether we are creating or updating an appointment.
			 */
            appointmentDialogClosing: "appointmentDialogClosing",
            /* cancel="false" Fired after closing the dialog window for adding/editing appointment.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdialogclosed", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment dialog
					ui.element;
					// returns whether we are creating or updating an appointment
					ui.isAppointmentNew;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDialogClosed: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.element" argType="object" Gets a reference to the appointment dialog.
				eventArgument="ui.isAppointmentNew" argType="bool" Gets whether we are creating or updating an appointment.
			 */
            appointmentDialogClosed: "appointmentDialogClosed",
            /* cancel="true" Fired before an appointment is created.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentcreating", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment which is going to be created
					ui.appointment;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentCreating: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointment" argType="object" Gets a reference to the appointment which is going to be created.
			 */
            appointmentCreating: "appointmentCreating",
            /* cancel="false" Fired after an appointment is created.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentcreated", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the created appointment
					ui.appointment;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentCreated: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointment" argType="object" Gets a reference to the created appointment.
			 */
            appointmentCreated: "appointmentCreated",
            /* cancel="true" Fired before an appointment is deleted.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdeleting", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the appointment which is going to be deleted
					ui.appointment;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDeleting: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointment" argType="object" Gets a reference to the appointment which is going to be deleted.
			 */
            appointmentDeleting: "appointmentDeleting",
            /* cancel="false" Fired after an appointment is deleted.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentdeleted", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns the id of the deleted appointment
					ui.appointmentId;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentDeleted: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointmentId" argType="int" Gets the id of the deleted appointment.
			 */
            appointmentDeleted: "appointmentDeleted",
            /* cancel="true" Fired before an appointment is edited.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentediting", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the original appointment
					ui.appointment;
					// returns a reference to the appointment with the edited values
					ui.newAppointment;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentEditing: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointment" argType="object" Gets a reference to the original appointment.
				eventArgument="ui.newAppointment" argType="object" Gets a reference to the appointment with the edited values.
			 */
            appointmentEditing: "appointmentEditing",
            /* cancel="false" Fired after an appointment is edited.
			```
				// Bind
				$(document).delegate(".selector", "igschedulerappointmentedited", function (evt, ui) {
					// returns a reference to the scheduler
					ui.owner;
					// returns a reference to the edited appointment
					ui.appointment;
				});

				// Initialize
				$(".selector").igScheduler({
					appointmentEdited: function(evt, ui) {...}
				});
			```
				eventArgument="evt" argType="event" jQuery event object.
				eventArgument="ui.owner" argType="object" Gets a reference to the scheduler.
				eventArgument="ui.appointment" argType="object" Gets a reference to the edited appointment.
			 */
            appointmentEdited: "appointmentEdited"
        },
        _createWidget: function () {
            this._options = {
                resoucesById: {},
                resourcesComboItemTemplate: "<span class='" + this.css.resourcesComboItemColor + "'></span>" +
                                            "<span class='" + this.css.resourcesComboItemDisplayText + "'>${displayName}</span>",
                tabletBreakpoint: 768,
                mobileBreakpoint: 576,
                $header: undefined,
                $body: undefined,
                $scheduler: undefined,
                $todayButton: undefined,
                $navigator: undefined,
                $previousButton: undefined,
                $dateRangeButton: undefined,
                $nextButton: undefined,
                $calendar: undefined,
                $tabs: undefined,
                locale: $.ig.SchedulerLocale.locale.tag,
                monthFormat: $.ig.regional.defaults.dateTitleMonthPattern,
                agendaFormat: $.ig.regional.defaults.dateTitleFullPattern,
                timeFormat: $.ig.regional.defaults.timePattern,
                $dateRangeButtonTextContainer: undefined,
                $appointmentDialog: undefined,
                $appointmentDialogSubject: undefined,
                $appointmentDialogResourceCombo: undefined,
                $appointmentDialogLocation: undefined,
                $appointmentDialogFromDate: undefined,
                $appointmentDialogFromTime: undefined,
                $appointmentDialogToDate: undefined,
                $appointmentDialogToTime: undefined,
                $appointmentDialogDescription: undefined,
                $appointmentDialogCreateButton: undefined,
                $appointmentDialogSaveButton: undefined,
                $appointmentDialogCancelButton: undefined,
                $appointmentPopover: undefined,
                $appointmentPopoverContainer: undefined,
                $appointmentPopoverSubject: undefined,
                $appointmentPopoverFromTo: undefined,
                $appointmentPopoverDeleteButton: undefined,
                $appointmentPopoverOpenButton: undefined,
                $dayPopover: undefined,
                $dayPopoverContainer: undefined,
                $dayPopoverCreateButton: undefined,
                appointmentDialogDatePickersOptions: {
                    dateInputFormat: "date",
                    dateDisplayFormat: "date"
                },
                appointmentDialogTimePickersOptions: {
                    buttonType: "spin",
                    dateInputFormat: "time",
                    dateDisplayFormat: "time"
                },
                appointmentDialogDefaultFromTimeHours: 9,
                appointmentDialogDefaultToTimeHours: 18,
                appointmentDialogSpinMinutesDelta: 15,
                appointmentDialogWidth: "500px",
                appointmentDialogMobileWidth: "100%",
                appointmentDialogPosition: "center",
                appointmentDialogMobilePosition: "top",
                preventDayClickedEvent: false,
                currentAppointment: null,
                $deleteAppointmentDialog: undefined,
                $deleteAppointmentDialogCancelButton: undefined,
                $deleteAppointmentDialogDeleteButton: undefined
            };

            $.Widget.prototype._createWidget.apply(this, arguments);
        },
        _create: function () {
            this._saveInitialState();
            this._render();
            this._storeResourcesColorsById();
        },
        _render: function () {
            this._triggerRendering();
            this._renderContainer();
            this._renderHeader();
            this._renderBody();
            this._attachEventHandlers();
            this._triggerRendered();
        },
        _renderContainer: function () {
            if (!this.element.is("div")) {
                throw new Error($.ig.SchedulerLocale.locale.nonDivError);
            }

            this.element
				.addClass(this.css.scheduler)
				.addClass(this.css.container);

            if (this.options.width) {
                this.element.css("width", this.options.width);
            }
            if (this.options.height) {
                this.element.css("height", this.options.height);
            }
        },
        _renderHeader: function () {
            this._options.$header = $("<div></div>")
				.addClass(this.css.header)
				.appendTo(this.element);

            this._renderTodayButton();
            this._renderNavigator();
            this._renderTabs();
        },
        _renderBody: function () {
            var self = this;

            this._options.$body = $("<div></div>")
				.addClass(this.css.body)
				.appendTo(this.element);

            this._options.$scheduler = $("<div></div>")
				.appendTo(this._options.$body)
				.igSchedulerCore(this._setDefaults());
            this._options.$scheduler.one("igschedulercorelayoutupdated", function () {

                // Use this event as equivalent of render one, and becuase it fires multiple times, use 'one' the detach it after the first call.
                self._viewMode(self.options.viewMode);
                self._selectDate(self.options.selectedDate);
            });
        },
        _renderTodayButton: function () {
            if (this.options.enableTodayButton) {
                this._options.$todayButton = $("<div></div>")
					.addClass(this.css.todayButton)
					.appendTo(this._options.$header);
                this._options.$todayButton
					.append($("<span></span>").addClass(this.css.todayButtonIcon));
                this._options.$todayButton.append("<span>" +
					$.ig.SchedulerLocale.locale.todayButton + "</span>");
            }
        },
        _renderNavigator: function () {

            this._options.$navigator = $("<div></div>")
				.addClass(this.css.navigator)
				.appendTo(this._options.$header);

            this._options.$previousButton = $("<div><span></span></div>")
				.addClass(this.css.previousButton)
				.attr("title", $.ig.SchedulerLocale.locale.previous)
				.appendTo(this._options.$navigator);

            this._options.$dateRangeButton = $("<div></div>")
				.addClass(this.css.dateRangeButton)
				.attr("title", $.ig.SchedulerLocale.locale.dateRange)
				.appendTo(this._options.$navigator);

            this._renderCalendar();

            this._options.$dateRangeButtonTextContainer = $("<span></span>")
				.addClass(this.css.dateRangeButtonSpan)
				.appendTo(this._options.$dateRangeButton);

            this._options.$nextButton = $("<div><span></span></div>")
				.addClass(this.css.nextButton)
				.attr("title", $.ig.SchedulerLocale.locale.next)
				.appendTo(this._options.$navigator);
        },
        _renderCalendar: function () {
            var pickerOptions, self = this;

            pickerOptions = {
                onSelect: function () {
                    var date = $(this).datepicker("getDate");

                    self._selectDate(date);
                    self._triggerDaySelected();
                }
            };

            $.datepicker.setDefaults($.datepicker.regional[ this._options.dateShortLocale ]);
            this._options.$calendar = $("<input />")
				.appendTo(this._options.$dateRangeButton)
				.datepicker(pickerOptions);

            //for some reason the method setDate can not be called now, so call it in the previous/next button navigation
            this._options.$calendar.datepicker("setDate", new Date());
        },
        _renderTabs: function () {
            var self = this;
            this._options.$tabs = $("<div></div>")
				.addClass(this.css.tabsContainer)
				.appendTo(this._options.$header);
            $.each(this.options.views, function (index, value) {
                self._renderTab(value.replace("View", ""));
            });
        },
        _renderTab: function (value) {
            var self = this;

            this._options[ "$" + value + "ViewButton" ] =
				$("<div></div>")
					.addClass(self.css.tabs)
					.appendTo(this._options.$tabs)
					.append($("<span></span>").addClass(self.css[ value + "TabIcon" ]))
					.append("<span>" + $.ig.SchedulerLocale.locale[ value ] + "</span>");
        },
        _setDefaults: function () {
        	var selDate = this.options.selectedDate,
				interval = this.options.agendaViewSettings.dateRangeInterval,
				settings = this.options.monthViewSettings,
				orientation = this._getSplitOrientation(), 
				coreOptions;

            this.options.viewMode = this.options.viewMode !== null ?
				this.options.viewMode : this.options.views[0] || "monthView";

            coreOptions = $.extend(true, {}, this.options);

            // Fixed options
            coreOptions.width = "100%";
            coreOptions.height = "100%";
            coreOptions.monthViewScrollMode = "paged";
            coreOptions.monthViewNameVisibility = "collapsed";
            coreOptions.cultureName = this._options.locale;

            // Agenda View Settings
            coreOptions.agendaViewMinimumDate = selDate;
            coreOptions.agendaViewMaximumDate = new $.ig.Date.prototype.addDays(selDate, interval);

            // Month View Settings
            coreOptions.monthViewAgendaVisibility =
				settings.isAgendaVisible ? "visible" : "collapsed";
            coreOptions.agendaViewAppointmentScope =
				settings.agendaVisibilityType;
            coreOptions.viewSplitOrientation =
				orientation;
            coreOptions.monthViewDayContentDisplayMode =
				(orientation === "vertical") ? "activitySubject" : "squareIndicator";
            coreOptions.monthViewHorizontalSeparatorVisibility =
				settings.isHorizontalSeparatorVisibile ? "visible" : "collapsed";
            coreOptions.monthViewVerticalSeparatorVisibility =
				settings.isVerticalSeparatorVisibile ? "visible" : "collapsed";
            coreOptions.monthViewDayOfWeekHeaderVisibility =
				settings.isWeekdayVisible ? "visible" : "collapsed";
            coreOptions.monthViewWeekNumberVisibility =
				settings.isWeekNumberVisible ? "visible" : "collapsed";
            coreOptions.monthViewLeadingDayVisibility =
				settings.isPreviousMonthShown ? "visible" : "collapsed";
            coreOptions.monthViewTrailingDayVisibility =
				settings.isNextMonthShown ? "visible" : "collapsed";

            return coreOptions;
        },
        _dateRangeButtonText: function (date) {
            var viewMode = this.options.viewMode, pattern;

            if (viewMode === "monthView") {
                pattern = this._options.monthFormat;
            } else if (viewMode === "agendaView") {
                pattern = this._options.agendaFormat;
            }

            $(".date-range-button-text").text($.datepicker.formatDate(pattern, date));

        },
        _tabSwitcher: function (mode, event) {
            var currentSelectedView = this.options.viewMode,
			noCancel = this._triggerViewChanging(event, mode, currentSelectedView);

            if (noCancel) {
                switch (mode) {
                    case "monthView":
                        this._viewMode("monthView");
                        break;

                    case "agendaView":
                        this._viewMode("agendaView");
                        break;
                }
                this._triggerViewChanged(event, mode);
            }
        },
        _viewMode: function (mode) {
            switch (mode) {
                case "monthView":
                    this._options.$scheduler.igSchedulerCore("option", "viewMode", "monthView");
                    this.options.viewMode = "monthView";
                    this._options.$calendar.datepicker("option", "dateFormat", this._options.monthFormat);
                    var minDate = this._options.$scheduler.igSchedulerCore("option", "agendaViewMinimumDate");
                    this._selectDate(minDate);
                    this._options.$calendar.datepicker("hide");
                    this._options.$dateRangeButton.removeClass(this.css.dateRangeButton);
                    this._options.$dateRangeButton.addClass(this.css.disabledDateRangeButton);
                    if (this._options.$monthViewButton) {
                    	this._options.$monthViewButton.addClass(this.css.selectedTab);
                    }
                    if (this._options.$agendaViewButton) {
                    	this._options.$agendaViewButton.removeClass(this.css.selectedTab);
                    }
                    break;

                case "agendaView":
                    this._options.$scheduler.igSchedulerCore("option", "viewMode", "agendaView");
                    this.options.viewMode = "agendaView";
                    this._options.$calendar.datepicker("option", "dateFormat", this._options.agendaFormat);
                    this._selectDate(this._options.$scheduler.igSchedulerCore("option", "selectedDate"));
                    this._options.$dateRangeButton.removeClass(this.css.disabledDateRangeButton);
                    this._options.$dateRangeButton.addClass(this.css.dateRangeButton);
                    if (this._options.$agendaViewButton) {
                    	this._options.$agendaViewButton.addClass(this.css.selectedTab);
                    }
                    if (this._options.$monthViewButton) {
                    	this._options.$monthViewButton.removeClass(this.css.selectedTab);
                    }
                    break;
            }
        },
        _changeTimePeriod: function (event, delta) {
            var newDate, startAgendaRangeDate, agendaRange, noCancel;

            if (this._options.$scheduler.igSchedulerCore("option", "viewMode") === "monthView") {
                newDate = new Date(this._options.$scheduler.igSchedulerCore("option", "selectedDate"));
                newDate.setMonth(newDate.getMonth() + delta);
                noCancel = this._triggerMonthChanging(event, newDate);

                if (noCancel) {
                    this._selectDate(newDate);
                    this._triggerMonthChanged(event);
                }

            } else {
                agendaRange = this.options.agendaViewSettings.dateRangeInterval;
                startAgendaRangeDate =
					this._options.$scheduler.igSchedulerCore("option", "agendaViewMinimumDate");
                startAgendaRangeDate = new Date(startAgendaRangeDate.getFullYear(),
					startAgendaRangeDate.getMonth(),
					startAgendaRangeDate.getDate() + delta * agendaRange);
                noCancel = this._triggerAgendaRangeChanging(event, startAgendaRangeDate);

                if (noCancel) {
                    this._selectDate(startAgendaRangeDate);
                    this._triggerAgendaRangeChanged(event);
                }
            }

        },
        _selectDate: function (date) {
            var monthDate = this._options.$scheduler.igSchedulerCore("option", "selectedDate");

            if (this.options.selectedDate !== date) {
                this.options.selectedDate = date;
            }
            this._dateRangeButtonText(date);
            if (this._options.$calendar.datepicker("getDate") !== date) {
                this._options.$calendar.datepicker("setDate", date);
            }
            if (monthDate.getTime() !== date.getTime()) {
                this._options.$scheduler.igSchedulerCore("option", "selectedDate", date);
            }
            this._options.$scheduler.igSchedulerCore("ensureMonthVisibleInMonthView", date);
            this._options.$scheduler.igSchedulerCore("ensureDayVisibleInMonthView", date);

            this._setOption("agendaViewMinimumDate", date);
            this._setOption("agendaViewMaximumDate", new $.ig.Date.prototype.addDays(date,
					this.options.agendaViewSettings.dateRangeInterval));
        },
        _attachEventHandlers: function () {
            this._attachHeaderEventHandlers();
            this._attachSchedulerEventHandlers();
            this._attachDocumentEventHandlers();
        },
        _attachHeaderEventHandlers: function () {
            var self = this;

            this._options.$todayButton.on("click", function () {
            	self._selectDate(new Date());
            });

            this._options.$previousButton.on("click", function (event) {
            	self._changeTimePeriod(event, -1);
            });

            this._options.$dateRangeButton.on("click", function () {
            	var view = self._options.$scheduler.igSchedulerCore("option", "viewMode");

            	if (view === "monthView") {
            		return;
            	} else {
            		self._options.$calendar.datepicker("show");
            	}
            });

            this._options.$nextButton.on("click", function (event) {
            	self._changeTimePeriod(event, 1);
            });

            if (this._options.$monthViewButton) {
            	this._options.$monthViewButton.on("click", function (event) {
            		self._tabSwitcher("monthView", event);
            	});
            }

            if (this._options.$agendaViewButton) {
            	this._options.$agendaViewButton.on("click", function (event) {
            		self._tabSwitcher("agendaView", event);
            	});
            }
        },
        _detachHeaderEventHandlers: function () {
            this._options.$todayButton.off();
            this._options.$previousButton.off();
            this._options.$dateRangeButton.off();
            this._options.$nextButton.off();
            if (this._options.$monthViewButton) {
            	this._options.$monthViewButton.off();
            }
            if (this._options.$agendaViewButton) {
            	this._options.$agendaViewButton.off();
            }
        },
        _attachSchedulerEventHandlers: function () {
            this._options.$scheduler.on("igschedulercoredayclicked",
				$.proxy(this._onDayClicked, this));
            this._options.$scheduler.on("igschedulercoreappointmentselected",
				$.proxy(this._onAppointmentSelected, this));
            this._options.$scheduler.on("igschedulercoreappointmentclicked",
				$.proxy(this._onAppointmentClicked, this));
        },
        _detachSchedulerEventHandlers: function () {
            this._options.$scheduler.off("igschedulercoredayclicked",
				$.proxy(this._onDayClicked, this));
            this._options.$scheduler.off("igschedulercoreappointmentselected",
				$.proxy(this._onAppointmentSelected, this));
            this._options.$scheduler.off("igschedulercoreappointmentclicked",
				$.proxy(this._onAppointmentClicked, this));
        },
        _attachDocumentEventHandlers: function () {
            $(document).on("click", $.proxy(this._onDocumentClicked, this));
            $(window).on("resize", $.proxy(this._onWindowResize, this));
        },
        _detachDocumentEventHandlers: function () {
            $(document).off("click", $.proxy(this._onDocumentClicked, this));
            $(window).off("resize", $.proxy(this._onWindowResize, this));
        },
        _onDayClicked: function (event, args) {
            this._selectDate(args.clickedDate);

            if (this.options.appointmentDialogSuppress) {
                return;
            }

            if (this._options.preventDayClickedEvent) {
                this._options.preventDayClickedEvent = false;
                return;
            }

            if (this._options.$dayPopover === undefined) {
                this._renderDayPopover();
            }

            // month switch detection
            if (args.clickedDate.getMonth() !== this.options.selectedDate.getMonth()) {
                this._options.$dayPopover.igPopover("hide");
                return;
            }

            // Bug fix 236770 D.G. 10 May 2017 [Scheduler] Edit popover remains open when changing the selected day using keyboard arrows
            if (this._options.$appointmentPopover &&
                    this._options.$appointmentPopoverContainer.css("display") !== "none") {
                this._options.$appointmentPopover.igPopover("hide");
            }

            setTimeout(function (self, clickedDate) {
                var selectedDayElement =
					self._options.$scheduler.igSchedulerCore("getElementForDay", clickedDate);
                self._options.$dayPopover.igPopover("show", $(selectedDayElement));
            }, 100, this, args.clickedDate);
        },
        _onAppointmentClicked: function (event, args) {
            if (this.options.appointmentDialogSuppress) {
                return;
            }

            if (args.viewMode === $.ig.scheduler.SchedulerViewMode.monthView) {
                var element, fromTo;
                this._options.preventDayClickedEvent = true;

                if (this._options.$appointmentPopover === undefined) {
                    this._renderAppointmentPopover();
                }

                if (this._options.$appointmentPopoverContainer.css("display") !== "none") {
                    this._options.$appointmentPopover.igPopover("hide");
                }

                this._options.currentAppointment = args.appointment;
                this._options.$appointmentPopoverSubject.text(args.appointment.subject());
                fromTo = this._formatDateToAMPM(args.appointment.start()) + " - " +
				   this._formatDateToAMPM(args.appointment.end());
                this._options.$appointmentPopoverFromTo.text(fromTo);

                element = this._options.$scheduler.igSchedulerCore("getElementForActivity", args.appointment,
					args.viewMode, args.clickedInDate);

                setTimeout(function (self) {
                    self._options.$appointmentPopover.igPopover("show", $(element));
                }, 0, this);
            }
        },
        _onAppointmentSelected: function (event, args) {
            var newSelectedDay = args.selectedAppointment.start();
            this.options.selectedDate = newSelectedDay;
            this._dateRangeButtonText(newSelectedDay);
            this._options.$calendar.datepicker("setDate", newSelectedDay);
        },
        _openAppointmentDialogForCreating: function () {
            var noCancel;

            if (this._options.$appointmentDialog === undefined) {
                this._renderAppointmentDialog();
            }

            noCancel = this._triggerAppointmentDialogOpening(true);
            if (noCancel) {
                this._options.currentAppointment = undefined;
                this._clearAppointmentDialogData();
                this._options.$appointmentDialog.dialog("option", "title",
					$.ig.SchedulerLocale.locale.createNewAppointmentDialogTitle);
                this._updateAppointmentDialogTitleColor("");
                this._options.$appointmentDialogSaveButton.hide();
                this._options.$appointmentDialogCreateButton.show();
                this._options.$appointmentDialog.dialog("open");
                this._triggerAppointmentDialogOpened(true);
            }
        },
        _openAppointmentDialogForEditing: function () {
            var appointment, fromDate, toDate, noCancel, resourceColor = null;
            if (this._options.$appointmentDialog === undefined) {
                this._renderAppointmentDialog();
            }

            noCancel = this._triggerAppointmentDialogOpening(false);
            if (noCancel) {
                appointment = this._options.currentAppointment;
                this._clearAppointmentDialogData();
                this._options.$appointmentDialogSubject.igTextEditor("value",
					appointment.subject());
                this._options.$appointmentDialogLocation.igTextEditor("value",
					appointment.location());

                if (appointment.resourceId() !== null) {
                    this._options.$appointmentDialogResourceCombo
						.igCombo("value", appointment.resourceId());
                    resourceColor = this._getResourceColorById(appointment.resourceId());
                }

                fromDate = appointment.start();
                toDate = appointment.end();
                this._setAppointmentDialogFromToDates(fromDate, toDate);
                this._options.$appointmentDialogDescription.igTextEditor("value",
					appointment.description());
                this._options.$appointmentDialog.dialog("option", "title",
					$.ig.SchedulerLocale.locale.editAppointmentDialogTitle);
                this._updateAppointmentDialogTitleColor(resourceColor);
                this._options.$appointmentDialogSaveButton.show();
                this._options.$appointmentDialogCreateButton.hide();
                this._options.$appointmentDialog.dialog("open");
                this._triggerAppointmentDialogOpened(false);
            }
        },
        _onWindowResize: function () {
            this._setResponsibleUI();
        },
        _setResponsibleUI: function () {
            var currentOrientation, newOrientation;

            currentOrientation =
				this._options.$scheduler.igSchedulerCore("option", "viewSplitOrientation");
            newOrientation = this._getSplitOrientation();
            if (currentOrientation !== newOrientation) {
                this._options.$scheduler.igSchedulerCore("option",
					"viewSplitOrientation", newOrientation);
                this._options.$scheduler.igSchedulerCore("option",
					"monthViewDayContentDisplayMode",
					(newOrientation === "vertical") ? "activitySubject" : "squareIndicator");
            }
            if (this._options.$appointmentDialog) {
                this._options.$appointmentDialog.dialog("option",
					"position", this._getDialogPosition());
                this._options.$appointmentDialog.dialog("option",
					"width", this._getDialogWidth());
            }
            if (this._options.$deleteAppointmentDialog) {
                this._options.$deleteAppointmentDialog.dialog("option",
					"position", this._getDialogPosition());
                this._options.$deleteAppointmentDialog.dialog("option",
					"width", this._getDialogWidth());
            }
        },
        _getSplitOrientation: function () {
            var orientation = this.options.monthViewSettings.viewSplitOrientation,
				containerWidth = this.element.outerWidth();

            if (orientation === "auto") {
                if (containerWidth < this._options.tabletBreakpoint) {
                    orientation = "horizontal";
                } else {
                    orientation = "vertical";
                }
            }
            return orientation;
        },
        _getDialogPosition: function () {
            var containerWidth = this.element.outerWidth(), position;
            if (containerWidth < this._options.mobileBreakpoint) {
                position = this._options.appointmentDialogMobilePosition;
            } else {
                position = this._options.appointmentDialogPosition;
            }

            return { my: position, at: position, of: this.element };
        },
        _getDialogWidth: function () {
            return (this.element.outerWidth() < this._options.mobileBreakpoint) ?
				this._options.appointmentDialogMobileWidth :
				this._options.appointmentDialogWidth;
        },
        _clearAppointmentDialogData: function () {
            this._options.$appointmentDialogSubject.igTextEditor("value", "");
            this._options.$appointmentDialogLocation.igTextEditor("value", "");
            this._setAppointmentDialogDefaultDateTime();
            this._options.$appointmentDialogDescription.igTextEditor("value", "");
        },
        _setAppointmentDialogDefaultDateTime: function () {
            var selectedDate = this.options.selectedDate,
				selectedDateYear = selectedDate.getFullYear(),
				selectedDateMonth = selectedDate.getMonth(),
				selectedDateDay = selectedDate.getDate(),
				fromDate = new Date(selectedDateYear, selectedDateMonth, selectedDateDay,
					this._options.appointmentDialogDefaultFromTimeHours),
				toDate = new Date(selectedDateYear, selectedDateMonth, selectedDateDay,
					this._options.appointmentDialogDefaultToTimeHours);

            this._setAppointmentDialogFromToDates(fromDate, toDate);
        },
        _setAppointmentDialogFromToDates: function (fromDate, toDate) {
            this._setDateValue(this._options.$appointmentDialogFromDate,
				this._options.$appointmentDialogFromTime, fromDate);
            this._setDateValue(this._options.$appointmentDialogToDate,
				this._options.$appointmentDialogToTime, toDate);
        },
        _setDateValue: function (picker, editor, value) {
            if (picker) {
                picker.igDatePicker("option", "value", value);
            }

            if (editor) {
                editor.igDateEditor("option", "value", value);
            }
        },
        _renderAppointmentDialog: function () {
            var self = this, $appointmentDialogForm = $("<form></form>")
					.addClass(this.css.appointmentDialogForm),
				$subjectLocationContainer = $("<div></div>")
					.addClass(this.css.sideBySideGroup);

            this._options.$appointmentDialog = $appointmentDialogForm
				.appendTo(this.element)
				.dialog({
				    autoOpen: false,
				    modal: true,
				    width: this._getDialogWidth(),
				    position: this._getDialogPosition(),
				    resizable: false,
				    closeText: $.ig.SchedulerLocale.locale.dialogCloseButtonText,
				    create: function () {
				        $appointmentDialogForm.append($subjectLocationContainer);
				        self._renderAppointmentDialogSubject($subjectLocationContainer);
				        self._renderAppointmentDialogLocation($subjectLocationContainer);
				        self._renderAppointmentDialogFromDateTime($appointmentDialogForm);
				        self._renderAppointmentDialogToDateTime($appointmentDialogForm);
				        self._renderAppointmentDialogResource($appointmentDialogForm);
				        self._renderAppointmentDialogDescription($appointmentDialogForm);
				        self._renderAppointmentDialogActions($appointmentDialogForm);
				        self._initializeAppointmentDialogFieldsValidator($appointmentDialogForm);
				    },
				    beforeClose: function () {
				        var isAppointmentNew = self._options.currentAppointment ? false : true,
							noCancel = self._triggerAppointmentDialogClosing(isAppointmentNew);
				        if (noCancel) {
				            self._options.$appointmentDialog.igValidator("hide");
				            self._options.$appointmentDialogResourceCombo
								.igCombo("deselectAll");
				        } else {
				            return false;
				        }
				    },
				    close: function () {
				        var isAppointmentNew = self._options.currentAppointment ? false : true;
				        self._triggerAppointmentDialogClosed(isAppointmentNew);
				    },
				    dragStart: function (event) {
				        // Prevent dragging of the dialog under mobile devices.
				        if (self.element.outerWidth() < self._options.mobileBreakpoint) {
				            event.preventDefault();
				        }
				    }
				});
        },
        _renderAppointmentDialogSubject: function (container) {
            var $subjectContainer = $("<div></div").addClass(this.css.appointmentDialogFormGroup),
				$subjectLabel = $("<label></label>")
					.text($.ig.SchedulerLocale.locale.appointmentDialogSubjectLabel);

            this._options.$appointmentDialogSubject = $("<input type='text' />")
				.addClass(this.css.appointmentDialogSubject);

            container.append($subjectContainer
				.append($subjectLabel)
				.append(this._options.$appointmentDialogSubject));

            this._options.$appointmentDialogSubject.igTextEditor({
                placeHolder: $.ig.SchedulerLocale.locale.appointmentDialogSubjectLabel
            });
        },
        _renderAppointmentDialogLocation: function (container) {
            var $locationContainer = $("<div></div>")
					.addClass(this.css.appointmentDialogFormGroup),
				$locationLabel = $("<label></label>")
					.text($.ig.SchedulerLocale.locale.appointmentDialogLocationLabel);

            this._options.$appointmentDialogLocation = $("<input type='text' />")
				.addClass(this.css.appointmentDialogLocation);

            container.append($locationContainer
				.append($locationLabel)
				.append(this._options.$appointmentDialogLocation));

            this._options.$appointmentDialogLocation.igTextEditor({
                placeHolder: $.ig.SchedulerLocale.locale.appointmentDialogLocationLabel
            });
        },
        _renderAppointmentDialogFromDateTime: function (container) {
            var self = this,
				$fromContainer = $("<div></div>").addClass(this.css.sideBySideGroup),
				$fromLabel = $("<label></label>")
					.addClass(this.css.appointmentDialogFromDateTimeLabel)
					.text($.ig.SchedulerLocale.locale.appointmentDialogFromLabel),
				$fromDateContainer = $("<div></div>")
					.addClass(this.css.appointmentDialogFormGroup),
				$fromTimeContainer = $("<div></div>")
					.addClass(this.css.appointmentDialogFormGroup),
				fromDateOptions, fromTimeOptions;

            this._options.$appointmentDialogFromDate = $("<input type='date' />")
				.addClass(this.css.appointmentDialogFromDate);

            this._options.$appointmentDialogFromTime = $("<input type='date' />")
				.addClass(this.css.appointmentDialogFromTime);

            $fromDateContainer.append(this._options.$appointmentDialogFromDate);
            $fromTimeContainer.append(this._options.$appointmentDialogFromTime);

            container.append($fromLabel)
				.append($fromContainer
					.append($fromDateContainer)
					.append($fromTimeContainer));

            fromDateOptions = $.extend({}, {
                valueChanged: function () {
                    self._triggerValidationForToDate();
                }
            }, this._options.appointmentDialogDatePickersOptions);

            fromTimeOptions = $.extend({}, {
                valueChanged: function () {
                    self._triggerValidationForToDate();
                },
                rendered: function (evt, ui) {
                    self._overwriteSpinHandlers(ui.owner);
                }
            }, this._options.appointmentDialogTimePickersOptions);

            this._options.$appointmentDialogFromDate.igDatePicker(fromDateOptions);
            this._options.$appointmentDialogFromTime.igDateEditor(fromTimeOptions);
        },
        _triggerValidationForToDate: function () {
            this._options.$appointmentDialog.igValidator("validate", 3);
        },
        _renderAppointmentDialogToDateTime: function (container) {
            var self = this,
				$toContainer = $("<div></div>").addClass(this.css.sideBySideGroup),
				$toLabel = $("<label></label>").addClass(this.css.appointmentDialogToDateTimeLabel)
					.text($.ig.SchedulerLocale.locale.appointmentDialogToLabel),
				$toDateContainer = $("<div></div>").addClass(this.css.appointmentDialogFormGroup),
				$toTimeContainer = $("<div></div>").addClass(this.css.appointmentDialogFormGroup),
				toTimeOptions;

            this._options.$appointmentDialogToDate = $("<input type='text' />")
				.addClass(this.css.appointmentDialogToDate);

            this._options.$appointmentDialogToTime = $("<input type='date' />")
				.addClass(this.css.appointmentDialogToTime);

            $toDateContainer.append(this._options.$appointmentDialogToDate);
            $toTimeContainer.append(this._options.$appointmentDialogToTime);

            container.append($toLabel)
				.append($toContainer
					.append($toDateContainer)
					.append($toTimeContainer));

            toTimeOptions = $.extend({}, {
                valueChanged: function () {
                    self._triggerValidationForToDate();
                },
                rendered: function (evt, ui) {
                    self._overwriteSpinHandlers(ui.owner);
                }
            }, this._options.appointmentDialogTimePickersOptions);

            this._options.$appointmentDialogToDate
				.igDatePicker(this._options.appointmentDialogDatePickersOptions);
            this._options.$appointmentDialogToTime.igDateEditor(toTimeOptions);
        },
        _overwriteSpinHandlers: function (editor) {
            // This is an workaround for a missing functionality in the editor.
            // When the editor has it, these two functions can be removed.

            var self = this,
				spinMinutesDelta = this._options.appointmentDialogSpinMinutesDelta,
				oldSpinEditMode, oldSpinDisplayMode;

            oldSpinEditMode = editor._spinEditMode;
            editor._spinEditMode = function (delta, userInteraction) {
                oldSpinEditMode.apply(editor, [  
					delta * self._getDelta(editor, spinMinutesDelta, delta),
					userInteraction ]);
            };
            oldSpinDisplayMode = editor._spinDisplayMode;
            editor._spinDisplayMode = function (delta, userInteraction) {
                oldSpinDisplayMode.apply(editor, [  delta * spinMinutesDelta, userInteraction ]);
            };
        },
        _getDelta: function (editor, delta) {
            return (editor._getTimePosition().name === "minutes") ? delta : 1;
        },
        _renderAppointmentDialogResource: function (container) {
            var $ownerContainer = $("<div></div>").addClass(this.css.appointmentDialogFormGroup),
				$ownerLabel = $("<label></label>").text(
					$.ig.SchedulerLocale.locale.appointmentDialogResourceLabel),
				    comboOptions;

            this._options.$appointmentDialogResourceCombo = $("<div></div>")
                    .addClass(this.css.resourcesCombo);

            comboOptions = {
                selectionChanged: $.proxy(this._appointmentDialogResourceComboSelectionChanged, this),
                itemsRendered: $.proxy(this._onAppointmentDialogResourcesComboItemsRendered, this),
                textKey: "displayName",
                valueKey: "id",
                itemTemplate: this._options.resourcesComboItemTemplate,
                dataSource: this.options.dataSource.resourceItemsSource()
            };

            this._options.$appointmentDialogResourceCombo.igCombo(comboOptions);

            container.append($ownerContainer.append($ownerLabel)
				.append(this._options.$appointmentDialogResourceCombo));
        },
        _appointmentDialogResourceComboSelectionChanged: function (evt, ui) {
            var $colorContainer,
                color = null;

            if (ui.items.length > 0) {
                $colorContainer = $(ui.items[  0 ].element).find("." + this.css.resourcesComboItemColor);
                color = $colorContainer.css("background-color");
            }

            this._updateAppointmentDialogTitleColor(color);
        },
        _renderAppointmentDialogDescription: function (container) {
            var $descriptionContainer = $("<div></div>").addClass(this.css.appointmentDialogFormGroup),
				$descirptionLabel = $("<label></label>").text($.ig.SchedulerLocale.locale.appointmentDialogDescriptionLabel);

            this._options.$appointmentDialogDescription = $("<textarea></textarea>")
				.addClass(this.css.appointmentDialogDescription);

            container.append($descriptionContainer
				.append($descirptionLabel)
				.append(this._options.$appointmentDialogDescription));

            this._options.$appointmentDialogDescription.igTextEditor({
                textMode: "multiline",
                height: 100
            });
        },
        _renderAppointmentDialogActions: function (container) {
            var $actionsContainer = $("<div></div>").addClass(this.css.appointmentDialogFormGroup);

            this._options.$appointmentDialogCreateButton = $("<input type='submit' />")
				.addClass(this.css.appointmentDialogCreateButton)
				.appendTo($actionsContainer)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentDialogCreateButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onCreateAppointmentClicked, this));

            this._options.$appointmentDialogSaveButton = $("<input type='submit' />")
				.addClass(this.css.appointmentDialogSaveButton)
				.appendTo($actionsContainer)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentDialogSaveButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onEditAppointmentClicked, this));

            this._options.$appointmentDialogCancelButton = $("<input type='button' />")
				.addClass(this.css.appointmentDialogCancelButton)
				.appendTo($actionsContainer)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentDialogCancelButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onCancelAppointmentClicked, this));

            container.append($actionsContainer);
        },
        _renderDayPopover: function () {
            var $dayPopoverContent = $("<div></div>").addClass(this.css.dayPopoverContent);

            this._options.$dayPopoverCreateButton = $("<input type='button' />")
				.addClass(this.css.dayPopoverCreateButton)
				.appendTo($dayPopoverContent)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentDialogCreateAppointmentButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onDayPopoverCreateButtonClicked, this));

            this._options.$dayPopover = $("<div></div>")
				.appendTo(this.element)
				.igPopover({
				    animationDuration: 50,
				    contentTemplate: $dayPopoverContent,
				    headerTemplate: {
				        closeButton: true,
				        title: $.ig.SchedulerLocale.locale.dayPopoverTitle
				    }
				});

            this._options.$dayPopoverContainer = $dayPopoverContent.closest(".ui-igpopover");
        },
        _renderAppointmentPopover: function () {
            var $appointmentPopoverContent = $("<div></div>")
					.addClass(this.css.appointmentPopoverContent),
				$appointmentPopoverActions = $("<div></div>")
					.addClass(this.css.appointmentPopoverDeleteButton);

            this._options.$appointmentPopoverSubject = $("<div></div>")
				.addClass(this.css.appointmentPopoverSubject)
				.appendTo($appointmentPopoverContent);

            this._options.$appointmentPopoverFromTo = $("<div></div>")
				.addClass(this.css.appointmentPopoverFromTo)
				.appendTo($appointmentPopoverContent);

            this._options.$appointmentPopoverDeleteButton = $("<input type='button' />")
				.addClass(this.css.appointmentPopoverDeleteButton)
				.appendTo($appointmentPopoverActions)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentPopoverDeleteButtonLabel
				})
				.on("click", $.proxy(this._onDeleteAppointmentClicked, this));

            this._options.$appointmentPopoverOpenButton = $("<input type='button' />")
				.addClass(this.css.appointmentPopoverOpenButton)
				.appendTo($appointmentPopoverActions)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.appointmentPopoverOpenButtonLabel
				})
				.on("click", $.proxy(this._onOpenAppointmentClicked, this));

            $appointmentPopoverContent.append($appointmentPopoverActions);

            this._options.$appointmentPopover = $("<div></div>")
				.appendTo(this.element)
				.igPopover({
				    animationDuration: 50,
				    contentTemplate: $appointmentPopoverContent,
				    headerTemplate: {
				        closeButton: true,
				        title: $.ig.SchedulerLocale.locale.appointmentPopoverTitle
				    }
				});

            this._options.$appointmentPopoverContainer =
				$appointmentPopoverContent.closest(".ui-igpopover");
        },
        _renderDeleteAppointmentDialog: function () {
            var $dialogContainer = $("<div></div>"),
				$dialogConfirmation = $("<div></div>")
					.addClass(this.css.deleteAppointmentDialogConfirmation)
					.text($.ig.SchedulerLocale.locale.deleteAppointmentDialogConfirmation),
				$dialogActions = $("<div></div>")
					.addClass(this.css.deleteAppointmentDialogActions);

            $dialogConfirmation.appendTo($dialogContainer);
            this._options.$deleteAppointmentDialogCancelButton = $("<input type='button' />")
				.addClass(this.css.deleteAppointmentDialogCancelButton)
				.appendTo($dialogActions)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.deleteAppointmentDialogCancelButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onCancelDeletingAppointmentClicked, this));

            this._options.$deleteAppointmentDialogDeleteButton = $("<input type='button' />")
				.addClass(this.css.deleteAppointmentDialogDeleteButton)
				.appendTo($dialogActions)
				.igButton({
				    labelText: $.ig.SchedulerLocale.locale.deleteAppointmentDialogDeleteButtonLabel
				})
				.on("igbuttonclick", $.proxy(this._onConfirmDeletingAppointmentClicked, this));

            $dialogContainer.append($dialogActions);

            this._options.$deleteAppointmentDialog = $dialogContainer
				.appendTo(this.element)
				.dialog({
				    autoOpen: false,
				    title: $.ig.SchedulerLocale.locale.deleteAppointmentDialogTitle,
				    modal: true,
				    width: this._getDialogWidth(),
				    position: this._getDialogPosition(),
				    resizable: false,
				    closeText: $.ig.SchedulerLocale.locale.dialogCloseButtonText
				});
        },
        _initializeAppointmentDialogFieldsValidator: function (container) {
            var self = this;

            container.igValidator({
                onchange: true,
                onblur: false,
                fields: [{
                    selector: this._options.$appointmentDialogSubject,
                    required: true
                }, {
                    selector: this._options.$appointmentDialogFromDate,
                    required: true
                }, {
                    selector: this._options.$appointmentDialogFromTime,
                    required: true
                }, {
                    selector: this._options.$appointmentDialogToDate,
                    required: true,
                    custom: {
                        method: function (value) {
                            var isTimeSpanValid = self._isTimeSpanValid(value),
								$editorContainer = self._options.$appointmentDialogToTime
									.igDateEditor("editorContainer");

                            if (isTimeSpanValid) {
                                $editorContainer.removeClass($.ui.igNotifier.prototype.css.errorState);
                            } else {
                                $editorContainer.addClass($.ui.igNotifier.prototype.css.errorState);
                            }

                            return isTimeSpanValid;
                        },
                        errorMessage: $.ig.SchedulerLocale.locale.invalidIntervalErrorMessage
                    }
                }, {
                    selector: this._options.$appointmentDialogToTime,
                    required: true
                }]
            });
        },
        _isTimeSpanValid: function (toValue) {
            var from = this._getFromValue(),
				to = this._getToValue(toValue),
				isFromBeforeTo = true;

            // If from or to is null the dates are considered to be valid
            if (from !== null && to !== null) {
                isFromBeforeTo = to.getTime() > from.getTime();
            }

            return isFromBeforeTo;
        },
        _getFromValue: function () {
            return this._getMergedDateAndTime(
					this._options.$appointmentDialogFromDate.igDatePicker("value"),
					this._options.$appointmentDialogFromTime.igDateEditor("value"));
        },
        _getToValue: function (toValue) {
            return this._getMergedDateAndTime(toValue,
				this._options.$appointmentDialogToTime.igDateEditor("value"));
        },
        _getMergedDateAndTime: function (date, time) {
            if (!date || !time) {
                return null;
            }

            var dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
					time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());

            return dateTime;
        },
        _onConfirmDeletingAppointmentClicked: function () {
            var appointmentId = this._options.currentAppointment.id(),
				noCancel = this._triggerAppointmentDeleting(
					this._options.currentAppointment.dataObject());

            if (noCancel) {
                this.deleteAppointment(this._options.currentAppointment);
                this._triggerAppointmentDeleted(appointmentId);
                this._options.currentAppointment = null;
                this._options.$deleteAppointmentDialog.dialog("close");
            }
        },
        _onCancelDeletingAppointmentClicked: function () {
            this._options.currentAppointment = null;
            this._options.$deleteAppointmentDialog.dialog("close");
        },
        _onAppointmentDialogResourcesComboItemsRendered: function (event, ui) {
            var resources = ui.dataSource.data(),
                $appointmentDialogResourceCombo = this._options.$appointmentDialogResourceCombo,
                resource, comboItem, colorContainer, color;

            for (var i = 0; i < resources.length; i++) {
                resource = resources[  i ];
                comboItem = $appointmentDialogResourceCombo.igCombo("itemsFromValue", resource.id);
                colorContainer = comboItem.element.find("." + this.css.resourcesComboItemColor);
                color = this._getResourceColorById(resource.id);
                colorContainer.css("background-color", color);
            }
        },
        _updateDeleteAppointmenDialogTitleColor: function (color) {
            this._updateDialogTitleColor(this._options.$deleteAppointmentDialog, color);
        },
        _updateAppointmentDialogTitleColor: function (color) {
            this._updateDialogTitleColor(this._options.$appointmentDialog, color);
        },
        _updateDialogTitleColor: function (dialogElement, color) {
            var titlebar = dialogElement.dialog("widget")
				.find(".ui-dialog-titlebar");

            if (color) {
                titlebar.css("background-color", color);
            } else {
                titlebar.css("background-color", "");
            }
        },
        _onDocumentClicked: function (event) {
            var $dayPopoverContainer = this._options.$dayPopoverContainer,
                $appointmentPopoverContainer = this._options.$appointmentPopoverContainer;

            if ($dayPopoverContainer !== undefined &&
				$dayPopoverContainer.css("display") !== "none") {
                if (!$dayPopoverContainer.is(event.target) &&
					$dayPopoverContainer.has(event.target).length === 0) {
                    this._options.$dayPopover.igPopover("hide");
                }
            }

            if ($appointmentPopoverContainer !== undefined &&
				$appointmentPopoverContainer.css("display") !== "none") {
                if (!$appointmentPopoverContainer.is(event.target) &&
					$appointmentPopoverContainer.has(event.target).length === 0) {
                    this._options.$appointmentPopover.igPopover("hide");
                }
            }
        },
        _onDeleteAppointmentClicked: function (event) {
            var resourceColor = null;
            event.preventDefault();

            if (this._options.$deleteAppointmentDialog === undefined) {
                this._renderDeleteAppointmentDialog();
            }

            this._options.$appointmentPopover.igPopover("hide");
            if (this._options.currentAppointment.resourceId() !== null) {
                resourceColor = this._getResourceColorById(this._options.currentAppointment.resourceId());
            }

            this._updateDeleteAppointmenDialogTitleColor(resourceColor);
            this._options.$deleteAppointmentDialog.dialog("open");
        },
        _onOpenAppointmentClicked: function (event) {
            event.preventDefault();
            this._options.$appointmentPopover.igPopover("hide");
            this._openAppointmentDialogForEditing();
        },
        _onCancelAppointmentClicked: function (event) {
            event.preventDefault();
            this._options.$appointmentDialog.dialog("close");
        },
        _getAppointmentFromDialog: function () {
            var fromDateValue = this._options.$appointmentDialogFromDate.igDatePicker("value"),
				fromTimeValue = this._options.$appointmentDialogFromTime.igDateEditor("value"),
				toDateValue = this._options.$appointmentDialogToDate.igDatePicker("value"),
				toTimeValue = this._options.$appointmentDialogToTime.igDateEditor("value"),
				appointment, start, end, resourceId;

            start = new Date(fromDateValue.getFullYear(),
				fromDateValue.getMonth(), fromDateValue.getDate(),
				fromTimeValue.getHours(), fromTimeValue.getMinutes());
            end = new Date(toDateValue.getFullYear(),
				toDateValue.getMonth(), toDateValue.getDate(),
				toTimeValue.getHours(), toTimeValue.getMinutes());

            resourceId = this._options.$appointmentDialogResourceCombo.igCombo("value");

            appointment = {
                subject: this._options.$appointmentDialogSubject.igTextEditor("value"),
                location: this._options.$appointmentDialogLocation.igTextEditor("value"),
                start: start,
                end: end,
                description: this._options.$appointmentDialogDescription.igTextEditor("value"),
                resourceId: resourceId
            };

            return appointment;
        },

        _onCreateAppointmentClicked: function (event) {
            var noCancel, appointment, result;
            event.preventDefault();

            if (!this._options.$appointmentDialog.igValidator("validate")) {
                return;
            }

            appointment = this._getAppointmentFromDialog();
            noCancel = this._triggerAppointmentCreating(appointment);
            if (noCancel) {
                result = this.createAppointment(appointment);
                this._triggerAppointmentCreated(result);
                this._options.$appointmentDialog.dialog("close");
            }
        },
        _onEditAppointmentClicked: function (event) {
            var noCancel;
            event.preventDefault();

            if (!this._options.$appointmentDialog.igValidator("validate")) {
                return;
            }

            var appointmentNewData = this._getAppointmentFromDialog();
            appointmentNewData.id = this._options.currentAppointment.id();

            noCancel = this._triggerAppointmentEditing(this._options.currentAppointment.dataObject(),
				appointmentNewData);
            if (noCancel) {
                this.editAppointment(this._options.currentAppointment, appointmentNewData);
                this._triggerAppointmentEdited(this._options.currentAppointment.dataObject());
                this._options.currentAppointment = null;
                this._options.$appointmentDialog.dialog("close");
            }
        },
        getAppointmentById: function (id) {
            /* Gets reference to appointment by id
			```
			$(".selector").%%WidgetName%%("getAppointmentById", 1);
			```
			returnType="$.ig.scheduler.Appointment" The matched appointment or null if not found. */
            var appointment,
				dataSource = this.options.dataSource,
				appoinments = dataSource.appointmentItemsSource(),
				appointmentsResult,
				range,
				translatedAppointmentObjects;

            appointment = appoinments.findRecordByKey(id);

            if (appointment == null) {
                return null;
            }

            range = new $.ig.scheduler.DateTimeRange(appointment.start, appointment.end);
            appointmentsResult = dataSource.getAppointmentsInRange(range);
            translatedAppointmentObjects = appointmentsResult.appointments();

            if (translatedAppointmentObjects.count() <= 0) {
                return null;
            }

            for (var i = 0; i < translatedAppointmentObjects.count(); i++) {
                if (translatedAppointmentObjects.item(i).id() == id) {
                    return translatedAppointmentObjects.item(i);
                }
            }

            return null;
        },
        createAppointment: function (appointment) {
            /* Creates a new appointment and renders it to the scheduler
			```
			$(".selector").%%WidgetName%%("createAppointment", {
				// if not set a GUID is for the id is autogenerated
				id: 1,
				subject: "Some subject"
				location: "Somewhere"
				start: new Date(2017, 04, 05, 12, 30),
				end: new Date(2017, 04, 05, 12, 30),
				// if not set the stone is considered for default
				resourceId: 4,
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			});
			```
			returnType="object" The transaction appointment object that was created. */
            var dataSource, igDataSource;

            if (!appointment.id) {
                appointment.id = $.ig.util.createGuid();
            }

            dataSource = this.options.dataSource;
            igDataSource = dataSource.appointmentItemsSource();

            return igDataSource.addRow(appointment.id, appointment, true);
        },
        deleteAppointment: function (appointment) {
            /* Deletes appointment from the appointment collection
			```
			$(".selector").%%WidgetName%%("deleteAppointment", appointment);
			```
			paramType="$.ig.scheduler.Appointment" appointment
			returnType="$.ig.scheduler.AppointmentOperationResult" */
            var dataSource = this.options.dataSource, result;

            if (!appointment) {
                return;
            }

            result = dataSource.deleteAppointment(appointment);
            // D.G. 17.5.2017 - Bug fix #237283 deleting an appointment does not remove it from the igDataSource - deleting the appointment from the igDataSoure
            dataSource.appointmentItemsSource().deleteRow(appointment.id(), true);

            return result;
        },
        editAppointment: function (appointment, updateAppoinment) {
            /* Deletes appointment from the appointment collection
			```
			$(".selector").%%WidgetName%%("editAppointment", appointment, {
				subject: "Some subject"
				location: "Somewhere"
				start: new Date(2017, 04, 05, 12, 30),
				end: new Date(2017, 04, 05, 12, 30),
				resourceId: 4g,
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			});
			```
			paramType="$.ig.scheduler.Appointment" appointment
			paramType="object" updateAppoinment
			returnType="$.ig.scheduler.AppointmentOperationResult" */
            if (!appointment) {
                return;
            }

            appointment.id(updateAppoinment.id);
            appointment.start(updateAppoinment.start);
            appointment.end(updateAppoinment.end);
            appointment.location(updateAppoinment.location);
            appointment.subject(updateAppoinment.subject);
            appointment.description(updateAppoinment.description);
            appointment.resourceId(updateAppoinment.resourceId);
        },
        _onDayPopoverCreateButtonClicked: function () {
            this._options.$dayPopover.igPopover("hide");
            this._openAppointmentDialogForCreating();
        },
        _formatDateToAMPM: function (date) {
            var time, hours = date.getHours(),
				minutes = date.getMinutes(),
				ampm = "";

            if (this._options.timeFormat.indexOf("tt") >= 0) {
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                ampm = hours >= 12 ? " PM" : " AM";
            }
            minutes = minutes < 10 ? "0" + minutes : minutes;
            time = hours + ":" + minutes + ampm;
            return time;
        },
        _triggerRendering: function () {
            var args = {
                owner: this,
                element: this.element
            };
            return this._trigger(this.events.rendering, null, args);
        },
        _triggerRendered: function () {
            var args = {
                owner: this,
                element: this.element
            };
            this._trigger(this.events.rendered, null, args);
        },
        _triggerViewChanging: function (event, newSelectedView, currentSelectedView) {
            var args = {
                owner: this,
                element: event.target,
                currentSelectedView: currentSelectedView,
                newSelectedView: newSelectedView
            };
            return this._trigger(this.events.viewChanging, event, args);
        },
        _triggerViewChanged: function (event) {
            var args = {
                owner: this,
                element: event.target,
                newSelectedView: this.options.viewMode
            };
            this._trigger(this.events.viewChanged, event, args);
        },
        _triggerDaySelected: function () {
            var args = {
                owner: this,
                element: this.element,
                date: this.options.selectedDate
            };
            this._trigger(this.events.daySelected, null, args);
        },
        _triggerMonthChanging: function (event, newSelectedDate) {
            var args = {
                owner: this,
                element: event.target,
                currentSelectedDate: this.options.selectedDate,
                newSelectedDate: newSelectedDate
            };
            return this._trigger(this.events.monthChanging, event, args);
        },
        _triggerMonthChanged: function (event) {
            var args = {
                owner: this,
                element: event.target,
                newSelectedDate: this.options.selectedDate
            };
            this._trigger(this.events.monthChanged, event, args);
        },
        _triggerAgendaRangeChanging: function (event, newAgendaRangeStartDate) {
            var args = {
                owner: this,
                element: event.target,
                dateRangeInterval: this.options.agendaViewSettings.dateRangeInterval,
                currentAgendaRangeStartDate: this.options.selectedDate,
                newAgendaRangeStartDate: newAgendaRangeStartDate
            };
            return this._trigger(this.events.agendaRangeChanging, event, args);
        },
        _triggerAgendaRangeChanged: function (event) {
            var args = {
                owner: this,
                element: event.target,
                dateRangeInterval: this.options.agendaViewSettings.dateRangeInterval,
                newAgendaRangeStartDate: this.options.selectedDate
            };
            this._trigger(this.events.agendaRangeChanged, event, args);

        },
        _triggerAppointmentDialogOpening: function (isAppointmentNew) {
            var args = {
                owner: this,
                element: this._options.$appointmentDialog,
                isAppointmentNew: isAppointmentNew
            };

            return this._trigger(this.events.appointmentDialogOpening, null, args);
        },
        _triggerAppointmentDialogOpened: function (isAppointmentNew) {
            var args = {
                owner: this,
                element: this._options.$appointmentDialog,
                isAppointmentNew: isAppointmentNew
            };

            this._trigger(this.events.appointmentDialogOpened, null, args);
        },
        _triggerAppointmentDialogClosing: function (isAppointmentNew) {
            var args = {
                owner: this,
                element: this._options.$appointmentDialog,
                isAppointmentNew: isAppointmentNew
            };

            return this._trigger(this.events.appointmentDialogClosing, null, args);
        },
        _triggerAppointmentDialogClosed: function (isAppointmentNew) {
            var args = {
                owner: this,
                element: this._options.$appointmentDialog,
                isAppointmentNew: isAppointmentNew
            };

            this._trigger(this.events.appointmentDialogClosed, null, args);
        },
        _triggerAppointmentCreating: function (appointment) {
            var args = {
                owner: this,
                appointment: appointment
            };

            return this._trigger(this.events.appointmentCreating, null, args);
        },
        _triggerAppointmentCreated: function (appointment) {
            var args = {
                owner: this,
                appointment: appointment
            };

            this._trigger(this.events.appointmentCreated, null, args);
        },
        _triggerAppointmentEditing: function (appointment, newAppointment) {
            var args = {
                owner: this,
                appointment: appointment,
                newAppointment: newAppointment
            };

            return this._trigger(this.events.appointmentEditing, null, args);
        },
        _triggerAppointmentEdited: function (appointment) {
            var args = {
                owner: this,
                appointment: appointment
            };

            this._trigger(this.events.appointmentEdited, null, args);
        },
        _triggerAppointmentDeleting: function (appointment) {
            var args = {
                owner: this,
                appointment: appointment
            };

            return this._trigger(this.events.appointmentDeleting, null, args);
        },
        _triggerAppointmentDeleted: function (appointmentId) {
            var args = {
                owner: this,
                appointmentId: appointmentId
            };

            this._trigger(this.events.appointmentDeleted, null, args);
        },
        _setOption: function (key, value) {
            switch (key) {
                case "viewMode":
                    this._viewMode(value);
                    break;
                case "selectedDate":
                    this._selectDate(value);
                    break;
                case "agendaViewSettings":
                    this._setAgendaViewSettings(value);
                    break;
                case "monthViewSettings":
                    this._setMonthViewSettings(value);
                    break;
                default:
                    this._options.$scheduler.igSchedulerCore("option", key, value);
            }
        },
        _setAgendaViewSettings: function (settings) {
            var date = this.options.selectedDate, newValue, name;

            for (name in settings) {
                newValue = settings[ name ];
                switch (name) {
                    case "dateRangeInterval":
                        this._options.$scheduler.igSchedulerCore("option",
							"agendaViewMinimumDate", date);
                        this._options.$scheduler.igSchedulerCore("option",
							"agendaViewMaximumDate",
							new $.ig.Date.prototype.addDays(date, newValue));
                        break;
                }
            }
        },
        _setMonthViewSettings: function (settings) {
            var newValue, name;

            for (name in settings) {
                newValue = settings[ name ];
                switch (name) {
                    case "isHorizontalSeparatorVisibile":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewHorizontalSeparatorVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                    case "isVerticalSeparatorVisibile":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewVerticalSeparatorVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                    case "isWeekdayVisible":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewDayOfWeekHeaderVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                    case "isWeekNumberVisible":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewWeekNumberVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                    case "isPreviousMonthShown":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewLeadingDayVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                    case "isNextMonthShown":
                        this._options.$scheduler.igSchedulerCore("option",
							"monthViewTrailingDayVisibility",
							newValue ? "visible" : "collapsed");
                        break;
                }
            }
        },
        _saveInitialState: function () {
            var index, element = this.element[ 0 ], attr;

            // Save DOM
            if (this.element.children().length > 0) {
                this._initialDOMContent = this.element.children().clone(true);
                this._removeAttributes();
                this.element.off();
                this.element.empty();
            }

            // Save Attributes
            this._initialAttributes = [];
            attr = element.attributes;
            for (index = 0; index < attr.length; index++) {
                if (attr[ index ].name !== "id") {
                    this._initialAttributes.push({
                        name: attr[ index ].name,
                        attrValue: attr[ index ].value
                    });
                }
            }
        },
        _restoreInitialSate: function () {
            var index;

            // Restore DOM
            if (this._initialDOMContent) {
                this._initialDOMContent.appendTo(this.element);
                delete this._initialDOMContent;
            }

            // Restore Attributes
            if (this._initialAttributes) {
                for (index = 0; index < this._initialAttributes.length; index++) {
                    if (this._initialAttributes[ index ].name !== "id") {
                        this.element.attr(this._initialAttributes[ index ].name,
							this._initialAttributes[ index ].attrValue);
                    }
                }
                delete this._initialAttributes;
            }
        },
        _removeAttributes: function () {
            var element = this.element,
				attr = element[ 0 ].attributes,
				concatenatedAttr = "", i;

            for (i = 0; i < attr.length; i++) {
                if (attr[ i ].name !== "id") {
                    concatenatedAttr += (attr[ i ].name + " ");
                }
            }
            element.removeAttr(concatenatedAttr.trim(" "));
        },
        _destroyDayPopover: function () {
            if (this._options.$dayPopover === undefined) {
                return;
            }

            this._options.$dayPopoverCreateButton.igButton("destroy");
            this._options.$dayPopover.igPopover("destroy");
        },
        _destroyAppointmentPopover: function () {
            if (this._options.$appointmentPopover === undefined) {
                return;
            }

            this._options.$appointmentPopoverDeleteButton.igButton("destroy");
            this._options.$appointmentPopoverOpenButton.igButton("destroy");
            this._options.$appointmentPopover.igPopover("destroy");
        },
        _destroyDeleteAppointmentDialog: function () {
            if (this._options.$deleteAppointmentDialog === undefined) {
                return;
            }

            this._options.$deleteAppointmentDialogCancelButton.igButton("destroy");
            this._options.$deleteAppointmentDialogDeleteButton.igButton("destroy");
            this._options.$deleteAppointmentDialog.dialog("destroy");
        },
        _destroyAppointmentDialog: function () {
            if (this._options.$appointmentDialog === undefined) {
                return;
            }

            this._options.$appointmentDialogSubject.igTextEditor("destroy");
            this._options.$appointmentDialogLocation.igTextEditor("destroy");
            this._options.$appointmentDialogFromDate.igDatePicker("destroy");
            this._options.$appointmentDialogFromTime.igDateEditor("destroy");
            this._options.$appointmentDialogToDate.igDatePicker("destroy");
            this._options.$appointmentDialogToTime.igDateEditor("destroy");
            this._options.$appointmentDialogDescription.igTextEditor("destroy");
            this._options.$appointmentDialogCreateButton.igButton("destroy");
            this._options.$appointmentDialogSaveButton.igButton("destroy");
            this._options.$appointmentDialogCancelButton.igButton("destroy");
            this._options.$appointmentDialog.dialog("destroy");
            this._options.$appointmentDialogResourceCombo.igCombo("destroy");
            this._options.$appointmentDialog.igValidator("destroy");
        },
        _storeResourcesColorsById: function () {
            var resources = this.options.dataSource.getResources(),
                resourcesEnumerator = resources.getEnumerator(),
                resource;

            while (resourcesEnumerator.moveNext()) {
                resource = resourcesEnumerator.current();

                this._options.resoucesById[ resource.id() ] = {
                    color: this.options.dataSource.getAppointmentBackgroundColor(resource),
                    displayName: resource.displayName()
                }
            }
        },
        _getResourceColorById: function (id) {
            var resource = this._options.resoucesById[ id ];
            
            // if there is no resource with that empty string is returned
            // which is the default color
            if (!resource) {
                return "";
            }

            return resource.color;
        },
        destroy: function () {
            /* Destroys the widget
				```
					$(".selector").%%WidgetName%%("destroy");
				```
			*/
            this._detachHeaderEventHandlers();
            this._detachSchedulerEventHandlers();
            this._detachDocumentEventHandlers();
            this._removeAttributes();
            this._options.$calendar.datepicker("destroy");
            this._destroyDayPopover();
            this._destroyAppointmentPopover();
            this._destroyDeleteAppointmentDialog();
            this._destroyAppointmentDialog();
            this._options.$scheduler.igSchedulerCore("destroy");
            this.element.empty();
            delete this._options;
            $.Widget.prototype.destroy.apply(this, arguments);
            this._restoreInitialSate();
            return this;
        },
        todayButton: function () {
            /* Gets reference to the today UI button.
			```
			$(".selector").%%WidgetName%%("todayButton");
			```
			returnType="$" The visual editor element. */
            return this._options.$todayButton;
        },
        previousButton: function () {
            /* Gets reference to the previous UI button.
			```
			$(".selector").%%WidgetName%%("previousButton");
			```
			returnType="$" The visual editor element. */
            return this._options.$previousButton;
        },
        dateRangeButton: function () {
            /* Gets reference to the date range UI button.
			```
			$(".selector").%%WidgetName%%("dateRangeButton");
			```
			returnType="$" The visual editor element. */
            return this._options.$dateRangeButton;
        },
        nextButton: function () {
            /* Gets reference to the next UI button.
			```
			$(".selector").%%WidgetName%%("nextButton");
			```
			returnType="$" The visual editor element. */
            return this._options.$nextButton;
        },
        getCalendar: function () {
            /* Gets reference to the jQuery calendar UI control.
			```
			$(".selector").%%WidgetName%%("getCalendar");
			```
			returnType="$" The visual editor element. */
            return this._options.$calendar;
        }
    });

    $.extend($.ui.igScheduler, { version: "17.1.20171.1012" });
    return $.ui.igScheduler;// REMOVE_FROM_COMBINED_FILES
}));// REMOVE_FROM_COMBINED_FILES
