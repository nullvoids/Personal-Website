import Ember from 'ember';

export default Ember.Controller.extend({
	contactForm: false,
	actions: {
		toggleContactForm() {
			let currFormStatus = this.get('contactForm')
			this.set('contactForm', !currFormStatus);
		}
	}
});
