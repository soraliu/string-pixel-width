import { pixelWidth } from '../index'

test('test basic', () => {
  expect(pixelWidth('test string')).toBe(435)
})

test('test basic with settings', () => {
  expect(pixelWidth('test string', { size: 10 })).toBe(43.5)
})

test('test basic with bold', () => {
  expect(pixelWidth('test string', { font: 'open sans', bold: true })).toBe(424)
})

test('test basic with italic', () => {
  expect(pixelWidth('test string', { font: 'open sans', italic: true })).toBe(398)
})

test('test basic with bold italic', () => {
  expect(pixelWidth('test string', { font: 'open sans', bold: true, italic: true })).toBe(404)
})

test('test basic with different font', () => {
  expect(pixelWidth('test string', { font: 'impact' })).toBe(420)
  expect(pixelWidth('test string', { font: 'impact', size: 10 })).toBe(42)
  expect(pixelWidth('test string', { font: 'tahoma', size: 10 })).toBe(44.300000000000004)
})

test('test diacritic', () => {
  const lengthWithDiacritics = pixelWidth('test ěščřžýáíé')
  const lengthWithoutDiacritics = pixelWidth('test escrzyaie')
  expect(lengthWithDiacritics).toBe(lengthWithoutDiacritics)
})

test('test non-printable chars', () => {
  // LF, NULL byte, ESC
  const string = `${String.fromCharCode(10)}${String.fromCharCode(0)}${String.fromCharCode(27)}`
  expect(pixelWidth(string)).toBe(0)
})

test('test non-existing font', () => {
  expect(() => {
    // @ts-ignore
    pixelWidth('foo', { font: 'bar' })
  }).toThrow()
})

test('test printable, but unregistered character', () => {
  expect(pixelWidth('‐')).toBe(50)
})
