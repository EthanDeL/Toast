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

<style>
/* TOAST CONTAINER */
#toast-container {
    position: fixed;
    top: 24px;
    right: 24px;
    width: min(380px,
            calc(100vw - 32px));
    z-index: 9999;
}

.toast-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* TOAST */
.toast {
    position: relative;
    padding: 15px 16px;
    display: flex;
    align-items: flex-start;
    gap: 13px;
    border-radius: 14px;
    background: var(--background-color-toast);
    box-shadow:
        0 15px 40px rgba(15, 23, 42, .12),
        0 3px 10px rgba(15, 23, 42, .06);
    overflow: hidden;
}

/* VUE TRANSITION */
.toast-enter-active,
.toast-leave-active {
    transition:
        opacity .3s ease,
        transform .3s ease,
        max-height .3s ease,
        margin .3s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(30px) scale(.96);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(30px) scale(.96);
    margin-bottom: -12px;
}

.toast-move {
    transition: transform .3s ease;
}

/* ICON */
.toast-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: 1.2em;
    font-weight: var(--font-weight-semibold);
}

.toast.success .toast-icon {
    background: var(--success-color-background);
    color: var(--success-color-text);
}

.toast.error .toast-icon {
    background: var(--error-color-background);
    color: var(--error-color-text);
}

.toast.warning .toast-icon {
    background: var(--warning-color-background);
    color: var(--warning-color-text);
}

.toast.info .toast-icon {
    background: var(--info-color-background);
    color: var(--info-color-text);
}

/* CONTENT */
.toast-content {
    flex: 1;
    min-width: 0;
    padding-top: 1px;
}

.toast-title {
    margin-bottom: 3px;
    font-size: 0.9em;
    font-weight: var(--font-weight-semibold);
    color: var(--primary-color);
}

.toast-message {
    font-size: 0.8em;
    color: var(--secondary-color);
}

/* CLOSE */
.toast-close {
    width: 25px;
    height: 25px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 6px;
    font-size: 1.1em;
    color: var(--close-color);
    background: transparent;
    cursor: pointer;
    transition:
        background .2s ease,
        color .2s ease;
}

.toast-close:hover {
    background: var(--light-gray-color);
    color: var(--dark-gray-color);
}

/* PROGRESS */
.toast-progress {
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    bottom: 0;
    transform-origin: left;
    animation-name: toast-progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

.toast.success .toast-progress {
    background: var(--success-color-text);
}

.toast.error .toast-progress {
    background: var(--error-color-text);
}

.toast.warning .toast-progress {
    background: var(--warning-color-text);
}

.toast.info .toast-progress {
    background: var(--info-color-text);
}

@keyframes toast-progress {
    from {
        transform: scaleX(1);
    }

    to {
        transform: scaleX(0);
    }
}

/* BREAKPOINTS */
@media (max-width: 600px) {
    #toast-container {
        width: auto;
        top: 12px;
        right: 12px;
        left: 12px;
    }

    .toast {
        padding: 14px;
    }
}
</style>

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