// The list of recordings shown on maustin.ca/poems.
//
// To add one: put the audio file (mp3 or m4a work everywhere) in the poems/audio/
// folder, then add a line below. They appear in the order listed.
//   title - shown in the list and the player
//   file  - path to the audio file, relative to this folder
//   note  - optional; a short line shown under the title

window.RECORDINGS = [
  { title: "Example Poem", file: "audio/example.mp3", note: "A short line about this one" },
  { title: "Another Poem", file: "audio/another.mp3" },
];
