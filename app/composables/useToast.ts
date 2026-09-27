import { ref } from 'vue'

export type ToastType =
    | 'success'
    | 'error'
    | 'warning'
    | 'info'

export interface Toast {
    id: string
    type: ToastType
    title: string
    message: string
    duration: number
}

const toasts = ref<Toast[]>([])

const show = (type: ToastType, title: string, message: string, duration = 4000) => {
    const id = crypto.randomUUID()

    toasts.value.push({
        id,
        type,
        title,
        message,
        duration
    })

    setTimeout(() => {
        remove(id)
    }, duration)

    return id
}

const remove = (id: string) => {
    toasts.value = toasts.value.filter(
        toast => toast.id !== id
    )
}

const success = (title: string, message: string, duration = 4000) => show('success', title, message, duration)
const error = (title: string, message: string, duration = 4000) => show('error', title, message, duration)
const warning = (title: string, message: string, duration = 4000) => show('warning', title, message, duration)
const info = (title: string, message: string, duration = 4000) => show('info', title, message, duration)

const clear = () => {
    toasts.value = []
}

export const useToast = () => ({
    toasts,
    show,
    remove,
    clear,
    success,
    error,
    warning,
    info
})