export interface Grocery {
  id: string;
  description: string;
  familyMemberId: string;
  importance: number;
  createdOn: number;
  checkedOffOn?: number;
}
