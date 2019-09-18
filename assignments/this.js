/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -- when in global scope, "this" will refer to the entire Javascipt language and global object
* 2. Implicit Binding -- This is the 'whatever is left of the dot' rule. 
* 3. New Binding -- This is OOP. A new object gets created.
* 4. Explicit Binding -- Explicitly using .apply , .call , or .bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); //this spits out THE global object a.k.a. the entire javascript scripting language

// Principle 2

// code example for Implicit Binding

let Man = {
    name: "Paul",
    sayHello: function(){
        return `How is it going, ${this.name}?`;
    }
}

console.log(Man.sayHello());

// Principle 3

// code example for New Binding

function SchoolSupplies (utensil){
    this.attribute = utensil;
}

const StuffOne = new SchoolSupplies({
    utensil: "pen",
})
console.log(StuffOne.attribute);
// Principle 4

// code example for Explicit Binding

function sayHello(){
    return `How is it going, ${this.anothername}?`;
}
let Woman = {
    anothername: "Paula",
}

console.log(sayHello.call(Woman));