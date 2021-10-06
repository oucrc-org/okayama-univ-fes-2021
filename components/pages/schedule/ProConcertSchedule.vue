<template>
  <div>
    <light-timeline :items="items" class="text-center" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          tag: '16:30',
          color: '#dcdcdc',
          content: '委員長挨拶'
        },
        {
          tag: '16:40',
          color: '#F04444',
          content: 'ぼる塾ステージ'
        },
        {
          type: 'star',
          tag: '17:00',
          color: '#F04444',
          htmlMode: true,
          content: '告知: 校友会ステージ団体'
        },
        {
          tag: '17:05',
          color: '#F04444',
          content: '四千頭身ステージ'
        },
        {
          tag: '17:20',
          color: '#F04444',
          content: 'ハナコステージ'
        },
        {
          tag: '17:40',
          color: '#dcdcdc',
          content: '閉会のあいさつ'
        }
      ]
    }
  }
}
</script>
