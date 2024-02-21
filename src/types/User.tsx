interface Name {
  id: number;
  first: string;
  last: string;
}

interface Location {
  id: number;
  streetNumber: number;
  streetName: string;
  city: string;
  state: string;
  country: string;
  postcode: number;
}

export interface User {
  userId: number;
  gender: string;
  nationality: string;
  email: string;
  password: string;
  image: string;
  phone: string;
  cell: string;
  birth: string;
  name: Name;
  location: Location;
}
