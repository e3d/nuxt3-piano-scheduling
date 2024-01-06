<template>
  <div>
    <h1>Piano Lesson Scheduler</h1>
    <form @submit.prevent="submitTimeSlots">
      <div v-for="(slot, index) in timeSlots" :key="index">
        <input type="datetime-local" v-model="timeSlots[index]" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeSlots: ['', '', '']
    };
  },
  methods: {
    submitTimeSlots() {
      // Handle time slot submission
      console.log(this.timeSlots);
    }
  }
};
</script>
