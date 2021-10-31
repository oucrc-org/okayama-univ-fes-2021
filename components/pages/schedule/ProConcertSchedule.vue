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
          type: 'star',
          tag: '16:40',
          color: '#F04444',
          htmlMode: true,
          content: 'ぼる塾ステージ'
        },
        {
          tag: '17:00',
          color: '#F04444',
          content: '告知: 校友会ステージ団体'
        },
        {
          type: 'star',
          tag: '17:05',
          color: '#F04444',
          htmlMode: true,
          content: '四千頭身ステージ'
        },
        {
          type: 'star',
          tag: '17:20',
          color: '#F04444',
          htmlMode: true,
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
