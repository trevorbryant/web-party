<template>
  <div class="container">
    <div>
      <h2>What the flock…?</h2>
      <p>
        Summer's back and hotter than ever! All the more reason to stay indoors
        and party with your favorite Linux people. Party is BYOP (Bring Your Own
        Parrots) so send us all your partiest parrots on Twitter! (Facebook
        posts welcome too.)
      </p>

      <p>
        If we get enough, we'll do something <i>extra</i> special! (Wink.)
      </p>
    </div>

    <div>
      <h2>When:</h2>
      <p>June 27-July 9</p>
    </div>

    <div>
      <h2>Where:</h2>
      <p>
        <a href="https://system76.com">system76.com</a>
      </p>
    </div>

    <div>
      <h2>What:</h2>
      <p>
        Sitewide discounts for the blockiest of block parties
      </p>
    </div>

    <div>
      <h2>RSVP:</h2>
      <p>
        Via social media by June 25!<br/>
        (must include at least one parrot)
      </p>
    </div>
  </div>
</template>

<style scoped>
h2,
p {
  font-family: var(--font-family-sans);
  font-weight: bold;
}

h2 {
  color: #8b3870;
  font-size: 2rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
}

p {
  margin-top: 0.2rem;
}

p, a {
  color: #4cc1df;
  font-size: 1.4rem;
}

.container {
  display: grid;
  margin: 2rem auto;
  max-width: 1100px;
  padding: 0 1rem;
  text-align: center;
}

@media (width > 900px) {
  .container {
    grid-gap: 0 6rem;
    grid-template-areas:
      "wtf when where"
      "wtf what what"
      "wtf rsvp rsvp";
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }

  .container > div:nth-child(1) { grid-area: wtf; }
  .container > div:nth-child(2) { grid-area: when; }
  .container > div:nth-child(3) { grid-area: where; }
  .container > div:nth-child(4) { grid-area: what; }
  .container > div:nth-child(5) { grid-area: rsvp; }

  .container > div:first-child {
    text-align: left;
  }
}
</style>

<script>
export default {
  name: 'PageContent'
}
</script>
