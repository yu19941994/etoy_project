<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"
        :class="{ 'disabled': !childPagination.has_pre }">
          <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="gPFunction(childPagination.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in childPagination.total_pages" :key="page"
        :class="{ 'active': page === childPagination.current_page }">
          <a class="page-link" href="#" @click.prevent="gPFunction(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item"
        :class="{ 'disabled': !childPagination.has_next }">
          <a class="page-link" href="#" aria-label="Next"
          @click.prevent="gPFunction(childPagination.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    childPagination: {
      type: Object,
      required: true
    }
  },
  methods: {
    gPFunction (page) {
      this.$emit('gP', page)
    }
  }
}
</script>
