function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family=[];
  }
  let alexa = new Person("Alexa", "Dickenson", "pink", 14, ['pasta', 'pizza', 'tacos']);
  let sher = new Person("Sher", "Yang", "Green", 17, ["Burger", "Fries", "Oreos"]);

  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  Person.prototype.toString = function() {
    return this.fullName()+" " + "Favorite color: " + this.favoriteColor + " Favorite number: " + this.favoriteNumber;}

  Person.prototype.addToFamily =function (thisIsAPerson) {
    if (thisIsAPerson instanceof Person) {
        this.family.push(thisIsAPerson);
        return this.family.length;
      } 
    }
    console.log (alexa.toString());
    console.log (alexa.family);
    console.log (alexa.addToFamily(sher));
    console.log (sher.favoriteFoods)
    console.log (sher.favoriteColor)
    console.log (alexa.family)