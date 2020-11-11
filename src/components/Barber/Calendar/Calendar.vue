<template>
    <div class="agenda">
        <h2>Agenda</h2>
       <FullCalendar :events="events" />

    </div>
</template>

<script>
import FullCalendar from 'primevue/fullcalendar';

export default {
    components: { FullCalendar },
    data() {
		return {
			events: [
				{
					"id": 1,
					"title": "All Day Event",
					"start": "2019-01-01"
				},
				{
					"id": 2,
					"title": "Long Event",
					"start": "2019-01-07",
					"end": "2019-01-10"
				},
				{
					"id": 3,
					"title": "Repeating Event",
					"start": "2019-01-09T16:00:00"
				},
				{
					"id": 4,
					"title": "Repeating Event",
					"start": "2019-01-16T16:00:00"
				},
				{
					"id": 5,
					"title": "Conference",
					"start": "2019-01-11",
					"end": "2019-01-13"
				},
				{
					"id": 6,
					"title": "Meeting",
					"start": "2019-01-12T10:30:00",
					"end": "2019-01-12T12:30:00"
				}
			]
		};
	}
}
</script>