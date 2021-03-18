export const fruitMixin = {
    data() {
        return {
            text: "Hello Shaher!",
            fruits: ["Mango", "Banana", "Orang", "Watermalon"],
            filterText: ""
        };
    },

    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
            return element.match(this.filterText);
            });
        }
    }
};