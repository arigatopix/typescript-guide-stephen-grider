const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const prinVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken?: ${vehicle.broken}`);
};
