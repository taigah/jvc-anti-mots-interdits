const forbiddenWords = ['féministe', 'LGBT', 'bougnoule', 'shoah', 'pute', 'salope']

function sanitizeWord(str, word) {
  return str.replace(new RegExp(word, 'gi'), word[0] + '‭' + word.slice(1))
}

function sanitize(str) {
  for (let forbiddenWord of forbiddenWords) {
    str = sanitizeWord(str, forbiddenWord)
  }
  return str
}

document.querySelector('.form-post-message, .form-post-topic').addEventListener('submit', e => {
  const textarea = document.querySelector('#message_topic')
  textarea.value = sanitize(textarea.value)
})
