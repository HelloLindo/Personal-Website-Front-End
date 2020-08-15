<template>
  <section class="more">
    <template v-for="(text, index) of moreText">
      <div :key="index" class="text-wrapper">
        <h1 class="text-title">{{ text.title }}</h1>
        <p class="text-content" v-html="text.content"></p>
      </div>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'More',

    data: () => ({
      moreText: [
        {
          title: 'What kind of person am I?',
          content:
            "I'm an optimistic, outgoing, and dependable person who has the utmost passion for Computer Science and the most ardent desire to learn more about programming techniques."
        },
        {
          title: 'Story of Study',
          content:
            'For me, learning never is, and never should be a lonely journey. On top of achieving academic excellence, my personal growth is closely linked with the act of helping those around me study.<br ><br >I served as Teaching Assistants for four major courses during the time of my undergraduate study, extending the range of my help to over 160 younger students. Every time when I think about the past, I could still vividly recall the night when I stayed up extremely late correcting the students’ assignments for a course. I might have woken up my roommate—he asked me, half-complaining and half-resigned, that whether I thought it was worthwhile to give up sleep for the Teaching Assistant work, which would not contribute to my self-improvement on GPA. I remember telling him that helping others with my professional knowledge gave me satisfaction like no other; it made me see my value in this field, which to me made all the difference. He was silent for a bit before snoring again, as I quietly resumed my work.'
        },
        {
          title: 'Interest and Hobbies',
          content:
            "I am a huge basketball fan, and I participated in numerous games as a starting lineup player. I attended the games held by the Student Union, the classes in my college, and Tencent corporation during my undergraduate time. Additionally, I also perform well in swimming and playing badminton. <br > <br > Besides sports, I'm also interested in musical instruments. I play the drums, and I was the drummer of a college band.  Except for drums, I learned ukulele by myself. I often play the ukulele in my spare time and I recorded videos to share with others online. So, if you are interested in them, I wholeheartedly welcome you to watch my videos on my YouTube."
        },
        {
          title: 'Research Experiences',
          content:
            'During my sophomore year, I had the opportunity to delve deeper into the field of Keystroke Recognition. This project was about using the sound of keystrokes to identify the characters with applications of BSS (Blind Signal/Source Separation), FastICA, PCA, and FFT methods. The original way is to utilize multiple algorithms to recognize signals, while I normalized the amplitude of audio, utilized FIR Filter to perform the preprocessing, i.e. calculated the matrix of signals via MATLAB, then differentiated the original signals.<br ><br >Furthermore, my graduation thesis Rule-Interposing Deep Q-Networks is about the Application of Game Artificial Intelligence (Game AI). I proposed a Rule-interposing Learning (RIL) framework that embeds high-level rules into deep reinforcement learning. I used RIL to implement AI to play Car Racing and Pong games which proved that it can effectively improve the efficiency of DQN algorithm, control the exploration mode of DQN, and avoid specific defects such as cold start and wrong attempt of Deep Reinforcement Learning in the early training stage.'
        },
        {
          title: 'Motto',
          content: 'Coding Change the World.'
        }
      ]
    }),

    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-wrapper {
    .text-title {
      font-family: 'Rift-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .text-content {
      font-family: 'SFMono-Regular', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 15px;
      line-height: 20px;
    }
    text-align: left;
    margin-bottom: 50px;
  }
</style>