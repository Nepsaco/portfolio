<template>
  <section class="about" id="about">
    <div class="about-title">
      <h1>About</h1>
    </div>
    <div class="about-content">
      <h2>I am a Software Developer living in Denver, Colorado.</h2>
      <p>
        From marketing student to climbing coach to beer brewing enthusiast and
        now a full stack web engineer, I’ve embraced an eclectic journey. I’m
        passionate about crafting web apps that blend stunning design,
        unforgettable user experiences, and innovative solutions to intriguing
        challenges.
      </p>
      <ul>
        <h2>Skills</h2>
        <li>Agile Development</li>
        <li>Backend Development</li>
        <li>Frontend Development</li>
        <li>Integration Testing</li>
        <li>Project Management</li>
        <li>UI/UX Design</li>
      </ul>
      <ul>
        <h2>Technolgies</h2>
        <li>AWS</li>
        <li>Git</li>
        <li>Javascript</li>
        <li>Node</li>
        <li>Python</li>
        <li>Rails</li>
        <li>React</li>
        <li>Ruby</li>
        <li>SQL</li>
        <li>Vue</li>
      </ul>
      <h3>
        I'm an enthusiastic learner and problem-solver, driven by a passion for
        tackling tough challenges. With a background in project management and
        teaching, I've been helping people connect and create fascinating web
        apps.
      </h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-flow: column wrap;
  background-color: $accent;
  color: $light;
  @include respond-to(desktop) {
    height: 100vh;
  }
}

.about-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @include header-font;
  @include respond-to(desktop) {
    width: 50vw;
    font-size: 10vw;
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: $light;
  height: 100vh;
  padding: 2rem;
  color: $dark;
  line-height: 1.5rem;

  h2,
  h3 {
    padding-bottom: 0.5rem;
    @include bold-font;
  }

  li {
    padding-bottom: 0.5rem;
    text-indent: 1rem;
  }

  p {
    padding-bottom: 0.5rem;
  }

  @include respond-to(desktop) {
    background-color: $light;
    width: 50vw;
  }
}
</style>
