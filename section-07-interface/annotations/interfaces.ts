interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }, // ปกติเป็น summary: function() { .. }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const reportSummary = (item: Reportable): void => {
  console.log(item.summary());
};

reportSummary(oldCivic);
reportSummary(drink);
