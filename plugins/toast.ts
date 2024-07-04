import Vue3Toastify, {
  type ToastContainerOptions,
  toast,
  type Content,
} from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((Nuxtapp) => {
  Nuxtapp.vueApp.use(Vue3Toastify, {
    autoClose: 2000,
  } as ToastContainerOptions);

  toast.error = (message: Content) =>
    toast(message, {
      type: "error",
      position: "bottom-left",
      icon: "✖️",
      theme: "dark",
    });

  toast.success = (message: Content) =>
    toast(message, {
      type: "success",
      position: "top-right",
      icon: "✅",
      theme: "dark",
    });

  return {
    provide: {
      toast,
    },
  };
});
