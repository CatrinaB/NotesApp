import Vue from 'vue'
import Notes from './Notes.vue'
//require('./styles.css');

new Vue({
	el: '#notes',
	data: {},
	render: function(render) {
		return render(Notes);
	},
});