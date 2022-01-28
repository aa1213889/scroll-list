import { defineComponent, onMounted, ref } from 'vue'
import './index.css'
export default defineComponent({
  setup(props, ctx) {
    const list = ref<string[]>([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ])
    const refItem = ref()
    let itemHeight: number = 0
    const scrollTop = ref<number>(0)

    onMounted(() => {
      itemHeight = refItem.value.offsetHeight
      render()
    })

    const render = () => {
      scrollTop.value++
      if (scrollTop.value === itemHeight) {
        scrollTop.value = 0
        setItem()
        removeItem()
      }
      window.requestAnimationFrame(render)
    }

    const removeItem = () => list.value.shift()

    const setItem = () => list.value.push(list.value[0])

    return () => (
      <div class="scroll-list-container" style={{ transform: `translate3d(0, ${-scrollTop.value}px, 0)` }}>
        {list.value.map((data, index) => (
          <div key={index} class="item" ref={refItem}>
            {data}
          </div>
        ))}
      </div>
    )
  }
})
