// eslint-disable-next-line no-undef
Vue.component('itemList', {
  props: ['props'],
  methods: {
    task_done() {
      this.$emit('task_done');
    },
  },
  template: `
    <li class="list__item">
      <div class="list__item-title">{{ props.id }}. {{ props.title }}</div>
      <div class="list__item-row">
        <div class="list__item-description">{{ props.desc }}</div>
        <div class="list__item-action">
          <button @click="task_done()" class="delete">Delete</button>
        </div>
      </div>
    </li>
  `,
});

// eslint-disable-next-line no-undef
new Vue({
  el: '#app',
  data: {
    todo: [
      { id: 1, title: 'my-task', desc: 'lorem' },
      { id: 2, title: 'my-task_2', desc: 'lorem ipsum' },
      { id: 3, title: 'my-task_3', desc: 'lorem dolor ipsum dolor' },
    ],
  },
  methods: {
    remove(index) {
      console.log(index);
      console.log(this.todo[index]);
      this.todo.splice(index, 1);
    },
  },
});
