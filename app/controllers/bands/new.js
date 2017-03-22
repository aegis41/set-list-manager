import Ember from "ember";

export default Ember.Controller.extend({
	bandName: "",

	actions: {
		createBand() {
			let bandName = this.get("bandName");
      let members = [
        {
          firstName: "Chuck",
          lastName: "Berry",
          joined: "",
          instruments: "Guitar",
          band: bandName
        },
        {
          firstName: "Eddie",
          lastName: "Vedder",
          joined: "",
          instruments: "Guitar",
          band: bandName
        }
      ];

			if(!bandName.trim()) {
				return;
			}

			let band = this.store.createRecord("band", {
				bandName: bandName,
        members: members
			});

			band.save().then((data) => {
				this.transitionToRoute("/band/" + data.get("id"));
				this.set("bandName", "");
			});
		}
	}
});
