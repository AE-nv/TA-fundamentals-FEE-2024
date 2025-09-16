import { useToast } from 'primevue/usetoast';
import type { ToastServiceMethods } from 'primevue/toastservice';

let toast: ToastServiceMethods;

export function initToasts() {
  toast = useToast();
}

export function useSuccessToast(
  message: string,
  life: number | undefined = 3000,
  title: string = 'Success',
) {
  toast.add({
    severity: 'success',
    summary: title,
    detail: message,
    life: life,
  });
}

export function useInfoToast(
  message: string,
  life: number | undefined = 3000,
  title: string = 'Info',
) {
  toast.add({
    severity: 'info',
    summary: title,
    detail: message,
    life: life,
  });
}

export function useWarnToast(
  message: string,
  life: number | undefined = 5000,
  title: string = 'Warning',
) {
  toast.add({
    severity: 'warn',
    summary: title,
    detail: message,
    life: life,
  });
}

export function useErrorToast(
  message: string,
  life: number | undefined = 5000,
  title: string = 'Error',
) {
  toast.add({
    severity: 'error',
    summary: title,
    detail: message,
    life: life,
  });
}
