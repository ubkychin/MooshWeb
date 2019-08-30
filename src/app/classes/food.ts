export class Food {
  id: number;
  name: string;
  sugarContent: number;
  categoryName: string;
  locationName: string;
  timesSelected: number;
}

export class SelectedFood {
  sessionId: string;
  foodId: number;
  quantity: number;
}

export class FoodUsage {
  id: number;
  name: string;
  selectedQuantity: number;
  cookedQuantity: number;
}
