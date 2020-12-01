export function attemptSolution(start, end) {
   let audio = new Audio("/christmas.mp3")
    audio.play()
  return { type: 'ATTEMPT_SOLUTION', start, end };
}

export function mergeSettings(updatedSettings) {
  return { type: 'MERGE_SETTINGS', updatedSettings };
}

export function setWordHinted(word, hinted) {
  return { type: 'SET_WORD_HINTED', word, hinted };
}
