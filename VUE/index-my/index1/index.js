var app = new Vue({
    el: '#app',
    data: {
        list: [{

            id: 1,
            name: 'iphone 7',
            price: 6188,
            count: 1
        },
        {
            id: 2,
            name: 'ipad Pro',
            price: 5888,
            count: 1
        },
        {
            id: 3,
            name: 'MacBook Pro',
            price: 21488,
            count: 1
        }
        ]

    },
    computed: {
        handleOnPrice: function (index) {
            var total = 0;
            if (this.list[index]=this.list.id) {
                total = this.list.price * this.list.count;
            }

            
            return total.toString().replace(/\B(?=(\d{3})+$)/g, '');
        }
    },
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--
        },
        handleAdd: function (index) {
            this.list[index].count++

        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        handleAll: function (index) {
            this.list
        },
        handleOn: function (index) {
            this.list[index]=this.list.id;
            console.log(index)
        }
    }
});