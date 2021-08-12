<template>
    <div >
        <hot-table :data="data" :settings="hotSettings"></hot-table>
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
        mounted() {
          store.ref = this.$refs.details
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
                        store.ref.hotInstance.loadData([JSON.parse(JSON.stringify(store.details))[0]])
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
        }
    }
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
