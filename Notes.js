import Vue from 'vue'
import Notes from './Notes.vue'
//require('./styles.css');

new Vue({
	el: '#app',
	data: {},
	render: function(render) {
		return render(Notes);
	},
});