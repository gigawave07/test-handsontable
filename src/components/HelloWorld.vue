<template>
    <div >
        <div @click="handleClick"><hot-table :data="data" :settings="hotSettings"></hot-table></div>
        <hot-table ref="details" :data="store.details" :settings="hotSettings2"></hot-table>
    </div>
</template>

<script>
    import {HotTable} from '@handsontable/vue';
    import store from "@/store/store";

    export default {
        components: {
            HotTable,
        },
        data: function () {
            return {
                store,
                data: store.form,
                hotSettings: {
                    colHeaders: ['Year', 'Model', 'Brand'],
                    columns: [
                        { data: 'year'},
                        { data: 'model'},
                        { data: 'brand'},
                    ],
                    afterSelection(row) {
                        const data = this.getDataAtRow(row)
                        const details = store.form.filter(car => car.brand == data[2])
                        store.details = {
                            ...details
                        }
                    },
                    licenseKey: 'non-commercial-and-evaluation'
                },
                hotSettings2: {
                    data: store.details,
                    colHeaders: ['Model', 'Price'],
                    columns: [
                        { data: 'model'},
                        { data: 'price'},
                    ],
                    licenseKey: 'non-commercial-and-evaluation'
                },
            };
        },
        methods: {
            handleClick() {
                this.$refs.details.hotInstance.loadData([JSON.parse(JSON.stringify(this.store.details))[0]])
            }
        }
    }
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
