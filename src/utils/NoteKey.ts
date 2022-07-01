const US_KEYS = ["C", "D", "E", "F", "G", "A", "B"];
const SOLFEGE_KEYS = ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"];

export enum AccidentalType {
  None,
  Sharp,
  Flat,
}

export class NoteKey {
  note: string;
  accidental: AccidentalType;
  octave: number;

  constructor(note: string, accidental: AccidentalType, octave: number) {
    this.note = note;
    this.accidental = accidental;
    this.octave = octave;
  }

  static fromUsStr(str: string): NoteKey {
    // First character is the note
    const chars = str.split("");
    const note = chars.splice(0, 1)[0].toUpperCase();
    const accidentalType = (() => {
      if (chars[0] == "#") {
        return AccidentalType.Sharp;
      } else if (chars[0] == "b") {
        return AccidentalType.Flat;
      } else {
        return AccidentalType.None;
      }
    })();

    if (accidentalType != AccidentalType.None) {
      chars.splice(0, 1);
    }

    const octave = parseInt(chars.join(""));
    return new NoteKey(note, accidentalType, octave);
  }

  isUsKey(): boolean {
    return US_KEYS.includes(this.note);
  }

  isSolfegeKey(): boolean {
    return !this.isUsKey();
  }

  usNoteToSolfege(): string {
    const index = US_KEYS.indexOf(this.note);
    if (index == -1) {
      throw new Error(`Not a US key: ${this.note}`);
    }

    return SOLFEGE_KEYS[index];
  }

  solfegeNoteToUs(): string {
    const index = SOLFEGE_KEYS.indexOf(this.note);
    if (index == -1) {
      throw new Error(`Not a solfege key: ${this.note}`);
    }

    return US_KEYS[index];
  }

  getAccidentalAsString(): string {
    switch (this.accidental) {
      case AccidentalType.Flat:
        return "b";
      case AccidentalType.Sharp:
        return "#";
      default:
        return "";
    }
  }

  asUsString(): string {
    const note = (() => {
      if (this.isUsKey()) {
        return this.note;
      } else {
        return this.solfegeNoteToUs();
      }
    })();

    return `${note}${this.getAccidentalAsString()}${this.octave}`;
  }

  asSolfegeString(): string {
    const note = (() => {
      if (this.isSolfegeKey()) {
        return this.note;
      } else {
        return this.usNoteToSolfege();
      }
    })();

    return `${note}${this.getAccidentalAsString()}${this.octave}`;
  }
}
