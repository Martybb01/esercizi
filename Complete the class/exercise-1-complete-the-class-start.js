/**
 * START: Follow the instructions below.
 */
class Currency {
    // Add types to the constructor parameters.
    constructor(name, code, symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.
    }
    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.
    describe() {
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;
        return description;
    }
}
// ----
const currencyNaira = new Currency("Naira", "NGN", "₦");
console.log(currencyNaira.describe());
// Call the `describe()` method on the `currencyNaira` object.
// ----
const currencyUsDollar = new Currency("United States dollar", "USD", "$");
console.log(currencyUsDollar.describe());
export {};
