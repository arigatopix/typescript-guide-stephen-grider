import faker from 'faker';

export class Company {
  companyName: string;
  catchPharase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>${this.companyName}</h1>
        <p>${this.catchPharase}</p>
      </div>
    `;
  }
}
