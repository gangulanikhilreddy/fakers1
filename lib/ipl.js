/**
 *
 * @namespace faker.ipl
 */
var ipl = function(faker) {
    var self = this;
    var fake = faker.fake;
    /**
     * team
     *
     * @method faker.ipl.team
     */
    self.team = function() {
        return faker.random.arrayElement(faker.definitions.ipl.team);
    };

    self.team.schema = {
        "description": "Generates a team.",
        "sampleResults": ["SRH", "JP", "Te"]
    };


    /**
     * capatin
     *
     * @method faker.ipl.captain
     */
    self.captain = function() {
        return faker.random.arrayElement(faker.definitions.ipl.captain);
    };

    self.captain.schema = {
        "description": "Generates a captain.",
        "sampleResults": ["NIK", "VARA", "PRD"]
    };

    /**
     * year
     *
     * @method faker.ipl.year
     */
    self.year = function() {
        return faker.random.arrayElement(faker.definitions.ipl.year);
    };

    self.year.schema = {
        "description": "Generates a year.",
        "sampleResults": ["2008", "2012", "2014", "2016"]
    };
    /** 
     * venue
     *
     * @method faker.ipl.stadium
     */
    self.stadium = function() {
        return faker.random.arrayElement(faker.definitions.ipl.stadium);
    };

    self.stadium.schema = {
        "description": "Generates a stadium.",
        "sampleResults": ["SR", "MI", "SL"]
    };

};

module["exports"] = ipl;