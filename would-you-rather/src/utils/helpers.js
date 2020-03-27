export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    avatarURL,
    optionOne,
    optionTwo,
    text1: optionOne['text'],
    text2: optionTwo['text'],
    hasAnswered:
      optionOne['votes'].includes(authedUser) ||
      optionTwo['votes'].includes(authedUser)
  };
}
