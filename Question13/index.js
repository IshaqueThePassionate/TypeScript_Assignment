"use strict";
var guestList = ["Muhammad Hashim", "Maaaz ch", "Afaq ahmed"];
const Guestcancled = "Muhammad Hashim";
const newGuest = "Galib Javed";
console.log(`Unfortunately, ${Guestcancled} cannot make it to the dinner.`);
var cancelIndex = guestList.indexOf(Guestcancled);
if (cancelIndex !== -1) {
    // Replace the guest who can't make it with the new guest
    guestList.splice(cancelIndex, 1, newGuest);
    for (const guest of guestList) {
        console.log(` Dear${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
    }
}
else {
    console.log("The guest who can't make it was not found in the guest list.");
}
