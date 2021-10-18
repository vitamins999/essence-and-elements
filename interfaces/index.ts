export interface Service {
  name: string;
  text: string;
  imagePath: string;
  category: string;
  subcategory: string;
}

export interface Reader {
  name: string;
  shortDetails: string;
  longDetails: string;
  imagePath: string;
  reiki: boolean;
  tarot: boolean;
  crystalHealing: boolean;
}

export interface Product {
  name: string;
  text: string;
  imagePath: string;
  category: string;
  subcategory: string;
}

export interface Item {
  itemName: string;
  itemDescription: string;
  itemBullets: string[];
  itemPrice: number;
  itemImagePath: string;
  itemLinkPath: string;
  category: string;
  externalURL: string;
}
