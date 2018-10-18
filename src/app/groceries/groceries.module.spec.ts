import { GroceriesModule } from './groceries.module';

describe('GroceriesModule', () => {
  let groceriesModule: GroceriesModule;

  beforeEach(() => {
    groceriesModule = new GroceriesModule();
  });

  it('should create an instance', () => {
    expect(groceriesModule).toBeTruthy();
  });
});
