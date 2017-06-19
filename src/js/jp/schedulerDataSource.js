var today = new Date(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),
    appointments = [
		{
            "resourceId": 1,
            "id": 11,
            "start": new Date(currentYear, currentMonth, 2, 6, 45),
            "end": new Date(currentYear, currentMonth, 3, 6, 45),
            "subject": "Marketing conference"
        },
        {
            "resourceId": 6,
            "id": 5,
            "end": new Date(currentYear, currentMonth, 3, 12, 45),
            "start": new Date(currentYear, currentMonth, 3, 13, 45),
            "subject": "Dentist appointment"
        },
        {
            "resourceId": 11,
            "id": 10,
            "start": new Date(currentYear, currentMonth, 4, 8),
            "end": new Date(currentYear, currentMonth, 4, 8, 30),
            "subject": "Distributions sync",
            "description": "Sync with distributions team"
        },
        {
            "resourceId": 2,
            "id": 2,
            "start": new Date(currentYear, currentMonth, 8, 11),
            "end": new Date(currentYear, currentMonth, 8, 12),
            "subject": "Company meeting",
            "location": "Zero hub hall",
            "description": "A company meeting"
        },
        {
            "resourceId": 8,
            "id": 7,
            "start": new Date(currentYear, currentMonth, 9, 11, 45),
            "end": new Date(currentYear, currentMonth, 9, 14, 45),
            "subject": "UX training",
            "location": "Training hall Dragon",
            "description": "Monthly user expirience training"
        },
        {
            "resourceId": 5,
            "id": 4,
            "start": new Date(currentYear, currentMonth, 10, 5, 45),
            "end": new Date(currentYear, currentMonth, 10, 6, 15),
            "subject": "Certification exam",
            "location": "Exam room 1"
        },
        {
            "resourceId": 7,
            "id": 6,
            "start": new Date(currentYear, currentMonth, 14, 7, 45),
            "end": new Date(currentYear, currentMonth, 16, 7, 45),
            "subject": "Web Talks Conference",
            "location": "Conference hall Universe",
            "description": "A conference about modern web technologies and trends"
        },
        {
            "resourceId": 3,
            "id": 32,
            "start": new Date(currentYear, currentMonth, 24, 12, 45),
            "end": new Date(currentYear, currentMonth, 24, 14, 45),
            "subject": "Team Building",
            "location": "Hawaii plaza hotel",
            "description": "Have a teambuilding with colleges"
        }, {
            "resourceId": 4,
            "id": 3,
            "start": new Date(currentYear, currentMonth, 30, 11),
            "end": new Date(currentYear, currentMonth, 30, 12),
            "subject": "Buisness lunch",
            "location": "The Lavender Road",
            "description": "Discuss the new rental system with partner"
        },
        {
            "resourceId": 10,
            "id": 9,
            "start": new Date(currentYear, currentMonth, 19, 9, 45),
            "end": new Date(currentYear, currentMonth, 19, 9, 55),
            "subject": "Morning Yoga class",
            "location": "Training room life"
        },
        {
            "resourceId": 9,
            "id": 8,
            "start": new Date(currentYear, currentMonth, 25, 13, 15),
            "end": new Date(currentYear, currentMonth, 25, 16, 15),
            "subject": "Release review",
            "location": "Conference room Unity",
            "description": "Release review sync"
        }, {
            "id": 11,
            "start": new Date(currentYear, currentMonth, 26, 10, 45),
            "end": new Date(currentYear, currentMonth, 26, 12, 45),
            "subject": "Interview",
            "location": "Guest room 1",
            "description": "Interview the candidate for Principal Program Agent"
        }
    ],
    resources = [
        {
            id: 1,
            displayName: "Trina Friesen"
        },
        {
            id: 2,
            displayName: "Mack Koch"
        },
        {
            id: 3,
            displayName: "Burney O'Kon"
        },
        {
            id: 4,
            displayName: "Dawson Rohan"
        },
        {
            id: 5,
            displayName: "Cain Schmidt"
        },
        {
            id: 6,
            displayName: "Jesenia Rogahn"
        },
        {
            id: 7,
            displayName: "Tod Heller"
        },
        {
            id: 8,
            displayName: "Rhonda Cormier"
        },
        {
            id: 9,
            displayName: "Hayden Lockman"
        },
        {
            id: 10,
            displayName: "Tierra Witting"
        },
        {
            id: 11,
            displayName: "Roderic Considine"
        }
    ];

 var scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource(),
	appointmentsDS = new $.ig.DataSource({
		primaryKey: "id",
		dataSource: appointments
	});

appointmentsDS.dataBind();

scheduleListDataSource.resourceItemsSource(resources);
scheduleListDataSource.appointmentItemsSource(appointmentsDS);