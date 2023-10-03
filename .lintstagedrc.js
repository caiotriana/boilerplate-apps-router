module.exports = {
	'*.{js,jsx,ts,tsx}': (filename) => [
		`prettier --write ${filename.join(' ')}`,
		`npm run lint --fix . ${filename.join(' --file')}`
	]
}
