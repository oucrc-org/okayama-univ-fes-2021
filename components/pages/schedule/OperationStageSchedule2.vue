<template>
  <div class="text-center">
    <light-timeline :items="items" class="text-center max-w-screen-sm w-full inline-block" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          tag: '18:00',
          color: '#dcdcdc',
          content: '開演'
        },
        {
          type: 'star',
          tag: '18:05',
          color: '#F04444',
          htmlMode: true,
          content: '吹奏楽団'
        },
        {
          type: 'star',
          tag: '18:30',
          color: '#F04444',
          htmlMode: true,
          content: 'グリークラブ'
        },
        {
          type: 'star',
          tag: '18:55',
          color: '#F04444',
          htmlMode: true,
          content: 'ジャズ研究会'
        },
        {
          type: 'star',
          tag: '19:30',
          color: '#F04444',
          htmlMode: true,
          content: 'ダンス部'
        },
        {
          tag: '20:05',
          color: '#F04444',
          content: '各企画順位発表'
        },
        {
          tag: '20:15',
          color: '#F04444',
          content: 'グランドフィナーレ'
        },
        {
          tag: '20:35',
          color: '#dcdcdc',
          content: '閉演の挨拶'
        }
      ]
    }
  }
}
</script>
