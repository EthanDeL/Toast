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

<style>
/* CONTAINER */
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.container h1 {
    margin-bottom: 10px;
    font-size: 1.7em;
    font-weight: var(--font-weight-bold);
}

.container p {
    margin-bottom: 25px;
    font-size: 1em;
    color: var(--secondary-color);
}

/* BUTTONS */
.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.buttons button {
    padding: 11px 17px;
    border: 0;
    border-radius: 10px;
    font-size: 0.9em;
    font-weight: var(--font-weight-semibold);
    color: var(--white-color);
    background: var(--primary-color);
    cursor: pointer;
    transition:
        transform .2s ease,
        opacity .2s ease;
}

.buttons button:hover {
    transform: translateY(-2px);
    opacity: .9;
}

.buttons button:active {
    transform: translateY(0);
}
</style>

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