import { describe, test, expect } from 'vitest';
import { getData } from '.';

describe('getData.node', () => {
  test('should return node true and edge false', () => {
    const { isNode, isEdge } = getData();
    expect(isNode).toBe(true);
    expect(isEdge).toBe(false);
  })
})