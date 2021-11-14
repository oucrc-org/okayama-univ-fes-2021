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
          content: '代表者挨拶'
        },
        {
          type: 'star',
          tag: '18:10',
          color: '#F04444',
          htmlMode: true,
          content: 'チアリーダーWIZARDS'
        },
        {
          type: 'star',
          tag: '18:30',
          color: '#F04444',
          htmlMode: true,
          content: 'コールロータス'
        },
        {
          type: 'star',
          tag: '18:55',
          color: '#F04444',
          htmlMode: true,
          content: '吟詩部'
        },
        {
          type: 'star',
          tag: '19:15',
          color: '#F04444',
          htmlMode: true,
          content: '体操部'
        },
        {
          type: 'star',
          tag: '19:35',
          color: '#F04444',
          htmlMode: true,
          content: '落語研究会'
        },
        {
          type: 'star',
          tag: '19:50',
          color: '#F04444',
          htmlMode: true,
          content: '少林寺拳法部'
        },
        {
          type: 'star',
          tag: '20:15',
          color: '#F04444',
          htmlMode: true,
          content: 'ビリペル'
        },
        {
          tag: '20:35',
          color: '#dcdcdc',
          content: '2日目企画のお知らせ'
        }
      ]
    }
  }
}
</script>
