<template>
  <div class="course-section">
    <h2 class="section" v-text="sectionData.sectionName"></h2>
    <!-- 课时列表 -->
    <p class="lesson" v-for="item in sectionData.courseLessons" :key="item.id" @click="handleClick(item)">
        <span v-text="item.theme"></span>
        <van-icon name="play-circle" size="20" v-if="item.canPlay"></van-icon>
        <van-icon name="lock" size="20" v-else></van-icon>
    </p>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'CourseSection',
  components: {
    VanIcon: Icon
  },
  props: {
    sectionData: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick (lessonInfo) {
      // 只有当前课程能够播放时，才能跳转视频页面,并传递课时的ID
      if (lessonInfo.canPlay) {
        this.$router.push({
          name: 'lesson-video',
          params: {
            lessonId: lessonInfo.id
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.course-section {
  padding: 0 20px;
}
.lesson {
  display: flex;
  line-height: 20px;
  justify-content: space-between;
}
</style>
