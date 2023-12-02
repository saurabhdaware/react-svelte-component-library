import { describe, test, expect } from 'vitest';
import { getData } from '.';

describe('getData.edge', () => {
  test('should return node false and edge true', () => {
    const { isNode, isEdge } = getData();
    expect(isNode).toBe(false);
    expect(isEdge).toBe(true);
  })
})