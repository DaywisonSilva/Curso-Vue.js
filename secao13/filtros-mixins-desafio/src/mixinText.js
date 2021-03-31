export default {
    computed: {
		textReplace: function() {
			return this.text.replaceAll(' ', ',');
		},
		textSize: function() {
			return this.text.split(' ').map(el => `${el} (${el.length}) `).join('');
		}
	}
}