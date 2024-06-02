export type Comment = {
  id?: string;
  comment?: string | null | undefined;
  attribution?: string | null | undefined;
  createdAt: unknown;
};


export type HotelPlace = {
  description:  string;
  destinations: Destination[];
  id:           string;
  photos:       Photo[];
  name:         string;
  rooms:        number;
}

export type Destination = {
  name:     string;
  hotels:   Hotel[];
  location: Location;
  id:       string;
}

export type Hotel = {
  name: string;
}

export type Location = {
  distance:  number;
  latitude:  number;
  longitude: number;
}

export type Photo = {
  fileName: string;
  url:      string;
}