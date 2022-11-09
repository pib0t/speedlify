module.exports = {
	name: "Strato", // optional, falls back to object key
	description: "The Strato sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.strato.de/",
		"https://www.strato.nl/",
		"https://www.strato.es/",
		"https://www.strato.se/"
	]
};
