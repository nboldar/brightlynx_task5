<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="user in users">
                <tr>
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.website}}</td>
                </tr>
            </template>
            </tbody>
        </table>
        <div v-if="loading">Загрузка...</div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<script>

    export default {
        name: 'UsersTable',
        props: {},
        data: function () {
            return {
                loading: false,
                users: null,
                error: null
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = this.users = null;
                this.loading = true;
                fetch('https://jsonplaceholder.typicode.com/users/')
                    .then((response) => {
                        this.loading = false;
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json);
                        this.users = json;
                    }).catch((er) => {
                    this.loading = false;
                    this.error = er.toString();
                });
            }
        }
    };
</script>
