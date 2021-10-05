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
          tag: '10:00',
          color: '#dcdcdc',
          content: '校友会あいさつ'
        },
        {
          tag: '10:10',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          type: 'star',
          tag: '11:00',
          color: '#F04444',
          htmlMode: true,
          content: 'ゲスト: 岡大太郎'
        },
        {
          tag: '12:00',
          color: '#dcdcdc',
          content: '昼休憩'
        },
        {
          tag: '13:00',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '14:30',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '15:00',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '16:30',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '17:00',
          color: '#dcdcdc',
          content: '閉会のあいさつ'
        }
      ]
    }
  }
}
</script>
