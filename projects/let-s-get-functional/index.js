// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-zacharybanta');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(e) {
        return e.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(previous,current) {
        if (current.gender === 'female') {
            return previous + 1;
        } else {
            return previous;
        }
    }, 0);
};

var oldestCustomer = function(array) {
    let name;
    let current = -Infinity;
    _.each(array, function(e,i,a) {
       if (e.age > current) {
           name = e.name;
           current = e.age;
       } 
    });
    return name;
};

var youngestCustomer = function(array) {
    let name;
    let current = Infinity;
    _.each(array, function(e,i,a) {
       if (e.age < current) {
           name = e.name;
           current = e.age;
       } 
    });
    return name;
};

var averageBalance = function(array) {
    return _.reduce(array, function(previous,current,index) {
        return previous + parseFloat(current.balance.replace(/[^0-9.]+/g,""));
    }, 0) / array.length;
};

var firstLetterCount = function(array, char) {
    return _.filter(array, function(e) {
        return e.name[0].toLowerCase() === char.toLowerCase();
    }).length;
};

var friendFirstLetterCount = function(array, customer, char) {
    let targetFriends;
    _.each(array, function(e,i,a) {
        if (e.name === customer) {
            targetFriends = e.friends;
        }
    });
    return _.filter(targetFriends, function(e) {
        return e.name[0].toLowerCase() === char.toLowerCase();
    }).length;
};

var friendsCount = function(array, name) {
    let names = [];
    _.each(array, function(e,i,a) {
        _.each(e.friends, function(e2,i2,a2) {
            if (e2.name === name) {
                names.push(e.name);
            }
        });
    });
    return names;
};

var topThreeTags = function(array) {
    // let allTags = [];
    let tagCount = {};
    let allTags = [];
    let topTags = [];
    _.each(array, function(e,i,a) {
        _.each(e['tags'], function(e,i,a) {
            tagCount[e] = {
              tag: e,
              count: tagCount[e] ? tagCount[e].count + 1 : 1
            };
        });
    });
    
    _.each(tagCount, function (e,i,a) {
        allTags.push(e);
    });
    
    allTags = allTags.sort(function(a,b) {
        return b.count - a.count;
    });
    
    allTags = allTags.slice(0, 3);
    
    _.each(allTags, function(e,i,a) {
        topTags.push(e.tag);
    });
    
    return topTags;
};

var genderCount = function(array) {
    let result = {male: 0, female: 0, transgender: 0};
    _.reduce(array, function(previous, current, index) {
        if (current.gender === 'male') {
            result.male += 1;
        } else if (current.gender === 'female') {
            result.female += 1;
        } else {
            result.transgender += 1;
        }
    }, 0);
    return result;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
