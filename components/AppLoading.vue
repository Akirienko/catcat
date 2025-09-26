<template>
  <div class="fixed inset-0 z-[9999] bg-white dark:bg-dark-background flex items-center justify-center transition-colors duration-300">
    <div class="loading-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loading-spinner {
  position: relative;
  width: 64px;
  height: 64px;
}

.loading-spinner div {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  animation: loading-dots 1.5s linear infinite;
}

.dark .loading-spinner div {
  background: #60a5fa;
}

.loading-spinner div:nth-child(1) {
  top: 8px;
  left: 28px;
  animation-delay: 0s;
}

.loading-spinner div:nth-child(2) {
  top: 12px;
  right: 12px;
  animation-delay: -0.15s;
}

.loading-spinner div:nth-child(3) {
  top: 28px;
  right: 8px;
  animation-delay: -0.3s;
}

.loading-spinner div:nth-child(4) {
  bottom: 12px;
  right: 12px;
  animation-delay: -0.45s;
}

.loading-spinner div:nth-child(5) {
  bottom: 8px;
  left: 28px;
  animation-delay: -0.6s;
}

.loading-spinner div:nth-child(6) {
  bottom: 12px;
  left: 12px;
  animation-delay: -0.75s;
}

.loading-spinner div:nth-child(7) {
  top: 28px;
  left: 8px;
  animation-delay: -0.9s;
}

.loading-spinner div:nth-child(8) {
  top: 12px;
  left: 12px;
  animation-delay: -1.05s;
}

@keyframes loading-dots {
  0%, 80%, 100% {
    opacity: 0.4;
  }
  40% {
    opacity: 1;
  }
}
</style>