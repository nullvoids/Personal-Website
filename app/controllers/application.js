import Ember from 'ember';

export default Ember.Controller.extend({
	contactForm: false,
	contactEmail: '',
	contactMessage: '',
	isValidEmail: Ember.computed.match( 'contactEmail', /^.+@.+\..+$/ ),
	isValidMessage: Ember.computed.gte('contactMessage.length', 10),
	isInvalidEmail: Ember.computed.not('isValidEmail'),
	isInvalidMessage: Ember.computed.not('isValidMessage'),
	isDisabledSubmit: Ember.computed.or( 'isInvalidEmail', 'isInvalidMessage'),
	actions: {
		toggleContactForm() {
			const currFormStatus = this.get('contactForm');
			this.set('contactForm', !currFormStatus);
		},
		sendContactMessage() {
			const email = this.get('contactEmail');
			const message = this.get('contactMessage');
			const newMessage = this.store.createRecord( 'message', { fromEmail: email, message: message } );
			newMessage.save().then( success, failure );
			this.set('contactEmail', '');
			this.set('contactMessage', '');
		}
	}
});

var success = function(){
	alert('Your message has been sent!');
}
var failure = function(){
	alert('There was an error sending your message');
}