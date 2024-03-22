var pName = "Muhammad hashim";
console.log(pName.toLocaleLowerCase());
console.log(pName.toLocaleUpperCase());
//For titlt Case we need custom function
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }    
console.log(toTitleCase(pName));