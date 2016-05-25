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
	sentMessage: false,
	actions: {
		removeSentMessage() { 
			this.set('sentMessage', false); 
			alert('hello');
		},
		toggleContactForm() {
			const currFormStatus = this.get('contactForm');
			this.set('sentMessage', false)
			this.set('contactForm', !currFormStatus);
		},
		sendContactMessage() {
			const email = this.get('contactEmail');
			const message = this.get('contactMessage');
			const newMessage = this.store.createRecord( 'message', { fromEmail: email, message: message } );
			newMessage.save().then( this.set('sentMessage', true), failure );
			this.set('contactEmail', '');
			this.set('contactMessage', '');
			this.set('contactForm', false);
			Ember.run.later(this, function(){ this.set('sentMessage', false) }, 5000);
		}
	}
});

var failure = function(){
	alert('There was an error sending your message');
}