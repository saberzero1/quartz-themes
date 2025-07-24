/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 */

/*
 * Modified for Society Builder (http://github.com/lez/societybuilder):
 * - remove support for empty strings
 * - html markup, html escaping removed
 * - no extra newline at end of text
 * - raw json output
 * - merge chunks for fewer items in diff
 *
 *   by Laszlo Megyer (lez)
 */

/*
 * modified again for Quartz Themes (https://github.com/saberzero1/quartz-themes)
 */

let JsDiff = {
  // Takes two strings, an old and a new one
  // Returns an array of sections where sections are either unchanged text or
  //   changed text, where removed and added parts are both included. Example:
  // diffString('What a time to be alive!', 'Bad time to be sick.')
  // returns:
  // [
  //   {add: 'Bad ', remove: 'What a '},
  //   {text: 'time to be '},
  //   {add: 'sick.', remove: 'alive!'}
  // ]
  diffString: function (o, n) {
    let out = this.diff(o.split(/\s+/), n.split(/\s+/));
    let str = "";
    let diff = [];
    let optr = 0;
    let nptr = 0;
    let entry;

    let oSpace = o.match(/\s+/g);
    if (oSpace == null) {
      oSpace = [""];
    } else {
      oSpace.push("");
    }

    let nSpace = n.match(/\s+/g);
    if (nSpace == null) {
      nSpace = [""];
    } else {
      nSpace.push("");
    }

    while (optr < out.o.length || nptr < out.n.length) {
      entry = { remove: "", add: "" };
      while (optr < out.o.length && out.o[optr].text == null) {
        entry.remove += out.o[optr] + oSpace[optr];
        optr++;
      }
      while (nptr < out.n.length && out.n[nptr].text == null) {
        entry.add += out.n[nptr] + nSpace[nptr];
        nptr++;
      }

      if (entry.add || entry.remove) {
        diff.push(entry);
      }

      entry = { text: "" };
      while (
        optr < out.o.length &&
        nptr < out.n.length &&
        out.o[optr].text != null &&
        out.n[nptr].text != null
      ) {
        entry.text += out.o[optr].text + oSpace[optr];
        optr++;
        nptr++;
      }
      if (entry.text) {
        diff.push(entry);
      }
    }

    return diff;
  },

  diff: function (o, n) {
    let ns = new Object();
    let os = new Object();

    for (let i = 0; i < n.length; i++) {
      if (ns[n[i]] == null) ns[n[i]] = { rows: new Array(), o: null };
      ns[n[i]].rows.push(i);
    }

    for (let i = 0; i < o.length; i++) {
      if (os[o[i]] == null) os[o[i]] = { rows: new Array(), n: null };
      os[o[i]].rows.push(i);
    }

    for (let i in ns) {
      if (
        ns[i].rows.length == 1 &&
        typeof os[i] != "undefined" &&
        os[i].rows.length == 1
      ) {
        n[ns[i].rows[0]] = { text: n[ns[i].rows[0]], row: os[i].rows[0] };
        o[os[i].rows[0]] = { text: o[os[i].rows[0]], row: ns[i].rows[0] };
      }
    }

    for (let i = 0; i < n.length - 1; i++) {
      if (
        n[i].text != null &&
        n[i + 1].text == null &&
        n[i].row + 1 < o.length &&
        o[n[i].row + 1].text == null &&
        n[i + 1] == o[n[i].row + 1]
      ) {
        n[i + 1] = { text: n[i + 1], row: n[i].row + 1 };
        o[n[i].row + 1] = { text: o[n[i].row + 1], row: i + 1 };
      }
    }

    for (let i = n.length - 1; i > 0; i--) {
      if (
        n[i].text != null &&
        n[i - 1].text == null &&
        n[i].row > 0 &&
        o[n[i].row - 1].text == null &&
        n[i - 1] == o[n[i].row - 1]
      ) {
        n[i - 1] = { text: n[i - 1], row: n[i].row - 1 };
        o[n[i].row - 1] = { text: o[n[i].row - 1], row: i - 1 };
      }
    }

    return { o: o, n: n };
  },
};

export default JsDiff;
