import { describe, test, expect } from 'vitest';
import { getData } from "node-edge-library";

describe('run', () => {
  test('should return edge true and node false', () => {
    // You can also try running `VITEST_CONDITIONS=node vitest run` command to see this test fail
    const { isNode, isEdge } = getData();
    expect(isNode).toBe(false);
    expect(isEdge).toBe(true);
  })
})
