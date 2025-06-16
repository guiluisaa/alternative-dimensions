import '@testing-library/jest-dom';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  private callback: IntersectionObserverCallback;
  private elements: Set<Element> = new Set();

  root: Element | null = null;
  rootMargin: string = '0px';
  thresholds: ReadonlyArray<number> = [0];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  disconnect() {
    this.elements.clear();
  }

  observe(element: Element) {
    this.elements.add(element);
    // Don't automatically trigger intersection - let tests control this manually
  }

  unobserve(element: Element) {
    this.elements.delete(element);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
} as any;
