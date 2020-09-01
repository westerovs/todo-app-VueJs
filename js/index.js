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
      <div class="list__item-title">{{ props.title }}</div>
      <div class="list__item-row">
        <div class="list__item-description">{{ props.desc }}</div>
        <div class="list__item-action">
          <button @click="task_done()" class="delete">Delete</button>
        </div>
      </div>
    </li>
  `,
});

new Vue({
  el: '#app',
  data: {
    new_task: {
      title: '',
      desc: '',
    },
    todo: [
      { title: 'Learn Vue', desc: 'Middle' },
      { title: 'Learn Vuex', desc: 'Hard' },
      { title: 'Learn Learn Learn...', desc: 'lorem dolor ipsum dolor' },
    ],
  },
  methods: {
    remove(index) {
      console.log(index);
      this.todo.splice(index, 1);
    },
    add() {
      if (this.new_task.title !== '') {
        console.log(333);
        this.todo.push({
          title: this.new_task.title,
          desc: this.new_task.desc,
        });
        this.new_task.title = '';
        this.new_task.desc = '';
      }
    },
  },
});
