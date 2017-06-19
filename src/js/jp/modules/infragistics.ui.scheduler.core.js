/*!@license
* Infragistics.Web.ClientUI Scheduler 17.1.20171.1012
*
* Copyright (c) 2016-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery.js
* jquery-ui.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ui.scroll.js
* infragistics.ext_core.js
* infragistics.ext_collections.js
* infragistics.ext_collectionsExtended.js
* infragistics.ext_io.js
* infragistics.ext_text.js
* infragistics.ext_web.js
* infragistics.dv_core.js
* infragistics.dv_jquerydom.js
* infragistics.ext_ui.js
* infragistics.scheduler.core.js
*/

/*global jQuery */
if (typeof (jQuery) === "undefined") {
    throw new Error("jQuery is undefined");
}

(function ($) {
    // igSchedulerCore definition
    $.widget('ui.igSchedulerCore', {
        css: {
            /* Get the class applied to main element, shown when the schedulerCore is opened in a non HTML5 compatible browser. */
            unsupportedBrowserClass: "ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",
            /* Get the class applied to main element: ui-igscheduler-core */
            scheduler: "ui-igscheduler-core",
            /* Class applied to the tooltip element: ui-igscheduler-tooltip ui-corner-all*/ 
            tooltip: "ui-igscheduler-tooltip ui-corner-all",

            agendaView: "ui-igscheduler-agendaview",
            agendaViewDayHeader: "ui-igscheduler-agendaview-day-header",
            agendaViewMessage: "ui-igscheduler-agendaview-message",
            agendaApptStartTime: "ui-igscheduler-agenda-appt-start-time",
            agendaApptStartTimeSelected: "ui-igscheduler-agenda-appt-start-time-selected",
            agendaApptEndTime: "ui-igscheduler-agenda-appt-end-time",
            agendaApptEndTimeSelected: "ui-igscheduler-agenda-appt-end-time-selected",
            agendaApptSubject: "ui-igscheduler-agenda-appt-subject",
            agendaApptSubjectSelected: "ui-igscheduler-agenda-appt-subject-selected",
            agendaApptLocation: "ui-igscheduler-agenda-appt-location",
            agendaApptLocationSelected: "ui-igscheduler-agenda-appt-location-selected",
            agendaApptArea: "ui-igscheduler-agenda-appt-area",
            agendaApptSelected: "ui-igscheduler-agenda-appt-selected",
            agendaApptColorBar: "ui-igscheduler-agenda-appt-color-bar",
            agendaApptHorizontalSeparator: "ui-igscheduler-agenda-appt-horizontal-separator",
            dayView: "ui-igscheduler-dayview",
            horizontalViewSplitter: "ui-igscheduler-horizontal-view-splitter",
            monthView: "ui-igscheduler-monthview",
            monthViewActivityIndicator: "ui-igscheduler-monthview-activity-indicator",
            monthViewDay: "ui-igscheduler-monthview-day",
            monthViewDayAppointment: "ui-igscheduler-monthview-day-appointment",
            monthViewDayLeading: "ui-igscheduler-monthview-day-leading",
            monthViewDayHorizontalSeparator: "ui-igscheduler-monthview-day-horizontal-separator",
            monthViewDayOfWeekHeader: "ui-igscheduler-monthview-day-of-week-header",
            monthViewDaySelected: "ui-igscheduler-monthview-day-selected",
            monthViewDayToday: "ui-igscheduler-monthview-day-today",
            monthViewDayTodayIndicator: "ui-igscheduler-monthview-day-today-indicator",
            monthViewDayTrailing: "ui-igscheduler-monthview-day-trailing",
            monthViewDayVerticalSeparator: "ui-igscheduler-monthview-day-vertical-separator",
            monthViewMonthHeader: "ui-igscheduler-monthview-month-header",
            monthViewMonthHeaderHorizontalSeparator: "ui-igscheduler-monthview-month-header-horizontal-separator",
            monthViewWeekHeader: "ui-igscheduler-monthview-week-header",
            verticalViewSplitter: "ui-igscheduler-vertical-view-splitter",
            weekView: "ui-igscheduler-weekview",
    },

        events: {
            	/* cancel="false" Occurs when a Appointment is double clicked
	*/
	appointmentDoubleClicked: null,
	/* cancel="false" Occurs when a day is double clicked
	*/
	dayDoubleClicked: null,
	/* cancel="false" Occurs when a layout pass for a specific ViewMode has completed.
	*/
	layoutUpdated: null,
	/* cancel="false" Occurs when an ig.scheduler.Appointment is clicked in the Scheduler.
	*/
	appointmentClicked: null,
	/* cancel="false" Occurs when an ig.scheduler.Appointment is selected in the Scheduler.
	*/
	appointmentSelected: null,
	/* cancel="false" Occurs when a day is clicked
	*/
	dayClicked: null,
	/* cancel="false" Occurs when a day of week header is clicked
	*/
	dayOfWeekHeaderClicked: null,
	/* cancel="false" Occurs when a month header is clicked
	*/
	monthHeaderClicked: null,
	/* cancel="false" Occurs when a new date is selected in the Scheduler.
	*/
	selectedDateChanged: null,
	/* cancel="false" Occurs when a week number is clicked
	*/
	weekNumberClicked: null

        },
        options: {
            /* type="string|number" The width of the scheduler. It can be set as a number in pixels, string (px) or percentage (%).
				string The widget width can be set in pixels (px) and percentage (%).
				number The widget width can be set as a number
			*/
            width: null,
            /* type="string|number" The height of the scheduler. It can be set as a number in pixels, string (px) or percentage (%).
				string The widget height can be set in pixels (px) and percentage (%).
				number The widget height can be set as a number
			*/
            height: null,
            	height: 0,
	width: 0,
	/* type="string" Returns or sets the ISO-639
	language code which identifies the culture used for formatting dates and times.
	*/
	cultureName: null,
	/* type="string" Returns/sets the brush to use for filling the Background of an ig.scheduler.Appointment end time in an AgendaView.
	*/
	agendaViewAppointmentEndTimeBackgroundBrush: null,
	agendaViewAppointmentEndTimeFontInfo: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a selected ig.scheduler.Appointment's end time in an AgendaView.
	*/
	agendaViewAppointmentEndTimeSelectedBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a selected ig.scheduler.Appointment's end time in the AgendaView.
	*/
	agendaViewAppointmentEndTimeSelectedTextBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for an ig.scheduler.Appointment end time in the AgendaView.
	*/
	agendaViewAppointmentEndTimeTextBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of an ig.scheduler.Appointment location in an AgendaView.
	*/
	agendaViewAppointmentLocationBackgroundBrush: null,
	agendaViewAppointmentLocationFontInfo: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a selected ig.scheduler.Appointment's location in an AgendaView.
	*/
	agendaViewAppointmentLocationSelectedBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a selected ig.scheduler.Appointment's location in an AgendaView.
	*/
	agendaViewAppointmentLocationSelectedTextBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for an ig.scheduler.Appointment location in an AgendaView.
	*/
	agendaViewAppointmentLocationTextBrush: null,
	/* type="object" Returns/sets the margin to use for rendering an ig.scheduler.Appointment an an AgendaView.
	*/
	agendaViewAppointmentMargin: null,
	/* type="ig.scheduler.AgendaViewAppointmentScope" Returns/sets the scope of appointments that are displayed in an AgendaView.
	allAppointments type="string" Indicates that appointments for all days that fall within the agendaViewMinimumDate and agendaViewMaximumDate should be displayed in an AgendaView.
	onlyAppointmentsForSelectedDate type="string" Indicates that only appointments for the day that is current selected in the Scheduler should be displayed in an AgendaView.
	*/
	agendaViewAppointmentScope: "onlyAppointmentsForSelectedDate",
	/* type="string" Returns/sets the brush to use when rendering the separator line between ig.scheduler.Appointments in an AgendaView.
	*/
	agendaViewAppointmentSeparatorLineBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of an ig.scheduler.Appointment start time in an AgendaView.
	*/
	agendaViewAppointmentStartTimeBackgroundBrush: null,
	agendaViewAppointmentStartTimeFontInfo: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a selected ig.scheduler.Appointment's start time in an AgendaView.
	*/
	agendaViewAppointmentStartTimeSelectedBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a selected ig.scheduler.Appointment's start time in the AgendaView.
	*/
	agendaViewAppointmentStartTimeSelectedTextBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for an ig.scheduler.Appointment start time in the AgendaView.
	*/
	agendaViewAppointmentStartTimeTextBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of an ig.scheduler.Appointment subject in an AgendaView.
	*/
	agendaViewAppointmentSubjectBackgroundBrush: null,
	agendaViewAppointmentSubjectFontInfo: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a selected ig.scheduler.Appointment's subject in an AgendaView.
	*/
	agendaViewAppointmentSubjectSelectedBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a selected ig.scheduler.Appointment's subject in an AgendaView.
	*/
	agendaViewAppointmentSubjectSelectedTextBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for an ig.scheduler.Appointment subject in an AgendaView.
	*/
	agendaViewAppointmentSubjectTextBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of an AgendaView.
	*/
	agendaViewBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a day header in an AgendaView.
	*/
	agendaViewDayHeaderBackgroundBrush: null,
	agendaViewDayHeaderFontInfo: null,
	/* type="object" Returns/sets the margin to use for rendering the text for the day header of a MonthView.
	*/
	agendaViewDayHeaderMargin: null,
	/* type="string" Returns/sets the brush to use when rendering the separator line between a day header and the day's ig.scheduler.Appointments in an AgendaView.
	*/
	agendaViewDayHeaderSeparatorLineBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a day header in an AgendaView.
	*/
	agendaViewDayHeaderTextBrush: null,
	/* type="number" Returns/sets the spacing between months in a MonthView.
	*/
	agendaViewInterDaySpacing: 10,
	/* type="object" Returns/sets the maximum date for which appointments should be displayed in an AgendaView.  When this property is set, its value will be constrained to the minimumDate and maximumDate dates.
	*/
	agendaViewMaximumDate: null,
	agendaViewMessageFontInfo: null,
	/* type="string" Returns/sets the brush to use when rendering the text for the 'No Events' message in an AgendaView.
	*/
	agendaViewMessageTextBrush: null,
	/* type="object" Returns/sets the minimum date for which appointments should be displayed in an AgendaView.  When this property is set, its value will be constrained to the minimumDate and minimumDate dates.
	*/
	agendaViewMinimumDate: null,
	/* type="ig.scheduler.ScheduleDataSource" Returns/sets the ig.scheduler.ScheduleDataSource to use for obtaining the activity data to display in the control.
	*/
	dataSource: null,
	/* type="object" Returns/sets the earliest DateTime that can possibly be displayed in the control.  Defaults to a date that is 5 years later than the current date.
	*/
	maximumDate: null,
	/* type="object" Returns/sets the latest DateTime that can possibly be displayed in the control.  Defaults to a date that is 5 years prior to the current date.
	*/
	minimumDate: null,
	/* type="string" Returns/sets the brush to use for filling the ActivityIndicator of a day in a MonthView.
	*/
	monthViewDayActivityIndicatorBrush: null,
	/* type="visible|collapsed" Returns/sets the visibility of an AgendaView in a MonthView.  When true, the MonthView will display an AgendaView showing the Appointments for the currently selected day at the top of its list of Appointments.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewAgendaVisibility: "visible",
	monthViewAppointmentFontInfo: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a MonthView.
	*/
	monthViewBackgroundBrush: null,
	/* type="ig.scheduler.MonthViewDayContentDisplayMode" Returns/sets the type of content displayed in a MonthView day.
	squareIndicator type="string" Indicates that a square indicator (tinted using a color derived from the baseColor defined on the ig.scheduler.ScheduleResource associated with the ig.scheduler.ActivityBase being represented) should be displayed.
	activitySubject type="string" Indicates that the subject (tinted using a color derived from the baseColor defined on the ig.scheduler.ScheduleResource associated with the ig.scheduler.ActivityBase being represented) should be displayed.
	*/
	monthViewDayContentDisplayMode: "squareIndicator",
	/* type="string" Returns/sets the brush to use for filling the Background of a day in a MonthView.
	*/
	monthViewDayBackgroundBrush: null,
	monthViewDayFontInfo: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a day in the MonthView.
	*/
	monthViewDayTextBrush: null,
	/* type="string" Returns/sets the brush to use for filling the background of a MonthView day of week header.
	*/
	monthViewDayOfWeekHeaderBackgroundBrush: null,
	monthViewDayOfWeekHeaderFontInfo: null,
	/* type="object" Returns/sets the margin to use for rendering the text for the month day of week header of a MonthView.
	NOTE: Only the Top and Bottom margin values are applied - the Left and Right values are ignored.
	*/
	monthViewDayOfWeekHeaderMargin: null,
	/* type="string" Returns/sets the brush to use for rendering the text for a MonthView day of week header.
	*/
	monthViewDayOfWeekHeaderTextBrush: null,
	/* type="visible|collapsed" Returns/sets the visibility of the MonthView day of week headers.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewDayOfWeekHeaderVisibility: "visible",
	/* type="visible|collapsed" Returns/sets the visibility of the horizontal separators between weeks in the MonthView.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewHorizontalSeparatorVisibility: "collapsed",
	/* type="number" Returns/sets the spacing between months in a MonthView.
	*/
	monthViewInterMonthSpacing: 10,
	/* type="string" Returns/sets the brush to use for filling the Background of a leading day in a MonthView.
	*/
	monthViewLeadingDayBackgroundBrush: null,
	monthViewLeadingDayFontInfo: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a leading day in the MonthView.
	*/
	monthViewLeadingDayTextBrush: null,
	/* type="visible|collapsed" Returns/sets the visibility of the leading days in a MonthView (i.e. days from the prior month that occur in the first week of a given month).
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewLeadingDayVisibility: "visible",
	/* type="string" Returns/sets the brush to use for filling the background of the month name in a MonthView.
	*/
	monthViewNameBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the separator line below a month name in a MonthView.
	*/
	monthViewNameSeparatorLineBrush: null,
	/* type="string" Returns/sets the brush to use for rendering the text for the month name of a MonthView.
	*/
	monthViewNameTextBrush: null,
	monthViewNameFontInfo: null,
	/* type="object" Returns/sets the margin to use for rendering the text for the month name of a MonthView.
	*/
	monthViewNameMargin: null,
	/* type="visible|collapsed" Returns/sets the visibility of the month name of a MonthView.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewNameVisibility: "visible",
	/* type="ig.scheduler.SchedulerViewScrollDirection" Returns/sets the ig.scheduler.SchedulerViewScrollDirection which determines the direction in which the MonthView scrolls.
	vertical type="string" Identifies a Scheduler's view that scrolls vertically.
	horizontal type="string" Identifies a Scheduler's view that scrolls horizontally.
	*/
	monthViewScrollDirection: "horizontal",
	/* type="string" Returns/sets the brush to use for filling the background of a selected day in a MonthView.
	*/
	monthViewSelectedDayBackgroundBrush: null,
	/* type="string" Returns/sets the brush to use for rendering the text of a selected day in a MonthView.
	*/
	monthViewSelectedDayTextBrush: null,
	/* type="string" Returns/sets the brush to use for rendering the separator lines of a MonthView.
	*/
	monthViewSeparatorLineBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the highlight circle for the day in the MonthView that represents today.
	*/
	monthViewTodayHighlightBrush: null,
	/* type="string" Returns/sets the brush to use when rendering the text for the day in the MonthView that represents today.
	*/
	monthViewTodayTextBrush: null,
	/* type="string" Returns/sets the brush to use for filling the Background of a trailing day in a MonthView.
	*/
	monthViewTrailingDayBackgroundBrush: null,
	monthViewTrailingDayFontInfo: null,
	/* type="string" Returns/sets the brush to use when rendering the text for a trailing day in the MonthView.
	*/
	monthViewTrailingDayTextBrush: null,
	/* type="visible|collapsed" Returns/sets the visibility of the trailing days in a MonthView (i.e. days from the following month that occur in the last week of a given month).
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewTrailingDayVisibility: "visible",
	/* type="visible|collapsed" Returns/sets the visibility of the vertical separators between days of the week in a MonthView.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewVerticalSeparatorVisibility: "collapsed",
	/* type="string" Returns/sets the brush to use for filling the background of a week number in a MonthView.
	*/
	monthViewWeekNumberBackgroundBrush: null,
	monthViewWeekNumberFontInfo: null,
	/* type="string" Returns/sets the brush to use for rendering the text of a week number in the MonthView
	*/
	monthViewWeekNumberTextBrush: null,
	/* type="visible|collapsed" Returns/sets the visibility of the week numbers in a MonthView.
	visible type="string" 
	collapsed type="string" 
	*/
	monthViewWeekNumberVisibility: "collapsed",
	/* type="ig.scheduler.Appointment" Returns/sets the ig.scheduler.Appointment that is currently selected in the .  Returns null if no ig.scheduler.Appointment is currently selected.
	*/
	selectedAppointment: null,
	/* type="object" Returns/sets the date that is currently selected in the Scheduler.  Returns null if no date is currently selected.
	*/
	selectedDate: null,
	/* type="ig.scheduler.SchedulerViewSplitOrientation" Returns/sets the ig.scheduler.SchedulerViewSplitOrientation which determines whether the primary and secondary views are split vertically or horizontally.
	vertical type="string" Identifies a vertical split between the Scheduler's views.
	horizontal type="string" Identifies a horizontal split between the Scheduler's views.
	*/
	viewSplitOrientation: "horizontal",
	/* type="ig.scheduler.SchedulerViewMode" Returns/sets the ig.scheduler.SchedulerViewMode which determines which view is currently displayed in the component.
	monthView type="string" Identifies a Scheduler view mode that shows activity for all days in one or more months.
	agendaView type="string" Identifies a Scheduler view mode that shows activity for one or more days in a list type view.
	*/
	viewMode: null

        },

        _setOption: function (key, value, checkPrev) {
            var schedulerCore = this._schedulerCore, o = this.options;
            if (checkPrev && o[key] === value) {
                return;
            }
            $.Widget.prototype._setOption.apply(this, arguments);

            if (this._set_option(schedulerCore, key, value)) {
                return this;
            }

            return this;
        },

        _set_generated_option: function (schedulerCore, key, value) {
            	switch (key) {
		case "height":
			schedulerCore.height(value);
			return true;
		case "width":
			schedulerCore.width(value);
			return true;
		case "cultureName":
			schedulerCore.cultureName(value);
			return true;
		case "agendaViewAppointmentEndTimeBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentEndTimeBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentEndTimeBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentEndTimeFontInfo":
			schedulerCore.agendaViewAppointmentEndTimeFontInfo(value);
			return true;
		case "agendaViewAppointmentEndTimeSelectedBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentEndTimeSelectedBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentEndTimeSelectedBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentEndTimeSelectedTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentEndTimeSelectedTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentEndTimeSelectedTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentEndTimeTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentEndTimeTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentEndTimeTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentLocationBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentLocationBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentLocationBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentLocationFontInfo":
			schedulerCore.agendaViewAppointmentLocationFontInfo(value);
			return true;
		case "agendaViewAppointmentLocationSelectedBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentLocationSelectedBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentLocationSelectedBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentLocationSelectedTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentLocationSelectedTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentLocationSelectedTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentLocationTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentLocationTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentLocationTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentMargin":
			schedulerCore.agendaViewAppointmentMargin(value);
			return true;
		case "agendaViewAppointmentScope":
			switch(value) {
				case "allAppointments":
					schedulerCore.agendaViewAppointmentScope(0);
					break;
				case "onlyAppointmentsForSelectedDate":
					schedulerCore.agendaViewAppointmentScope(1);
					break;
			}
			return true;
		case "agendaViewAppointmentSeparatorLineBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentSeparatorLineBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentSeparatorLineBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentStartTimeBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentStartTimeBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentStartTimeBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentStartTimeFontInfo":
			schedulerCore.agendaViewAppointmentStartTimeFontInfo(value);
			return true;
		case "agendaViewAppointmentStartTimeSelectedBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentStartTimeSelectedBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentStartTimeSelectedBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentStartTimeSelectedTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentStartTimeSelectedTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentStartTimeSelectedTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentStartTimeTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentStartTimeTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentStartTimeTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentSubjectBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentSubjectBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentSubjectBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentSubjectFontInfo":
			schedulerCore.agendaViewAppointmentSubjectFontInfo(value);
			return true;
		case "agendaViewAppointmentSubjectSelectedBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentSubjectSelectedBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentSubjectSelectedBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentSubjectSelectedTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentSubjectSelectedTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentSubjectSelectedTextBrush($tempBrush);
			}
			return true;
		case "agendaViewAppointmentSubjectTextBrush":
			if (value == null) {
				schedulerCore.agendaViewAppointmentSubjectTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewAppointmentSubjectTextBrush($tempBrush);
			}
			return true;
		case "agendaViewBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewDayHeaderBackgroundBrush":
			if (value == null) {
				schedulerCore.agendaViewDayHeaderBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewDayHeaderBackgroundBrush($tempBrush);
			}
			return true;
		case "agendaViewDayHeaderFontInfo":
			schedulerCore.agendaViewDayHeaderFontInfo(value);
			return true;
		case "agendaViewDayHeaderMargin":
			schedulerCore.agendaViewDayHeaderMargin(value);
			return true;
		case "agendaViewDayHeaderSeparatorLineBrush":
			if (value == null) {
				schedulerCore.agendaViewDayHeaderSeparatorLineBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewDayHeaderSeparatorLineBrush($tempBrush);
			}
			return true;
		case "agendaViewDayHeaderTextBrush":
			if (value == null) {
				schedulerCore.agendaViewDayHeaderTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewDayHeaderTextBrush($tempBrush);
			}
			return true;
		case "agendaViewInterDaySpacing":
			schedulerCore.agendaViewInterDaySpacing(value);
			return true;
		case "agendaViewMaximumDate":
			schedulerCore.agendaViewMaximumDate(value);
			return true;
		case "agendaViewMessageFontInfo":
			schedulerCore.agendaViewMessageFontInfo(value);
			return true;
		case "agendaViewMessageTextBrush":
			if (value == null) {
				schedulerCore.agendaViewMessageTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.agendaViewMessageTextBrush($tempBrush);
			}
			return true;
		case "agendaViewMinimumDate":
			schedulerCore.agendaViewMinimumDate(value);
			return true;
		case "dataSource":
			schedulerCore.dataSource(value);
			return true;
		case "maximumDate":
			schedulerCore.maximumDate(value);
			return true;
		case "minimumDate":
			schedulerCore.minimumDate(value);
			return true;
		case "monthViewDayActivityIndicatorBrush":
			if (value == null) {
				schedulerCore.monthViewDayActivityIndicatorBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewDayActivityIndicatorBrush($tempBrush);
			}
			return true;
		case "monthViewAgendaVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewAgendaVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewAgendaVisibility(1);
					break;
			}
			return true;
		case "monthViewAppointmentFontInfo":
			schedulerCore.monthViewAppointmentFontInfo(value);
			return true;
		case "monthViewBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewDayContentDisplayMode":
			switch(value) {
				case "squareIndicator":
					schedulerCore.monthViewDayContentDisplayMode(0);
					break;
				case "activitySubject":
					schedulerCore.monthViewDayContentDisplayMode(1);
					break;
			}
			return true;
		case "monthViewDayBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewDayBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewDayBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewDayFontInfo":
			schedulerCore.monthViewDayFontInfo(value);
			return true;
		case "monthViewDayTextBrush":
			if (value == null) {
				schedulerCore.monthViewDayTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewDayTextBrush($tempBrush);
			}
			return true;
		case "monthViewDayOfWeekHeaderBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewDayOfWeekHeaderBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewDayOfWeekHeaderBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewDayOfWeekHeaderFontInfo":
			schedulerCore.monthViewDayOfWeekHeaderFontInfo(value);
			return true;
		case "monthViewDayOfWeekHeaderMargin":
			schedulerCore.monthViewDayOfWeekHeaderMargin(value);
			return true;
		case "monthViewDayOfWeekHeaderTextBrush":
			if (value == null) {
				schedulerCore.monthViewDayOfWeekHeaderTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewDayOfWeekHeaderTextBrush($tempBrush);
			}
			return true;
		case "monthViewDayOfWeekHeaderVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewDayOfWeekHeaderVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewDayOfWeekHeaderVisibility(1);
					break;
			}
			return true;
		case "monthViewHorizontalSeparatorVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewHorizontalSeparatorVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewHorizontalSeparatorVisibility(1);
					break;
			}
			return true;
		case "monthViewInterMonthSpacing":
			schedulerCore.monthViewInterMonthSpacing(value);
			return true;
		case "monthViewLeadingDayBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewLeadingDayBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewLeadingDayBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewLeadingDayFontInfo":
			schedulerCore.monthViewLeadingDayFontInfo(value);
			return true;
		case "monthViewLeadingDayTextBrush":
			if (value == null) {
				schedulerCore.monthViewLeadingDayTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewLeadingDayTextBrush($tempBrush);
			}
			return true;
		case "monthViewLeadingDayVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewLeadingDayVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewLeadingDayVisibility(1);
					break;
			}
			return true;
		case "monthViewNameBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewNameBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewNameBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewNameSeparatorLineBrush":
			if (value == null) {
				schedulerCore.monthViewNameSeparatorLineBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewNameSeparatorLineBrush($tempBrush);
			}
			return true;
		case "monthViewNameTextBrush":
			if (value == null) {
				schedulerCore.monthViewNameTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewNameTextBrush($tempBrush);
			}
			return true;
		case "monthViewNameFontInfo":
			schedulerCore.monthViewNameFontInfo(value);
			return true;
		case "monthViewNameMargin":
			schedulerCore.monthViewNameMargin(value);
			return true;
		case "monthViewNameVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewNameVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewNameVisibility(1);
					break;
			}
			return true;
		case "monthViewScrollDirection":
			switch(value) {
				case "vertical":
					schedulerCore.monthViewScrollDirection(0);
					break;
				case "horizontal":
					schedulerCore.monthViewScrollDirection(1);
					break;
			}
			return true;
		case "monthViewSelectedDayBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewSelectedDayBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewSelectedDayBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewSelectedDayTextBrush":
			if (value == null) {
				schedulerCore.monthViewSelectedDayTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewSelectedDayTextBrush($tempBrush);
			}
			return true;
		case "monthViewSeparatorLineBrush":
			if (value == null) {
				schedulerCore.monthViewSeparatorLineBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewSeparatorLineBrush($tempBrush);
			}
			return true;
		case "monthViewTodayHighlightBrush":
			if (value == null) {
				schedulerCore.monthViewTodayHighlightBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewTodayHighlightBrush($tempBrush);
			}
			return true;
		case "monthViewTodayTextBrush":
			if (value == null) {
				schedulerCore.monthViewTodayTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewTodayTextBrush($tempBrush);
			}
			return true;
		case "monthViewTrailingDayBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewTrailingDayBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewTrailingDayBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewTrailingDayFontInfo":
			schedulerCore.monthViewTrailingDayFontInfo(value);
			return true;
		case "monthViewTrailingDayTextBrush":
			if (value == null) {
				schedulerCore.monthViewTrailingDayTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewTrailingDayTextBrush($tempBrush);
			}
			return true;
		case "monthViewTrailingDayVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewTrailingDayVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewTrailingDayVisibility(1);
					break;
			}
			return true;
		case "monthViewVerticalSeparatorVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewVerticalSeparatorVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewVerticalSeparatorVisibility(1);
					break;
			}
			return true;
		case "monthViewWeekNumberBackgroundBrush":
			if (value == null) {
				schedulerCore.monthViewWeekNumberBackgroundBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewWeekNumberBackgroundBrush($tempBrush);
			}
			return true;
		case "monthViewWeekNumberFontInfo":
			schedulerCore.monthViewWeekNumberFontInfo(value);
			return true;
		case "monthViewWeekNumberTextBrush":
			if (value == null) {
				schedulerCore.monthViewWeekNumberTextBrush(null);
			} else {
				var $tempBrush = $.ig.Brush.prototype.create(value);
				schedulerCore.monthViewWeekNumberTextBrush($tempBrush);
			}
			return true;
		case "monthViewWeekNumberVisibility":
			switch(value) {
				case "visible":
					schedulerCore.monthViewWeekNumberVisibility(0);
					break;
				case "collapsed":
					schedulerCore.monthViewWeekNumberVisibility(1);
					break;
			}
			return true;
		case "selectedAppointment":
			schedulerCore.selectedAppointment(value);
			return true;
		case "selectedDate":
			schedulerCore.selectedDate(value);
			return true;
		case "viewSplitOrientation":
			switch(value) {
				case "vertical":
					schedulerCore.viewSplitOrientation(0);
					break;
				case "horizontal":
					schedulerCore.viewSplitOrientation(1);
					break;
			}
			return true;
		case "viewMode":
			switch(value) {
				case "monthView":
					schedulerCore.viewMode(0);
					break;
				case "agendaView":
					schedulerCore.viewMode(1);
					break;
			}
			return true;
	}

        },

        _set_option: function (schedulerCore, key, value) {
            var self = this;
            var currentKey;

            switch (key) {
                case "width":
                    this._setSize(schedulerCore, "width", value);
                    return true;
                case "height":
                    this._setSize(schedulerCore, "height", value);
                    return true;
                default:
                    // if we have an auto-generated handler then let it handle it
                    if (this._set_generated_option(schedulerCore, key, value))
                        return true;

                    return false;
            }
        },

        _creationOptions: null,
        _schedulerCore: null,
        _menuPropertyChangeHandlers: null,

        _createWidget: function (options, element, widget) {
            this._creationOptions = options;

            $.Widget.prototype._createWidget.apply(this, [options, element]);
        },

        _create: function () {
            var key, v, size, schedulerCore, width, height,
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
            schedulerCore = this._createScheduler();
            this.options.selectedDate = schedulerCore.selectedDate();

            // we need to clone the date to prevent later modifications outside of the property setter
            if (+(this.options.selectedDate) != +null)
                this.options.selectedDate = $.ig.Date.prototype.fromTicks(this.options.selectedDate.getTime());

            self._schedulerCore = schedulerCore;
            self._schedulerPropertyChangeHandlers = {};
            self._schedulerPropertyChangeHandlers["SelectedDate"] = function (schedulerCore) {
                var selDate = schedulerCore.selectedDate();

                // we need to clone the date to prevent later modifications outside of the property setter
                if (+selDate == +null) {
                    this.options.selectedDate = selDate;
                } else {
                    this.options.selectedDate = $.ig.Date.prototype.fromTicks(selDate.getTime());
                }
            };
            self._schedulerPropertyChangeHandlers["SelectedAppointment"] = function (schedulerCore) { this.options.selectedAppointment = schedulerCore.selectedAppointment(); };

            // we hook the property changed so we can update options values
            schedulerCore.propertyChanged = $.ig.Delegate.prototype.combine(schedulerCore.propertyChanged, jQuery.proxy(this._onSchedulerPropChanged, this));

            			schedulerCore.appointmentDoubleClicked = $.ig.Delegate.prototype.combine(schedulerCore.appointmentDoubleClicked, $.proxy(this._fireSchedulerCore_appointmentDoubleClicked, this));
			schedulerCore.dayDoubleClicked = $.ig.Delegate.prototype.combine(schedulerCore.dayDoubleClicked, $.proxy(this._fireSchedulerCore_dayDoubleClicked, this));
			schedulerCore.layoutUpdated = $.ig.Delegate.prototype.combine(schedulerCore.layoutUpdated, $.proxy(this._fireSchedulerCore_layoutUpdated, this));
			schedulerCore.appointmentClicked = $.ig.Delegate.prototype.combine(schedulerCore.appointmentClicked, $.proxy(this._fireSchedulerCore_appointmentClicked, this));
			schedulerCore.appointmentSelected = $.ig.Delegate.prototype.combine(schedulerCore.appointmentSelected, $.proxy(this._fireSchedulerCore_appointmentSelected, this));
			schedulerCore.dayClicked = $.ig.Delegate.prototype.combine(schedulerCore.dayClicked, $.proxy(this._fireSchedulerCore_dayClicked, this));
			schedulerCore.dayOfWeekHeaderClicked = $.ig.Delegate.prototype.combine(schedulerCore.dayOfWeekHeaderClicked, $.proxy(this._fireSchedulerCore_dayOfWeekHeaderClicked, this));
			schedulerCore.monthHeaderClicked = $.ig.Delegate.prototype.combine(schedulerCore.monthHeaderClicked, $.proxy(this._fireSchedulerCore_monthHeaderClicked, this));
			schedulerCore.selectedDateChanged = $.ig.Delegate.prototype.combine(schedulerCore.selectedDateChanged, $.proxy(this._fireSchedulerCore_selectedDateChanged, this));
			schedulerCore.weekNumberClicked = $.ig.Delegate.prototype.combine(schedulerCore.weekNumberClicked, $.proxy(this._fireSchedulerCore_weekNumberClicked, this));


            if (o.hasOwnProperty("width"))
                elem[0].style.width = o["width"];
            if (o.hasOwnProperty("height"))
                elem[0].style.height = o["height"];


            schedulerCore.initializeCss(this.css);

            schedulerCore.provideContainer(elem[0]);
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
                    self._setSize(schedulerCore, size = key, v);
                }
            }
            //_setSize should be called at least once: support for initially invisible container of char
            if (!size) {
                self._setSize(schedulerCore, "width");
            }

            if (self.css && self.css.schedulerCore) {
                elem.addClass(self.css.schedulerCore);
            }

            schedulerCore.onInitialized();

        },
        _createScheduler: function () {
            return new $.ig.Scheduler();
        },

        _onSchedulerPropChanged: function(schedulerCore, evt) {
            var handler = this._schedulerPropertyChangeHandlers[evt._propertyName];

            if (handler)
                handler.call(this, schedulerCore);
        },

        _fireSchedulerCore_appointmentSelected: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.selectedAppointment = evt.selectedAppointment();
            opts.selectedInDate = evt.selectedInDate();
            opts.viewMode = evt.viewMode();

            this._trigger("appointmentSelected", null, opts);
        },

        _fireSchedulerCore_appointmentClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.appointment = evt.clickedAppointment();
            opts.clickedInDate = evt.clickedInDate();
            opts.viewMode = evt.viewMode();
            opts.allowSelection = evt.allowSelection();

            this._trigger("appointmentClicked", null, opts);

            evt.allowSelection(opts.allowSelection);
        },

        _fireSchedulerCore_appointmentDoubleClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.appointment = evt.appointment();
            opts.clickedInDate = evt.clickedInDate();
            opts.viewMode = evt.viewMode();

            this._trigger("appointmentDoubleClicked", null, opts);
        },

        _fireSchedulerCore_dayClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.clickedDate = evt.clickedDate();
            opts.viewMode = evt.viewMode();

            this._trigger("dayClicked", null, opts);
        },

        _fireSchedulerCore_dayDoubleClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.clickedDate = evt.clickedDate();
            opts.viewMode = evt.viewMode();

            this._trigger("dayDoubleClicked", null, opts);
        },

        _fireSchedulerCore_dayOfWeekHeaderClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.year = evt.year();
            opts.month = evt.month();
            opts.dayOfWeek = evt.dayOfWeek();

            this._trigger("dayOfWeekHeaderClicked", null, opts);
        },

        _fireSchedulerCore_layoutUpdated: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.viewMode = evt.viewMode();

            this._trigger("layoutUpdated", null, opts);
        },

        _fireSchedulerCore_monthHeaderClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.year = evt.year();
            opts.month = evt.month();

            this._trigger("monthHeaderClicked", null, opts);
        },

        _fireSchedulerCore_selectedDateChanged: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.selectedDate = evt.selectedDate();

            this._trigger("selectedDateChanged", null, opts);
        },

        _fireSchedulerCore_weekNumberClicked: function (schedulerCore, evt) {
            var opts = {};
            opts.owner = this;
            opts.year = evt.year();
            opts.month = evt.month();
            opts.weekNumber = evt.weekNumber();

            this._trigger("weekNumberClicked", null, opts);
        },

        // sets width and height options.
        // params:
        // scheduler -reference to scheduler  object
        // key-name of option/property (width or height only)
        // value-value of option
        _setSize: function (schedulerCore, key, val) {
            $.ig.util.setSize(this.element, key, val, schedulerCore, this._getNotifyResizeName());
        },

        _getNotifyResizeName: function () {
            return "containerResized";
        },

        ensureDayVisibleInMonthView: function (date, animate) {
            /* Ensures that the date is visible in the MonthView, and if not scrolls
		        the date into view.
            */
            if (this._schedulerCore) {
                return this._schedulerCore.ensureDayVisibleInMonthView(date, animate);
            }

            return false;
        },

        ensureDayVisibleInAgendaView: function (date, animate, scrollDayToTop) {
            /* Ensures that the date is visible in the AgendaView, and if not scrolls
		        the date into view.
            */
            if (this._schedulerCore) {
                return this._schedulerCore.ensureDayVisibleInAgendaView(date, animate, scrollDayToTop);
            }

            return false;
        },

        ensureMonthVisibleInMonthView: function (date, animate) {
            /* Ensures that the month containing the specified date is visible in the MonthView, and if not scrolls
		        the month into view.
            */
            if (this._schedulerCore) {
                return this._schedulerCore.ensureMonthVisibleInMonthView(date, animate);
            }

            return false;
        },


        flush: function () {
            /* Forces any pending deferred work to render on the schedulerCore before continuing */
            if (this._schedulerCore && this._schedulerCore.flush)
                this._schedulerCore.flush();
        },

        getElementAtPoint: function (x, y) {
            /* Returns the topmost hit-testable element for the specified coordinate.
                paramType="number" The x coordinate of the point.
                paramType="number" The y coordinate of the point.
			    returnType=element
            */
            if (this._schedulerCore) {
                var point = $.ig.APIFactory.prototype.createPoint(x, y);
                return this._schedulerCore.getElementAtPoint(point);
            }

            return null;
        },

        getElementForActivity: function (activity, viewMode, date) {
            /* Returns the element for the activity on specified day
                paramType="activityBase" The activity in question.
                paramType="viewMode" The schedulerViewMode enumeration value.
                paramType="date" The specified day.
			    returnType=element
            */
            if (this._schedulerCore) {
                return this._schedulerCore.getElementForActivity(activity, viewMode, date);
            }

            return null;
        },

        getElementForDay: function (date) {
            /* Returns the element for the specified day
                paramType="date" The specified day.
			    returnType=element
            */
            if (this._schedulerCore) {
                return this._schedulerCore.getElementForDay(date);
            }

            return null;
        },

        hitTest: function (x, y) {
            /* Returns the topmost object of a hit test for the specified coordinate.
                paramType="number" The x coordinate of the point.
                paramType="number" The y coordinate of the point.
			    returnType="ig.schedulerCore.SchedulerHitTestResult"
            */
            if (this._schedulerCore) {
                var point = $.ig.APIFactory.prototype.createPoint(x, y);
                return this._schedulerCore.hitTest(point);
            }

            return null;
        },

        destroy: function () {
            /* Destroys the widget. */
            var key, style,
				schedulerCore = this._schedulerCore,
				old = this._old_state,
				elem = this.element;
            if (!old) {
                return;
            }
            // remove children created by schedulerCore
            elem.find("*").not(old.elems).remove();
            // restore className modified by schedulerCore
            if (this.css.schedulerCore) {
                elem.removeClass(this.css.schedulerCore);
            }
            // restore css style attributes modified by schedulerCore
            old = old.style;
            style = elem[0].style;
            for (key in old) {
                if (old.hasOwnProperty(key)) {
                    if (style[key] !== old[key]) {
                        style[key] = old[key];
                    }
                }
            }
            if (schedulerCore) {
                this._setSize(schedulerCore);
            }
            $.Widget.prototype.destroy.apply(this, arguments);
            if (schedulerCore && schedulerCore.destroy) {
                schedulerCore.destroy();
            }
            delete this._schedulerCore;
            delete this._old_state;
        },

        styleUpdated: function () {
            /* Notify the schedulerCore that style information used for rendering the menu may have been updated. */
            if (this._schedulerCore) {
                this._schedulerCore.styleUpdated();
            }
        }
    });
    $.extend($.ui.igSchedulerCore, { version: '17.1.20171.1012' });
}(jQuery));
