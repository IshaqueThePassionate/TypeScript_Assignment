import { log } from "console"

var nameWithwhitespace : string = " \t Ishaque sahib\n "
var strippedname : string = nameWithwhitespace.trim()
console.log(`Name with white space "${nameWithwhitespace}"`);
console.log(`stripped name "${strippedname}"`);

