const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      confirmedClassName: '',
      inputColor: '',
      confirmedBGColor: '',
      isUser1Selected: false,
      isUser2Selected: false,
      isVisibleSelected: true,
      isHiddenSelected: false,
    };
  },
  methods: {
    handleAddClassName() {
      if (this.inputClass === 'user1') {
        this.user1 = true;
        this.user2 = false;
      } else if (this.inputClass === 'user2') {
        this.user1 = false;
        this.user2 = true;
      }

      this.confirmedClassName = {
        user1: this.user1,
        user2: this.user2,
      };
    },

    handleToggleVisibility() {
      this.isHiddenSelected = !this.isHiddenSelected;
      this.isVisibleSelected = !this.isVisibleSelected;

      this.confirmedClassName = {
        ...this.confirmedClassName,
        visible: this.isVisibleSelected,
        hidden: this.isHiddenSelected,
      };
    },
    handleAddBackgroundColor() {
      this.confirmedBGColor = this.inputColor;
    },
  },
});

app.mount('#assignment');
