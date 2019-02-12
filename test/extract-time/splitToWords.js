// @flow

import test from 'ava';
import splitToWords from '../../src/splitToWords';

test('splits input to words', (t) => {
  t.deepEqual(splitToWords('foo bar baz'), [
    'foo',
    'bar',
    'baz'
  ]);
});

test('interprets commas as word separators', (t) => {
  t.deepEqual(splitToWords('foo,bar,baz'), [
    'foo',
    'bar',
    'baz'
  ]);
});

test('interprets dots at the end of a word as word separators', (t) => {
  t.deepEqual(splitToWords('foo. bar. baz'), [
    'foo',
    'bar',
    'baz'
  ]);
});

test('interprets ; at the end of a word as word separators', (t) => {
  t.deepEqual(splitToWords('foo; bar; baz'), [
    'foo',
    'bar',
    'baz'
  ]);
});

test('interprets : at the end of a word as word separators', (t) => {
  t.deepEqual(splitToWords('foo: bar: baz'), [
    'foo',
    'bar',
    'baz'
  ]);
});

test('does not split characters connected using dots (.)', (t) => {
  t.deepEqual(splitToWords('foo.bar.baz'), [
    'foo.bar.baz'
  ]);
});

test('does not split characters connected using dashes (-)', (t) => {
  t.deepEqual(splitToWords('foo-bar-baz'), [
    'foo-bar-baz'
  ]);
});

test('splits numbers separated by T', (t) => {
  t.deepEqual(splitToWords('123T456'), [
    '123',
    '456'
  ]);
});

test('splits numbers separated by +', (t) => {
  t.deepEqual(splitToWords('123+456'), [
    '123',
    '456'
  ]);
});
