import { act, renderHook } from '@testing-library/react-hooks';
import useTitle from '../index';
import { describe, it, expect } from 'vitest';

describe(
  'useTitle',
  () => {
    it(
      'should be defined',
      () => {
        expect(useTitle).toBeDefined();
      },
    );

    it(
      'should update document title',
      () => {
        const hook = renderHook(
          (props) => useTitle(props),
          { initialProps: 'test' },
        );

        expect(document.title).toBe('test');
        act(() => {
          hook.rerender('test2');
        });
        expect(document.title).toBe('test2');
      },
    );
  },
);
