<template>
    <div id="toast-container">
        
        <TransitionGroup
            name="toast"
            tag="div"
            class="toast-list"
        >

            <div
                v-for="toast in toasts"
                :key="toast.id"
                class="toast"
                :class="toast.type"
            >

                <!-- Icon -->
                <div class="toast-icon" aria-hidden="true">
                    {{ icons[toast.type] }}
                </div>


                <!-- Content -->
                <div class="toast-content">
                    <div class="toast-title">
                        {{ toast.title }}
                    </div>
                    <div class="toast-message">
                        {{ toast.message }}
                    </div>

                </div>

                <!-- Close -->
                <button
                    type="button"
                    class="toast-close"
                    @click="remove(toast.id)"
                >
                    ×
                </button>

                <!-- Progress -->
                <div
                    class="toast-progress"
                    :style="{
                        animationDuration: `${toast.duration}ms`
                    }"
                />

            </div>

        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const {toasts, remove} = useToast()

const icons = {
    success: '✓',
    error: '×',
    warning: '!',
    info: 'i'
}
</script>