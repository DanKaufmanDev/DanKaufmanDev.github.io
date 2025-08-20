import { reactive } from 'vue';

export const toastState = reactive({
  show: false,
  message: '',
  type: 'success',
});

export function showToast(message, type = 'success', duration = 3000) {
  toastState.message = message;
  toastState.type = type;
  toastState.show = true;

  setTimeout(() => {
    toastState.show = false;
  }, duration);
}
