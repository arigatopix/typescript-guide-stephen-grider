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

const reportSummary = (item: Reportable): void => {
  console.log(item.summary());
};

reportSummary(oldCivic);
