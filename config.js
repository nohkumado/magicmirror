/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.67.0/24"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
	     {
	     	module: "MMM-VoiceAssistant",
	     	position: "lower_third",
	     	config: {
	     		maxWidth: "100%",
	     		header: "Voice Assistant",
	     		updateDelay:500
	     	}
	     },
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displayType:"both",
				analogFace:"face-012",
				analogPlacement:"right",
			}
		},
		{
			module: "calendar",
			header: "Vacances francaises",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "vacances",
						 url: "https://www.data.gouv.fr/fr/datasets/le-calendrier-scolaire/"
					},
					{
						symbol: "jours feries",
						url: "https://etalab.github.io/jours-feries-france-data/ics/jours_feries_metropole.ics"
					}
						//url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/FR_Holidays.ics"
				]
			}
		},
		{
			module: "compliments",
			position: "middle_center",
			//remoteFile: 'compliments_bb.json'
			config:
			{
				compliments:{
					"anytime" : [
						"Quoi de neuf?",
						"Yoh!",
						"Ca fait plaisir de te voir!",
						"Re!",
						"Ca faisait longtemps!"
					],
					"morning" : [
						"Bonjour!",
						"Déjà  pris ton café?",
						"A fond la forme!"
					],
					"afternoon" : [
						"A ton rythme!",
						"nous faisons la difference!",
						"Bientot  le soir!"
					],
					"evening" : [
						"Tu as fait quelques sourires aujourd'hui",
						"Un apéritif bien mérité .",
						"Merci pour tes efforts!"
					],
					"day_sunny": [
						"soleil aujourd'hui!",
						"c'est un beau jour"
					],
					"snow": [
						"Il neige!"
					],
					"rain": [
						"N'oubliez pas le parapluie"
					]
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Schwindratzheim",
				locationID: "2975419",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "6530602607bfdf272c78690ec36f387e"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Schwindratzheim",
				locationID: "2975419",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "6530602607bfdf272c78690ec36f387e"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Heise News",
						url: "http://www.heise.de/rss/heise-atom.xml"
					},
					{
						title: "DNA",
						url: "http://dna.fr/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "mmpm"
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
