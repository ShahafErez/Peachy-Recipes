<template>
  <div class="background">
    <div class="container">
      <div class="about-section">
        <h1>About Us</h1>
        <p>
          We are two 3rd year Information Systems Engineer students from BGU.
        </p>
        <p>
          We built a recipe site that will give the user a fun and effective
          browsing experience.
        </p>
        <ul>
          Our users can:
          <li>explore more than 100 different recipes</li>
          <li>search for a recipe that will meet a specific need</li>
          <li>save favorite recipes</li>
          <li>add personal recipes</li>
          <li>experience nostalgia and watch family recipes.</li>
          <li>
            Plan their upcoming meal:
            <ul>
              <li>add/remove recipes</li>
              <li>manage recipes order</li>
              <li>keep on track after the making progress of each recipe</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- <div class="" -->
      <div class="team">
        <div class="card">
          <img src="../../resources/chen.png" alt="Chen" />
          <div class="card-container">
            <h2>Chen Mordehai</h2>
            <p class="title">Developer</p>
            <p>mordeche@post.bgu.ac.il</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
        <div class="card">
          <img src="../../resources/shahaf.png" alt="Shahaf" />
          <div class="card-container">
            <h2>Shahaf Erez</h2>
            <p class="title">Developer</p>
            <p>shahafi@post.bgu.ac.il</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <h2 id="previous" style="text-align:center">Previous Products</h2>
      <div class="links-section">
        <a
          href="https://github.com/Web-Development-Environments-2022/assignment2-318226503_208383174.git"
          >Assignment 2</a
        >
        <br />
        <a
          href="https://github.com/Web-Development-Environments-2022/assignment3_2-208383174_318226503.git"
          >Assignment 3.2</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
}

.background {
  background-image: url("../../resources/background-about.jpg");
}

.card-container {
  text-align: center;
  margin-top: 10px;
  font-family: Andale Mono, monospace;
  font-size: 19px;
}

h1 {
  font-family: Andale Mono, monospace;
  color: #e49587;
}

.about-section {
  font-family: system-ui;
  text-align: center;
  width: 600px;
  margin: auto;
  padding: 5px;
  border: 1px solid #ea7637;
  border-radius: 5px;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  background-color: #000;
}

#previous {
  font-family: Andale Mono, monospace;
  margin-top: 15px;
  color: #ea7637;
}

ul {
  text-align: start;
  width: 600px;
  display: inline-grid;
  position: relative;
  left: 0px;
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: #ea7637;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.card {
  max-width: 67%;
  margin-right: 10px;
  margin-left: 10px;
}
.team {
  display: flex;
  margin-top: 25px;
}

button {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-size: 17px;
  border: 1px solid grey;
  background-color: #ffdaba;
}

a {
  font-size: 18px;
  color: black;
}

.links-section {
  padding-bottom: 15px;
  font-size: 18px;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: large;
}
</style>
