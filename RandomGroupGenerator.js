let names = ["sam", "bob", "eric", "alice", "john", "michael", "susan", "lisa", "david", "jessica"]
let numberOfGroups = 4
let maxPersonPerGroup = Math.ceil(names.length / numberOfGroups)
let groups = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
    RandomGroupGenerator();
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
function RandomGroupGenerator() {
    // shuffle the names array
    for (let i = names.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }

    // create groups
    for (let i = 0; i < names.length; i += maxPersonPerGroup) {
        // slice the names array to create a group
        let group = names.slice(i, i + maxPersonPerGroup);
        groups.push(group);
    }
}

function draw() {    
    background(100);
    textSize(15);
    fill(255);
    textAlign(CENTER, CENTER);
    for (let i = 0; i < groups.length; i++) {
        text(groups[i].join(", "), windowWidth/2, windowHeight/2 + i * 40);
        // stop overlaying names over group names
        if (i < groups.length - 1) {
            text(groups[i + 1].join(", "), windowWidth/2, windowHeight/2 + (i + 1) * 40);
        }
    }

    // display group names as group 1, group 2, etc.
    for (let i = 0; i < groups.length; i++) {
        text("Group " + (i + 1) + ":", windowWidth/2 - 100, windowHeight/2 + i * 40 - 20);
    }
}