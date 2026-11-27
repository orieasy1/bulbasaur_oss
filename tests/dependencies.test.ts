import { describe, expect, it } from 'vitest';
import { Midi } from '@tonejs/midi';

describe('Project dependencies', () => {
  it('initializes the MIDI library', () => {
    const midi = new Midi();

    expect(midi.tracks).toHaveLength(0);
  });
});