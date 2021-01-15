class origin {
    constructor (state, rent, gas, electric) {
        this.state = state;
        this.rent = rent;
        this.gas = gas;
        this.electric = electric;
    }
}

class destination {
    constructor (state, rent, gas, electric) {
        this.state = state;
        this.rent = rent;
        this.gas = gas;
        this.electric = electric;
    }
}

elecstate = ['NE', '126.65', 'CT', '150.71', 'ME', '100.53', 'MA', '125.89', 'NH', '120.04', 'RI', '121.62', 'VT', '97.18', 'NJ', '105.07', 'NY', '103.60', 'PA', '115.47', 'IL', '92.37', 'IN', '120.74', 'MI', '100.23', 'OH', '108.15', 'WI', '95.52', 'IA', '108.04', 'KS', '113.26', 'MN', '99.02', 'MO', '117.82', 'NA', '108.08', 'ND', '114.27', 'SD', '120.60', 'DE', '119.16', 'DC', '97.62', 'FL', '129.65', 'GA', '131.84', 'MD', '127.92', 'NC', '123.25', 'SC', '144.73', 'VA', '135.46', 'WV', '121.90', 'AL', '150.45', 'KY', '120.08', 'MS', '135.87', 'TN', '132.33', 'AR', '109.46', 'LA', '120.70', 'OK', '113.93', 'TX', '134.07', 'AZ', '126.09', 'CO', ' 83.07', 'ID', ' 93.83', 'MT', ' 95.43', 'NV', '106.83', 'NM', ' 80.04', 'UT', ' 75.63', 'WY', ' 96.53', 'CA', '101.92', 'OR', '100.35', 'WA', ' 94.49', 'AK', '127.29', 'HI', '168.21'];

origin.state = prompt("What is your current state abbreviation?");
destination.state = prompt("What is your destination state abbreviation?");
origin.electric = prompt("What is your current electric bill?");

state1 = elecstate.findIndex(abbr => abbr === origin.state) + 1;
elec1 = elecstate[state1];

state2 = elecstate.findIndex(abbr => abbr === destination.state) + 1;
elec2 = elecstate[state2];

destination.electric = origin.electric * elec2 / elec1;

console.log("Your new electric bill will be approximately $" + destination.electric.toFixed(2) + ".");
