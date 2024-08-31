<template>
    <div>
      <h2>Challenges</h2>
      <ul>
        <li v-for="challenge in challenges" :key="challenge._id">
          {{ challenge.description }} - {{ challenge.difficulty }}
          <button @click="editChallenge(challenge._id)">Edit</button>
          <button @click="removeChallenge(challenge._id)">Delete</button>
        </li>
      </ul>
      <button @click="newChallenge">Add New Challenge</button>
    </div>
  </template>
  
  <script>
  import { getChallenges, deleteChallenge } from '@/services/challengeService'
  
  export default {
    data() {
      return {
        challenges: []
      }
    },
    async created() {
      this.challenges = await getChallenges()
    },
    methods: {
      editChallenge(id) {
        this.$router.push(`/challenges/edit/${id}`)
      },
      async removeChallenge(id) {
        await deleteChallenge(id)
        this.challenges = this.challenges.filter(challenge => challenge._id !== id)
      },
      newChallenge() {
        this.$router.push('/challenges/new')
      }
    }
  }
  </script>
  