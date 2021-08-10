import Vue from 'vue'

const store = new Vue.observable({
    form: [
        { year: '2000', model: 'Gallardo', brand: 'Lamborghini', price: 200},
        { year: '2001', model: 'McLaren', brand: 'Mercedes', price: 300},
        { year: '2002', model: 'DB10', brand: 'Aston Martin', price: 400}
    ],
    details: {
        model: '',
        price: undefined
    }
})

export default store;
