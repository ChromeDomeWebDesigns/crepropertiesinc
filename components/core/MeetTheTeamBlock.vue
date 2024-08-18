<template>
<section>
  <div class="page-margin w-100">
    <div class="flex column align-center content mb-2">
      <h2>Meet the Team</h2>
      <p class="text-center">Meet the husband and wife team behind CRE Properties and its family-first approach to Real Estate Investing. <nuxt-link v-if="link" to="/about" class="nowrap">Learn More</nuxt-link></p>
    </div>
    <div class="flex justify-center">
      <team-member-circle v-for="member in members" :key="member.name" :member="member" />
    </div>
  </div>
</section>
</template>

<script>
  import TeamMemberCircle from './TeamMemberCircle'

  export default {
    name: 'MeetTheTeam',
    components: {
      TeamMemberCircle
    },
    props: {
      link: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    data() {
      return {
        members: [
          {
            name: 'Zachary Cuddy',
            title: 'Co-Owner',
            description: 'Real Estate Agent/Operations/Rehabs',
            image: 'Zachary.jpg'
          },
          {
            name: 'Kelly Cuddy',
            title: 'Co-Owner',
            description: 'Tenant Relations/Designer/Social Media',
            image: 'Kelly.jpg'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    background-color: color('white');
    color: color('blackLight');

    .content {
      font-size: 1em;
      margin-bottom: 2rem;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1.3em;
        margin-bottom: 3rem;
      }

      @media (min-width: breaks(tablet)) {
        font-size: 1.5em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.8em;
      }

      h2 {
        color: color('primary');
        font-weight: 900;
        font-size: 1.3em;

        @media (min-width: breaks(phone)) {
          font-size: 1.4em;
        }

        @media (min-width: breaks(tablet)) {
          font-size: 1.5em;
        }
      }

      p {
        margin-top: 0.5rem;
        width: 100%;
        font-size: 0.7em;

        @media (min-width: breaks(tablet)) {
          width: 80%;
        }

        @media (min-width: breaks(laptop)) {
          margin-top: 1rem;
        }
      }

      a {
        color: color('primary');
        border-bottom: 1px solid transparent;

        &:hover {
          color: lighten(color('primary'), 10%);
          border-bottom-color: lighten(color('primary'), 10%);
        }
      }
    }

    .page-margin {
      padding: 2rem;

      @media (min-width: breaks(phone)) {
        padding: 3rem;
      }
    }
  }
</style>
