<template>
    <li>
        <p class="job-title">
            <a v-bind:href="item.link">{{item.cargo}}</a>
        </p>
        <p class="job-locale">{{address}}</p>
    </li>
</template>

<script>
    export default {
        name: 'Item',
        data () {
            return {
                label: {
                    address: 'Remoto'
                }
            }
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        computed: {
            address: function () {
                let address = this.label.address;

                if (this.item.hasOwnProperty('localizacao')) {
                    address = `${this.item.localizacao.bairro} - ${this.item.localizacao.cidade}, ${this.item.localizacao.pais}`;
                }

                return address;
            }
        }
    }
</script>