export const lockBodyScroll = (lock: boolean = true) => {
  if (typeof document !== 'undefined') {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

export const unlockBodyScroll = () => {
  lockBodyScroll(false);
};

export const trapFocus = (containerElement: HTMLElement | null, event: KeyboardEvent) => {
  if (!containerElement) return;

  const focusableElements = containerElement.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }
};

export const setupFocusTrap = (containerElement: HTMLElement | null) => {
  if (!containerElement) return () => {};

  const handleKeyDown = (event: KeyboardEvent) => {
    trapFocus(containerElement, event);
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
};
