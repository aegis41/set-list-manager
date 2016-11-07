import Ember from "ember";

export default Ember.Controller.extend({
	bandName: "",
	firstName: "",
	lastName: "",

	actions: {
		createBand() {
			let bandName = this.get("bandName"),
				firstName = this.get("firstName"),
				lastName = this.get("lastName");

			if(!bandName.trim()) {
				return;
			}

			let user = this.store.createRecord("band", {
				bandName: bandName,
				firstName: firstName,
				lastName: lastName
			});

			this.set("bandName", "");
			this.set("firstName", "");
			this.set("lastName", "");

			user.save().then(() => {
				this.transitionToRoute("bands");
			});
		}
	}
});