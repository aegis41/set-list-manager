import DS from "ember-data";

export default DS.Model.extend({
	firstName: DS.attr("string"),
	lastName: DS.attr("string"),
	joined: DS.attr("date"),
	instruments: DS.attr("string"),
	bands: DS.hasMany("band")
});