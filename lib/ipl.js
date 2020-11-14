/**
 *
 * @namespace faker.vehicle
 */
var ipl = function(faker) {
    var self = this;
    var fake = faker.fake;
    /**
     * manufacturer
     *
     * @method faker.ipl.team
     */
    self.team = function() {
        return faker.random.arrayElement(faker.definitions.ipl.team);
    };

    self.team.schema = {
        "description": "Generates a manufacturer name.",
        "sampleResults": ["Ford", "Jeep", "Tesla"]
    };


    /**
     * model
     *
     * @method faker.vehicle.model
     */
    self.captain = function() {
        return faker.random.arrayElement(faker.definitions.ipl.captain);
    };

    self.captain.schema = {
        "description": "Generates a vehicle model.",
        "sampleResults": ["Explorer", "Camry", "Ranchero"]
    };

    /**
     * type
     *
     * @method faker.vehicle.type
     */
    self.year = function() {
        return faker.random.arrayElement(faker.definitions.ipl.year);
    };

    self.year.schema = {
        "description": "Generates a vehicle type.",
        "sampleResults": ["Coupe", "Convertable", "Sedan", "SUV"]
    };

};

module["exports"] = ipl;