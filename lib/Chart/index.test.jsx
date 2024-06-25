import { describe, it, expect } from 'vitest'
import { buildTicks } from './index'

describe('buildTicks', () => {
  it('should return false when minYAxisValue is auto', () => {
    const result = buildTicks('auto', 10, 5);
    expect(result).toBe(false);
  });

  it('should return false when maxYAxisValue is auto', () => {
    const result = buildTicks(-10, 'auto', 5);
    expect(result).toBe(false);
  });

  it('should return false when minYAxisValue is non-negative', () => {
    const result = buildTicks(0, 10, 5);
    expect(result).toBe(false);
  });

  it('should return tick values when conditions are met', () => {
    const ticks = buildTicks(-10, 10, 5);
    expect(ticks).toEqual([-10, -5, 0, 5, 10]); // Assuming getNiceTickValues returns these values
  });
});

