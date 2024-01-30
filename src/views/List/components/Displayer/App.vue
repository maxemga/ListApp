<template>
  <div class="displayer">
    <header-component :title="title" />

    <search @handleSearch="handleSearch" />

    <list :data="renderData">
      <template v-slot="{ item }">
        <slot :item="item" />
      </template>
    </list>

    <load-button
      :is-loading="isLoading"
      :is-done="isDone"
      :is-search="isSearch"
      :is-search-data-empty="isSearchDataEmpty"
      @loadData="loadData"
    />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import Search from './components/Search.vue'
import LoadButton from './components/LoadButton.vue'
import List from './components/List.vue'

import { getData } from './dataLayer'

export default {
  name: 'Displayer',
  components: {
    HeaderComponent,
    List,
    Search,
    LoadButton,
  },
  data() {
    return {
      data: [],
      searchData: [],

      total: 0,
      limit: 10,
      skip: 0,

      search: '',

      isLoading: false,
      isDone: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    await this.loadData()
  },
  computed: {
    isSearchDataEmpty() {
      return this.searchData.length === 0 && this.isSearch
    },
    isSearch() {
      return this.search !== ''
    },
    renderData() {
      return this.isSearch ? this.searchData : this.data
    },
  },
  methods: {
    async loadData() {
      this.isLoading = true

      if (this.isSearch) {
        const data = await getData(this.url + '/search', 0, 0, this.search)

        this.searchData = data[this.url]

        this.isLoading = false

        return
      }

      const data = await getData(this.url, this.limit, this.skip)

      this.skip += this.limit

      this.data = [...this.data, ...data[this.url]]
      this.total = data.total

      if (this.skip >= this.total) {
        this.isDone = true
      }

      this.isLoading = false
    },
    async handleSearch(value) {
      this.search = value

      if (this.isSearch) {
        await this.loadData()
      }
    },
  },
}
</script>

<style scoped></style>
