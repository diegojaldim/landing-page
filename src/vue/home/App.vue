<template>
    <ul id="list">
        <item-job v-for="(item, index) in items" v-bind:data="index" v-bind:key="index" v-bind:item="item"></item-job>
    </ul>
</template>

<script>
    import { get } from '../../helpers/http';
    import constants from '../../helpers/constants';
    import Item from './Item.vue';

    export default {
        name: 'App',
        data () {
            return {
                url: `${constants.URL}${constants.endpoints.JOBS}`,
                items: [],
            }
        },
        components: {
            'item-job': Item,
        },
        mounted() {
            this.getJobsFromApi();
        },
        methods: {
            getJobsFromApi() {
                get(this.url)
                    .then(response => response.data)
                    .then(response => {
                        if (response.hasOwnProperty('vagas')) {
                            for (let item of response.vagas) {
                                if (!item.hasOwnProperty('ativa') || !item.ativa) {
                                    continue;
                                }

                                this.items.push(item);
                            }
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        }
    }
</script>