<template>
  <main class="container">

    <h1>
      Toast Notifications
    </h1>

    <p>
      Small Ui component reusable with Nuxt.
    </p>

    <div class="buttons">

      <button
        type="button"
        @click="showSuccess"
      >
        Success
      </button>

      <button
        type="button"
        @click="showError"
      >
        Error
      </button>

      <button
        type="button"
        @click="showWarning"
      >
        Warning
      </button>

      <button
        type="button"
        @click="showInfo"
      >
        Info
      </button>

    </div>

    <Toast />

  </main>
</template>

<script setup lang="ts">
const {success, error, warning, info} = useToast()

const showSuccess = () => {
  success(
    'Operation Successful',
    'Your file has been saved successfully.'
  )
}

const showError = () => {
  error(
    'An error occurred',
    'Unable to save your changes.'
  )
}

const showWarning = () => {
  warning(
    'Attention',
    'Your session will expire soon.'
  )
}

const showInfo = () => {
  info(
    'Information',
    'A new version is available.'
  )
}
</script>