const app = new Vue({
    el: '#app',
    data() {
        return {
            email: '',
            msg: [],
            class: '',
            checkbox: false
        }
    },
    watch: {
        email(value) {
            this.email = value;
            this.validateEmail(value);
        }
    },
    computed: {
        disabledButton() {
            if (this.checkbox === false) {
                return 'disabled'
            } else {
                return ''
            }
        },
        invalidClass() {
            if (this.class === false) {
               return ''
            } else {
                return 'invalid-class'
            }
        }
    },
    methods: {
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
                this.class = false
            } else {
                this.msg['email'] = 'Correo electrónico inválido';
                this.class = true
            }
        }
    }
})