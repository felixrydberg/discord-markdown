import { expect, test } from 'vitest';
import { render } from '../src/index';

test('Unordered Lists are handled correctly', () => {
  expect(render(`* Item 1`))
    .toBe(`<ul class="d-list d-unordered-lists d-list-parent"><li class="d-list-item">Item 1</li></ul>`);
  expect(render(
    '* Item 1\n' +
    '  * Item 2\n' + 
    '  * Item 2.1\n'
  ))
    .toBe(`<ul class="d-list d-unordered-lists d-list-parent"><li class="d-list-item">Item 1<ul class="d-list d-unordered-lists"><li class="d-list-item">Item 2</li><li class="d-list-item">Item 2.1</li></ul></li></ul>`);
});

test('Ordered Lists are handled correctly', () => {
  expect(render('1. Item 1'))
    .toBe('<ol class="d-list d-ordered-lists d-list-parent"><li class="d-list-item">Item 1</li></ol>');
  expect(render(
    '1. Item 1\n' +
    '2. Item 2\n' +
    '  3. Sub-item 2.1\n' +
    '  4. Sub-item 2.2\n' +
    '5. Item 3\n'
  ))
    .toBe('<ol class="d-list d-ordered-lists d-list-parent"><li class="d-list-item">Item 1</li><li class="d-list-item">Item 2<ol class="d-list d-ordered-lists"><li class="d-list-item">Sub-item 2.1</li><li class="d-list-item">Sub-item 2.2</li></ol></li><li class="d-list-item">Item 3</li></ol>');
});
