const jokeButton = document.querySelector('.joke-button');

const handleClick = async () => {
  try {
    const newJoke = await axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes');
    const { setup, punchline } = newJoke.data;
    document.querySelector('.dad-joke').innerHTML = `<p>${setup}</p><br><p>${punchline}</p>`
  } catch (err) {
    console.log(err);
  }
};

jokeButton.addEventListener('click', handleClick);