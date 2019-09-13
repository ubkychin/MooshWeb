import { Food } from './food';

export class User {
  id: string;
  age: number;
  postCode: string;
}

export class UserFoods {
  userId: string;
  food: Food[];
}
