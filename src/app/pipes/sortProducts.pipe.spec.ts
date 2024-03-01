import { SortProductsPipe } from './sortProducts.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
